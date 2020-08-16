import { ServiceNowTableQuery, ServiceNowAggregationQuery } from './ServiceNowQuery';
import { ServiceNowResultsParser } from './ServiceNowResultsParser';
import { Annotation, ServiceNowAnnotationQuery } from './../editors/annotations/annotation';
import { ServiceNowPluginQuery } from './ServiceNowQuery';
import { getBackendSrv } from './../grafana';

const replaceWithGrafanaTimeRange = (field: string, from: any, to: any): string => {
  const fromDateString = `javascript:gs.dateGenerate('${from.format('YYYY-MM-DD')}','${from.format('HH:mm:ss')}')`;
  const toDateString = `javascript:gs.dateGenerate('${to.format('YYYY-MM-DD')}','${to.format('HH:mm:ss')}')`;
  field = field.replace('$__timeFrom()', fromDateString);
  field = field.replace('$__timeTo()', toDateString);
  field = field.replace('$__timeFilter()', `${fromDateString}@${toDateString}`);
  return field;
};
export class ServiceNowInstance {
  url: string;
  constructor(private instanceSettings: any, private templateSrv: any) {
    this.url = this.instanceSettings.url;
  }
  getServiceNowResults(query: ServiceNowTableQuery | ServiceNowAggregationQuery, maxRetries = 1): Promise<any> {
    const url = this.url + query.getUrl();
    return getBackendSrv()
      .datasourceRequest({ method: 'GET', url })
      .catch((error: any) => {
        console.log(error);
        if (maxRetries > 0) {
          return this.getServiceNowResults(query, maxRetries - 1);
        }
        throw error;
      });
  }
  private doQueries(queries: ServiceNowPluginQuery[], options: any) {
    return queries.map((query: ServiceNowPluginQuery) => {
      const servicenowQueryItem = query.servicenow;
      if (servicenowQueryItem && servicenowQueryItem.query) {
        servicenowQueryItem.query = replaceWithGrafanaTimeRange(servicenowQueryItem.query, options.range.from, options.range.to);
        servicenowQueryItem.query = this.templateSrv.replace(servicenowQueryItem.query, {}, 'glob');
      }
      if (servicenowQueryItem && servicenowQueryItem.filters) {
        servicenowQueryItem.filters = servicenowQueryItem.filters.map(filter => {
          filter.value = replaceWithGrafanaTimeRange(filter.value, options.range.from, options.range.to);
          filter.value = this.templateSrv.replace(filter.value, {}, 'glob');
          return filter;
        });
      }
      let q: ServiceNowTableQuery | ServiceNowAnnotationQuery = new ServiceNowAggregationQuery('', [], '', 'true', []);
      if (query.servicenow && query.servicenow.type === 'table') {
        const sn = query.servicenow;
        q = new ServiceNowTableQuery(
          sn.table,
          sn.fields.map(a => a.trim()).filter(Boolean),
          sn.query,
          sn.limit,
          sn.filters,
          sn.orderBy,
          sn.orderByDirection
        );
      } else if (query.servicenow && query.servicenow.type === 'stats') {
        const sn = query.servicenow;
        q = new ServiceNowAggregationQuery(sn.table, sn.groupBy.map(a => a.trim()).filter(Boolean), sn.query, 'true', sn.filters);
      }
      return this.getServiceNowResults(q)
        .then((result: any) => {
          return { result, query, options };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }
  private doAnnotationQueries(queries: ServiceNowAnnotationQuery[], options: any) {
    return queries.map((query: ServiceNowAnnotationQuery) => {
      query.query = replaceWithGrafanaTimeRange(query.query, options.range.from, options.range.to);
      const q = new ServiceNowTableQuery(query.table, query.fields, query.query, query.limit, [], query.startTimeField, 'asc');
      return this.getServiceNowResults(q)
        .then((result: any) => {
          return { result, query, options: {} };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }
  query(options: any): Promise<any> {
    let queries: ServiceNowPluginQuery[] = [];
    if (options.targets) {
      queries = options.targets.filter((item: ServiceNowPluginQuery) => {
        return item.hide !== true;
      });
    }
    const promises = this.doQueries(queries, options);
    return Promise.all(promises).then((results: any) => {
      const parsedResults = new ServiceNowResultsParser(results);
      return parsedResults.output;
    });
  }
  annotationsQuery(options: any): Promise<Annotation[]> {
    let queries: ServiceNowAnnotationQuery[] = [];
    if (options.targets) {
      queries = options.targets.filter((item: any) => {
        return item.hide !== true;
      });
    } else if (options.annotation) {
      const annotationQuery = {
        limit: options.annotation.limit || 30,
        startTimeField: options.annotation.startTimeField,
        endTimeField: options.annotation.endTimeField,
        titleField: options.annotation.titleField,
        descriptionField: options.annotation.descriptionField,
        fields: [
          ...options.annotation.fields.split(','),
          options.annotation.titleField,
          options.annotation.descriptionField,
          options.annotation.startTimeField,
          options.annotation.endTimeField,
        ],
        query: options.annotation.query || '',
        table: options.annotation.table,
      };
      queries.push(annotationQuery);
    }
    const promises = this.doAnnotationQueries(queries, options);
    return Promise.all(promises).then((results: any) => {
      const parsedResults = new ServiceNowResultsParser(results);
      return parsedResults.getResultsAsAnnotations();
    });
  }
}

import { ServiceNowResultsParser } from './ServiceNowResultsParser';
import { Annotation, ServiceNowAnnotationQuery } from './annotations/annotation';
import { ServiceNowQuery, ServiceNowPluginQuery, doServiceNowRequest } from './ServiceNowQuery';

export class ServiceNowDataSource {
  url = '';
  constructor(private instanceSettings: any) {
    this.url = this.instanceSettings.url + '';
  }
  private doQueries(queries: ServiceNowPluginQuery[], options: any) {
    return queries.map((query: ServiceNowPluginQuery) => {
      const serviceNowQuery = new ServiceNowQuery(query.servicenow);
      return doServiceNowRequest(this.url + serviceNowQuery.getUrl(), serviceNowQuery)
        .then((result: any) => {
          return { result, query, options };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }
  private doAnnotationQueries(queries: ServiceNowAnnotationQuery[]) {
    return queries.map((query: ServiceNowAnnotationQuery) => {
      const serviceNowQuery = new ServiceNowQuery(query);
      return doServiceNowRequest(this.url + serviceNowQuery.getUrl(), serviceNowQuery)
        .then((result: any) => {
          return { result, query, options: {} };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }
  query(options: any): Promise<any> {
    let queries: any[] = [];
    if (options.targets) {
      queries = options.targets.filter((item: any) => {
        return item.hide !== true;
      });
    }
    const promises = this.doQueries(queries, options);
    return Promise.all(promises).then((results: any) => {
      const parsedResults = new ServiceNowResultsParser(results);
      if (parsedResults.resultFormat === 'time_series') {
        return parsedResults.getResultsAsTimeSeries(new Date(results[0].options.range.to).getTime());
      }
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
        ]
          .filter(Boolean)
          .join(','),
        query: options.annotation.query || '',
        table: options.annotation.table,
      };
      queries.push(annotationQuery);
    }
    const promises = this.doAnnotationQueries(queries);
    return Promise.all(promises).then((results: any) => {
      const parsedResults = new ServiceNowResultsParser(results);
      return parsedResults.getResultsAsAnnotations();
    });
  }
}

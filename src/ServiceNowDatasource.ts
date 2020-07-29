import { ServiceNowResultsParser } from './ServiceNowResultsParser';
import { Annotation, ServiceNowAnnotationQuery } from './annotations/annotation';

/** @ngInject */
export class ServiceNowDataSource {
  url = '';

  constructor(private instanceSettings: any, private backendSrv: any) {
    this.url = this.instanceSettings.url + '/servicenow';
  }
  private doServiceNowRequest(options: any, maxRetries = 1) {
    const URL_PARAMS: any[] = [];
    URL_PARAMS.push(`sysparm_limit=${options.limit || 10}`);
    URL_PARAMS.push(`sysparm_display_value=all`);
    if (options.fields && options.fields !== '*') {
      URL_PARAMS.push(`sysparm_fields=${options.fields || 'opened_at,number,short_description,sys_created_by,severity,category,state,priority'}`);
    }
    if (options.query) {
      const sysparmQueries = [options.query];
      URL_PARAMS.push(`sysparm_query=${sysparmQueries.join('^')}`);
    }
    return this.backendSrv
      .datasourceRequest({
        method: 'GET',
        url: this.url + `/api/now/${options.type || 'table'}/${options.table}?${URL_PARAMS.join('&')}`,
      })
      .catch((error: any) => {
        console.log(error);
        if (maxRetries > 0) {
          return this.doServiceNowRequest(options, maxRetries - 1);
        }
        throw error;
      });
  }
  private doQueries(queries: any[]) {
    return queries.map((query: any) => {
      return this.doServiceNowRequest(query)
        .then((result: any) => {
          return { result, query, queryType: 'query' };
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
    } else if (options.annotation) {
      queries.push({
        _queryType: 'annotation',
        limit: 10,
        fields: 'sys_created_on,number,short_description',
        query: '',
        table: 'incident',
      });
    }
    const promises = this.doQueries(queries);
    return Promise.all(promises).then((results: any) => {
      const parsedResults = new ServiceNowResultsParser(results);
      return parsedResults.output;
    });
  }
  private doAnnotationQueries(queries: any[]) {
    return queries.map((query: any) => {
      return this.doServiceNowRequest(query)
        .then((result: any) => {
          return { result, query, queryType: 'annotation' };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }
  annotationsQuery(options: any): Promise<Annotation[]> {
    let queries: ServiceNowAnnotationQuery[] = [];
    if (options.targets) {
      queries = options.targets.filter((item: any) => {
        return item.hide !== true;
      });
    } else if (options.annotation) {
      queries.push({
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
      });
    }
    const promises = this.doAnnotationQueries(queries);
    return Promise.all(promises).then((results: any) => {
      const parsedResults = new ServiceNowResultsParser(results);
      return parsedResults.getResultsAsAnnotations();
    });
  }
}

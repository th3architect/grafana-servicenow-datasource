import { flatten, cloneDeep } from 'lodash';
import { DataSourceApi } from './grafana';
import { ServiceNowInstance } from './servicenow/ServiceNowInstance';
import { ServiceNowQuery } from './servicenow/ServiceNowQuery';

export class Datasource extends DataSourceApi {
  private serviceNowInstance: ServiceNowInstance;

  /** @ngInject */
  constructor(private instanceSettings: any, private templateSrv: any) {
    super(instanceSettings);
    this.serviceNowInstance = new ServiceNowInstance(this.instanceSettings, this.templateSrv);
  }

  query(options: any) {
    const promises: any[] = [];
    const snOptions = cloneDeep(options);
    if (snOptions.targets.length > 0) {
      const snIncidentPromise = this.serviceNowInstance.query(snOptions);
      if (snIncidentPromise) {
        promises.push(snIncidentPromise);
      }
    }
    return Promise.all(promises).then(results => {
      return { data: flatten(results) };
    });
  }

  annotationQuery(options: any) {
    options.annotation.query = this.templateSrv.replace(options.annotation.query, {}, 'glob');
    const annotationQuery = {
      range: options.range,
      rangeRaw: options.rangeRaw,
      annotation: options.annotation,
    };
    return this.serviceNowInstance
      .annotationsQuery(annotationQuery)
      .then((result: any) => {
        return result;
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }

  metricFindQuery(query: string) {
    if (!query) {
      return Promise.resolve([]);
    }
    return Promise.resolve([]);
  }

  testDatasource() {
    return new Promise(async (resolve: any, reject: any) => {
      const query = new ServiceNowQuery('doc', 'table/schema', '', [], 'all', '', 'asc');
      this.serviceNowInstance
        .getServiceNowResults(query, 0)
        .then((result: any) => {
          if (result && result.status === 200 && result.data && result.data.result) {
            resolve({ message: `Successfully Connected ServiceNow.${result.data.result.length} tables found.`, status: 'success' });
          } else {
            console.error(result);
            reject({ message: 'Failed to Connect ServiceNow', status: 'error' });
          }
        })
        .catch((ex: any) => {
          console.error(ex);
          reject({ message: 'Failed to Connect ServiceNow', status: 'error' });
        });
    });
  }
}

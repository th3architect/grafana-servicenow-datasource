import { flatten, cloneDeep } from 'lodash';
import { DataSourceApi } from '@grafana/data';
import { ServiceNowDataSource } from './datasources/ServiceNowDatasource';

export class Datasource extends DataSourceApi {
  private serviceNowDataSource: ServiceNowDataSource;

  /** @ngInject */
  constructor(private instanceSettings: any, private backendSrv: any, private templateSrv: any) {
    super(instanceSettings);
    this.serviceNowDataSource = new ServiceNowDataSource(this.instanceSettings, this.backendSrv, this.templateSrv);
  }

  query(options: any) {
    const promises: any[] = [];
    const snOptions = cloneDeep(options);
    if (snOptions.targets.length > 0) {
      const snIncidentPromise = this.serviceNowDataSource.query(snOptions);
      if(snIncidentPromise){
        promises.push(snIncidentPromise);
      }
    }
    return Promise.all(promises).then(results => {
      return { data: flatten(results) };
    });
  }

  testDatasource() {
    return new Promise(async (resolve: any, reject: any) => {
      this.serviceNowDataSource.query({
        range: {
          from: '',
          to: '',
        },
        targets: [
        ],
      }).then((result: any) => {
        resolve({ message: 'Successfully Connected ServiceNow', status: 'success' });
      }).catch((ex: any) => {
        reject({ message: 'Failed to Connect ServiceNow', status: 'error' });
      })
    });
  }

  metricFindQuery(query: string) {
    if (!query) {
      return Promise.resolve([]);
    }
    return Promise.resolve([]);
  }
}

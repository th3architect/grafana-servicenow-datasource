import { flatten, cloneDeep } from 'lodash';
import { DataSourceApi } from './grafana';
import { ServiceNowDataSource } from './ServiceNowDatasource';

export class Datasource extends DataSourceApi {
  private serviceNowDataSource: ServiceNowDataSource;

  /** @ngInject */
  constructor(private instanceSettings: any, private templateSrv: any) {
    super(instanceSettings);
    this.serviceNowDataSource = new ServiceNowDataSource(this.instanceSettings);
  }

  query(options: any) {
    const promises: any[] = [];
    const snOptions = cloneDeep(options);
    if (snOptions.targets.length > 0) {
      const snIncidentPromise = this.serviceNowDataSource.query(snOptions);
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
    return this.serviceNowDataSource
      .annotationsQuery(annotationQuery)
      .then((result: any) => {
        return result;
      })
      .catch((ex: any) => {
        console.error(ex);
        return [];
      });
  }

  testDatasource() {
    return new Promise(async (resolve: any, reject: any) => {
      this.serviceNowDataSource
        .query({
          range: {
            from: '',
            to: '',
          },
          targets: [],
        })
        .then((result: any) => {
          resolve({ message: 'Successfully Connected ServiceNow', status: 'success' });
        })
        .catch((ex: any) => {
          reject({ message: 'Failed to Connect ServiceNow', status: 'error' });
        });
    });
  }

  metricFindQuery(query: string) {
    if (!query) {
      return Promise.resolve([]);
    }
    return Promise.resolve([]);
  }
}

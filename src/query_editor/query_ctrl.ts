import { defaultsDeep } from 'lodash';
import { QueryCtrl } from 'grafana/app/plugins/sdk';
import { TEMPLATE_URL, TABLE_NAMES } from './../config';

export class ServiceNowQueryCtrl extends QueryCtrl {
  static templateUrl = TEMPLATE_URL.QUERY_EDITOR;
  supportedTables = TABLE_NAMES;
  supportedTypes = [{ text: 'Table', value: 'table' }];
  defaults = {
    servicenow: {
      table: 'incident',
      type: 'table',
      fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority',
      query: 'ORDERBYDESCopened_at',
      limit: 10,
    },
  };

  /** @ngInject */
  constructor($scope: any, $injector: any) {
    super($scope, $injector);
    defaultsDeep(this.target, this.defaults);
  }
}

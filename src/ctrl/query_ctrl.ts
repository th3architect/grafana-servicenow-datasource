import { defaultsDeep } from 'lodash';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

export class ServiceNowQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';
  supportedTables = [
    { text: 'Incidents (INC)', value: 'incident' },
    { text: 'Change Request (CHG)', value: 'change_request' }
  ];
  supportedTypes = [
    { text: 'Table', value: 'table' }
  ];
  defaults = {
    table: 'incident',
    type: 'table',
    fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority',
    query: 'incident_state=1^ORincident_state=2^ORincident_state=3^ORincident_state=4^ORincident_state=5^ORincident_state=10',
    limit: 10,
  };

  /** @ngInject */
  constructor($scope: any, $injector: any) {
    super($scope, $injector);
    defaultsDeep(this.target, this.defaults);
  }
}

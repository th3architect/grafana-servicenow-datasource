import React, { PureComponent } from 'react';
import { Select } from './../../grafana';
import { onSelectChange } from './../../utils';
import { TABLE_NAMES, QUERY_TYPES } from './../../config';
import { ServiceNowQueryHelpCtrl } from './Help';

export class ServiceNowQueryTableAndTypeCtrl extends PureComponent<any, any> {
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label query-keyword width-8">Table</label>
            <Select
              className="width-12"
              value={
                TABLE_NAMES.find((service: any) => service.value === query.servicenow.table) || {
                  label: query.servicenow.table,
                  value: query.servicenow.table,
                }
              }
              options={TABLE_NAMES}
              defaultValue={query.servicenow.table}
              onChange={e => onSelectChange(e, 'table', this.props)}
              allowCustomValue
            />
          </div>
          <div className="gf-form">
            <label className="gf-form-label query-keyword width-6">Type</label>
            <Select
              className="width-12"
              value={QUERY_TYPES.find((service: any) => service.value === query.servicenow.type)}
              options={QUERY_TYPES}
              defaultValue={query.servicenow.type}
              onChange={e => onSelectChange(e, 'type', this.props)}
            />
            <ServiceNowQueryHelpCtrl />
          </div>
        </div>
      </div>
    );
  }
}

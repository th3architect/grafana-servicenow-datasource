import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../grafana';
import { onSelectChange } from './../utils';
import { TABLE_NAMES } from './../config';
import { ServiceNowQueryHelpCtrl } from './Help';

const SUPPORTED_TABLES: SelectableValue[] = TABLE_NAMES as SelectableValue[];

const SUPPORTED_TYPES: SelectableValue[] = [
  { label: 'Table', value: 'table' },
  { label: 'Stats', value: 'stats' },
];

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
                SUPPORTED_TABLES.find((service: any) => service.value === query.servicenow.table) || {
                  label: query.servicenow.table,
                  value: query.servicenow.table,
                }
              }
              options={SUPPORTED_TABLES}
              defaultValue={query.servicenow.table}
              onChange={e => onSelectChange(e, 'table', this.props)}
              allowCustomValue
            />
          </div>
          <div className="gf-form">
            <label className="gf-form-label query-keyword width-6">Type</label>
            <Select
              className="width-12"
              value={SUPPORTED_TYPES.find((service: any) => service.value === query.servicenow.type)}
              options={SUPPORTED_TYPES}
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

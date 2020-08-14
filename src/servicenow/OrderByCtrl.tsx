import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../grafana';
import { onSelectChange } from './../utils';
import { FieldsList } from './Field';

const ORDER_DIRECTIONS: SelectableValue[] = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' },
];

export class ServiceNowQueryOrderByCtrl extends PureComponent<any, any> {
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Order By">
              Order By
            </label>
            <Select
              className="width-12"
              value={
                FieldsList.find((field: any) => field.value === query.servicenow.orderBy) || {
                  value: query.servicenow.orderBy,
                  label: query.servicenow.orderBy,
                }
              }
              options={FieldsList.filter((field: any) => field.tables.indexOf(query.servicenow.table) > -1)}
              defaultValue={query.servicenow.orderBy}
              onChange={e => onSelectChange(e, `orderBy`, this.props)}
              allowCustomValue
            />
            <label className="gf-form-label width-8" title="Order Direction">
              Order Direction
            </label>
            <Select
              className="width-10"
              value={ORDER_DIRECTIONS.find((service: any) => service.value === query.servicenow.orderByDirection)}
              options={ORDER_DIRECTIONS}
              defaultValue={query.servicenow.orderByDirection}
              onChange={e => onSelectChange(e, 'orderByDirection', this.props)}
            />
          </div>
        </div>
      </div>
    );
  }
}

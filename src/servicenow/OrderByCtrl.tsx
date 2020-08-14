import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../grafana';
import { onInputTextChange, onSelectChange } from './../utils';

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
            <input
              className="gf-form-input width-12"
              type="text"
              onChange={e => onInputTextChange(e, 'orderBy', this.props)}
              value={query.servicenow.orderBy}
              placeholder=""
              title="Order By"
            ></input>
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

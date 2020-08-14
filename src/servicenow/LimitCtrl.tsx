import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../grafana';
import { onSelectChange } from './../utils';

const LIMITS: SelectableValue[] = [10, 25, 50, 100, 250, 500, 1000].map(i => {
  return { label: i.toString(), value: i.toString() } as SelectableValue;
});

export class ServiceNowQueryLimitCtrl extends PureComponent<any, any> {
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Limit">
              Limit
            </label>
            <Select
              className="width-12"
              value={
                LIMITS.find((service: any) => service.value === query.servicenow.limit) || {
                  value: query.servicenow.limit,
                  label: query.servicenow.limit,
                }
              }
              options={LIMITS}
              defaultValue={query.servicenow.limit}
              onChange={e => onSelectChange(e, 'limit', this.props)}
              allowCustomValue
            />
          </div>
        </div>
      </div>
    );
  }
}

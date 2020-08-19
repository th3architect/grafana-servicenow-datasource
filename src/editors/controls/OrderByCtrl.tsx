import React, { PureComponent } from 'react';
import { Select, SelectableValue } from './../../grafana';
import { onSelectChange } from './../../utils';
import { FIELDS_LIST, RESULT_FORMATS } from './../../config';

const ORDER_DIRECTIONS: SelectableValue[] = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' },
];

const LIMITS: SelectableValue[] = [10, 25, 50, 100, 250, 500, 1000].map(i => {
  return { label: i.toString(), value: i.toString() } as SelectableValue;
});

export class ServiceNowQueryOrderByCtrl extends PureComponent<any, any> {
  render() {
    const query = this.props.query;
    const orderByCtrl: any =
      query.servicenow.type === 'table' ? (
        <>
          <div className="gf-form-inline">
            <div className="gf-form">
              <label className="gf-form-label width-8" title="Order By">
                Order By
              </label>
              <Select
                className="width-12"
                value={
                  FIELDS_LIST.find((field: any) => field.value === query.servicenow.orderBy) || {
                    value: query.servicenow.orderBy,
                    label: query.servicenow.orderBy,
                  }
                }
                options={FIELDS_LIST.filter((field: any) => field.tables.indexOf(query.servicenow.table) > -1)}
                defaultValue={query.servicenow.orderBy}
                onChange={e => onSelectChange(e, `orderBy`, this.props)}
                allowCustomValue
              />
              <Select
                className="width-8"
                value={ORDER_DIRECTIONS.find((service: any) => service.value === query.servicenow.orderByDirection)}
                options={ORDER_DIRECTIONS}
                defaultValue={query.servicenow.orderByDirection}
                onChange={e => onSelectChange(e, 'orderByDirection', this.props)}
              />
              &nbsp;&nbsp;
              <label className="gf-form-label width-4" title="Limit">
                Limit
              </label>
              <Select
                className="width-6"
                value={
                  LIMITS.find((service: any) => service.value === query.servicenow.limit) || {
                    value: query.servicenow.limit,
                    label: query.servicenow.limit,
                  }
                }
                options={LIMITS}
                defaultValue={query.servicenow.limit}
                onChange={e => onSelectChange(e, 'limit', this.props, 'number')}
                allowCustomValue
              />
              &nbsp;&nbsp;
            </div>
          </div>
        </>
      ) : (
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Result Format">
              Result Format
            </label>
            <Select
              className="width-6"
              value={
                RESULT_FORMATS.find((service: any) => service.value === query.servicenow.resultFormat) || {
                  value: query.servicenow.resultFormat || 'table',
                  label: query.servicenow.resultFormat || 'Table',
                }
              }
              options={RESULT_FORMATS}
              defaultValue={query.servicenow.resultFormat}
              onChange={e => onSelectChange(e, 'resultFormat', this.props)}
              allowCustomValue
            />
          </div>
        </div>
      );
    return <>{orderByCtrl}</>;
  }
}

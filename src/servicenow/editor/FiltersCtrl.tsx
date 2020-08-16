import React, { PureComponent } from 'react';
import { ServiceNowQueryCtrlFields, ServiceNowQueryFilter, type_service_now_query_filter_condition } from './../ServiceNowQuery';
import { Select } from './../../grafana';
import { onSelectChange, onInputTextChange } from './../../utils';
import { FIELDS_LIST, FILTER_OPERATIONS, FILTER_VALUES } from './../../config';

export class ServiceNowQueryFiltersCtrl extends PureComponent<any, any> {
  onFilterAdd = (condition: type_service_now_query_filter_condition = '^') => {
    const { query, onChange } = this.props;
    const servicenow: ServiceNowQueryCtrlFields = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('number', 'LIKE', 'INC', condition);
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters.push(newFilter);
    onChange({ ...query, servicenow });
  };
  onFilterRemove = (index: number) => {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('active', '=', 'true', '^');
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters.splice(index, 1);
    onChange({ ...query, servicenow });
  };
  render() {
    const { query } = this.props;
    return (
      <div>
        {query.servicenow.filters.length === 0 ? (
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <label className="gf-form-label width-8" title="Filter">
                  Filter
                </label>
              </div>
            </div>
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <span className="btn btn-success btn-small" style={{ margin: '5px' }} onClick={() => this.onFilterAdd('^')}>
                  Add Filter
                </span>
              </div>
            </div>
          </div>
        ) : null}
        {query.servicenow.filters.map((filter: ServiceNowQueryFilter, index: number) => {
          let valueCtrl: any;
          valueCtrl = (
            <input
              type="text"
              className="gf-form-input width-12"
              title="Value"
              placeholder="Value"
              value={filter.value}
              onChange={e => onInputTextChange(e, `filters[${index}].value`, this.props)}
            ></input>
          );
          if (filter.field === 'active' && (filter.operator === '=' || filter.operator === '!=')) {
            valueCtrl = (
              <Select
                className="width-12"
                value={FILTER_VALUES.active.find((field: any) => field.value === filter.value) || { value: filter.value, label: filter.value }}
                options={FILTER_VALUES.active}
                defaultValue={'true'}
                onChange={e => onSelectChange(e, `filters[${index}].value`, this.props)}
              />
            );
          }
          return (
            <div className="gf-form-inline">
              <div className="gf-form">
                <div className="gf-form gf-form--grow">
                  <label className="gf-form-label width-8" title="Filter">
                    Filter {index + 1}
                  </label>
                </div>
              </div>
              <div className="gf-form">
                <div className="gf-form gf-form--grow">
                  <Select
                    className="width-12"
                    value={FIELDS_LIST.find((field: any) => field.value === filter.field) || { value: filter.field, label: filter.field }}
                    options={FIELDS_LIST.filter((field: any) => field.tables.indexOf(query.servicenow.table) > -1)}
                    defaultValue={filter.field}
                    onChange={e => {
                      onSelectChange(e, `filters[${index}].field`, this.props);
                      onSelectChange({ value: '=' }, `filters[${index}].operator`, this.props);
                      if (e.value === 'active') {
                        onSelectChange({ value: 'true' }, `filters[${index}].value`, this.props);
                      } else {
                        onSelectChange({ value: '' }, `filters[${index}].value`, this.props);
                      }
                    }}
                    allowCustomValue
                  />
                  <Select
                    className="width-12"
                    value={
                      FILTER_OPERATIONS.find((gran: any) => gran.value === filter.operator) || { value: filter.operator, label: filter.operator }
                    }
                    options={FILTER_OPERATIONS}
                    defaultValue={filter.operator}
                    onChange={e => onSelectChange(e, `filters[${index}].operator`, this.props)}
                    allowCustomValue
                  />
                  {valueCtrl}
                </div>
              </div>
              <span>
                <div className="gf-form">
                  <div className="gf-form gf-form--grow">
                    {index === query.servicenow.filters.length - 1 ? (
                      <span className="btn btn-success btn-small" style={{ margin: '5px' }} onClick={() => this.onFilterAdd('^')}>
                        +
                      </span>
                    ) : null}
                    <span className="btn btn-danger btn-small" style={{ margin: '5px' }} onClick={() => this.onFilterRemove(index)}>
                      x
                    </span>
                  </div>
                </div>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

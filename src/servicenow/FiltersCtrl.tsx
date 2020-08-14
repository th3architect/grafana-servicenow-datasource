import React, { PureComponent } from 'react';
import { ServiceNowQueryFilter, ServiceNowQuery, SERVICE_NOW_QUERY_FILTER_CONDITION } from './../ServiceNowQuery';
import { Select, SelectableValue } from './../grafana';
import { FieldsList } from './Field';
import { onSelectChange, onInputTextChange } from './../utils';

const FilterOperators: SelectableValue[] = [
  { value: '=', label: 'Equals' },
  { value: '!=', label: 'Not Equals' },
  { value: '<', label: 'Less than' },
  { value: '<=', label: 'Less than or Equals' },
  { value: '>', label: 'Greater than' },
  { value: '>=', label: 'Greater than or Equals' },
  { value: 'STARTSWITH', label: 'Starts With' },
  { value: 'ENDSWITH', label: 'Ends With' },
  { value: 'LIKE', label: 'Like' },
  { value: 'NOTLIKE', label: 'Not Like' },
  { value: 'ISEMPTY', label: 'Is Empty' },
  { value: 'ISNOTEMPTY', label: 'Is Not Empty' },
  { value: 'IN', label: 'In' },
  { value: 'NOT IN', label: 'Not In' },
  { value: 'ANYTHING', label: 'Anything' },
  { value: 'BETWEEN', label: 'Between' },
  { value: 'SAMEAS', label: 'Is Same' },
  { value: 'NSAMEAS', label: 'Is Different' },
  { value: 'ONToday', label: 'On Today' },
  { value: 'NOTONToday', label: 'NOT ON Today' },
  { value: 'DATEPART', label: 'Date Part' },
  { value: 'RELATIVEGE', label: 'Relative (on or after)' },
  { value: 'RELATIVELE', label: 'Relative (on or before)' },
  { value: 'RELATIVEGT', label: 'Relative (after)' },
  { value: 'RELATIVELT', label: 'Relative (before)' },
  { value: 'RELATIVEEE', label: 'Relative (on)' },
  { value: 'MORETHAN', label: 'Is More than' },
  { value: 'LESSTHAN', label: 'Is Less than' },
  { value: 'GT_FIELD', label: 'Greater than field' },
  { value: 'LT_FIELD', label: 'Less than field' },
  { value: 'GT_OR_EQUALS_FIELD', label: 'Greater than or is field' },
  { value: 'LT_OR_EQUALS_FIELD', label: 'Less than or is field' },
];
export class ServiceNowQueryFiltersCtrl extends PureComponent<any, any> {
  onFilterAdd = (condition: SERVICE_NOW_QUERY_FILTER_CONDITION = '^') => {
    const { query, onChange } = this.props;
    const servicenow: ServiceNowQuery = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG', condition);
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters.push(newFilter);
    onChange({ ...query, servicenow });
  };
  onFilterRemove = (index: number) => {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG', '^');
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
        {query.servicenow.filters.map((filter: ServiceNowQueryFilter, index: number) => (
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
                  value={FieldsList.find((field: any) => field.value === filter.field) || { value: filter.field, label: filter.field }}
                  options={FieldsList.filter((field: any) => field.tables.indexOf(query.servicenow.table) > -1)}
                  defaultValue={filter.field}
                  onChange={e => onSelectChange(e, `filters[${index}].field`, this.props)}
                  allowCustomValue
                />
                <Select
                  className="width-12"
                  value={FilterOperators.find((gran: any) => gran.value === filter.operator) || { value: filter.operator, label: filter.operator }}
                  options={FilterOperators}
                  defaultValue={filter.operator}
                  onChange={e => onSelectChange(e, `filters[${index}].operator`, this.props)}
                  allowCustomValue
                />
                <input
                  type="text"
                  className="gf-form-input width-12"
                  title="Value"
                  placeholder="Value"
                  value={filter.value}
                  onChange={e => onInputTextChange(e, `filters[${index}].value`, this.props)}
                ></input>
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
        ))}
      </div>
    );
  }
}

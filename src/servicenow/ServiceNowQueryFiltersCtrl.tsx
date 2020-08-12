import React, { PureComponent, ChangeEvent } from 'react';
import { ServiceNowQueryFilter, ServiceNowQuery, SERVICE_NOW_QUERY_FILTER_CONDITION } from './../ServiceNowQuery';
import { Select, SelectableValue } from './../grafana';

const FilterFields: SelectableValue[] = [
  { value: 'number', label: 'Number', tables: ['incident', 'change_request'] },
  { value: 'short_description', label: 'Short Description', tables: ['incident', 'change_request'] },
  { value: 'incident_state', label: 'Incident State', tables: ['incident'] },
  { value: 'state', label: 'State', tables: ['incident'] },
  { value: 'assigned_to', label: 'Assigned To', tables: ['incident'] },
  { value: 'assignment_group.name', label: 'Assignment Group', tables: ['incident', 'change_request'] },
  { value: 'assignment_group', label: 'Assignment Group ID', tables: ['incident', 'change_request'] },
  { value: 'sys_created_by', label: 'Created By', tables: ['incident'] },
  { value: 'sys_opened_by', label: 'Opened By', tables: ['incident'] },
  { value: 'business_service', label: 'Business Service', tables: ['incident'] },
  { value: 'cmdb_ci', label: 'CMDB CI', tables: ['incident'] },
  { value: 'active', label: 'Active', tables: ['incident'] },
  { value: 'priority', label: 'Priority', tables: ['incident'] },
  { value: 'phase_state', label: 'Phase State', tables: ['change_request'] },
  { value: 'type', label: 'Type', tables: ['change_request'] },
  { value: 'start_date', label: 'Start Date', tables: ['change_request'] },
  { value: 'end_date', label: 'End Date', tables: ['change_request'] },
];
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
  onFilterConditionChange = (event: SelectableValue, index: number) => {
    const condition = event.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG', condition);
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters[index].condition = condition;
    onChange({ ...query, servicenow });
  };
  onFilterKeyChange = (event: SelectableValue, index: number) => {
    const filterType = event.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG', '^');
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters[index].field = filterType;
    onChange({ ...query, servicenow });
  };
  onFilterOperatorChange = (event: SelectableValue, index: number) => {
    const operator = event.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG', '^');
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters[index].operator = operator;
    onChange({ ...query, servicenow });
  };
  onFilterValueChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG', '^');
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters[index].value = value;
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
                  value={FilterFields.find((field: any) => field.value === filter.field)}
                  options={FilterFields.filter((field: any) => field.tables.indexOf(query.servicenow.table) > -1)}
                  defaultValue={filter.field}
                  onChange={e => this.onFilterKeyChange(e, index)}
                  allowCustomValue
                />
                <Select
                  className="width-12"
                  value={FilterOperators.find((gran: any) => gran.value === filter.operator)}
                  options={FilterOperators}
                  defaultValue={filter.operator}
                  onChange={e => this.onFilterOperatorChange(e, index)}
                  allowCustomValue
                />
                <input
                  type="text"
                  className="gf-form-input width-12"
                  title="Value"
                  placeholder="Value"
                  value={filter.value}
                  onChange={e => this.onFilterValueChange(e, index)}
                ></input>
              </div>
            </div>
            <span>
              <div className="gf-form">
                <div className="gf-form gf-form--grow">
                  {index !== 0 ? null : (
                    <span className="btn btn-success btn-small" style={{ margin: '5px' }} onClick={() => this.onFilterAdd('^')}>
                      +
                    </span>
                  )}
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

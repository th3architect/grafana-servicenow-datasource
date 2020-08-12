import React, { PureComponent, ChangeEvent } from 'react';
import { ServiceNowQueryFilter } from './../ServiceNowQuery';
import { Select, SelectableValue } from './../grafana';

const FilterFields: SelectableValue[] = [
  { value: 'Key', label: 'Key' },
  { value: 'incident_state', label: 'Incident State' },
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
];
export class ServiceNowQueryFiltersCtrl extends PureComponent<any, any> {
  onFilterAdd = () => {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('Key', '=', 'Value');
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters.push(newFilter);
    onChange({ ...query, servicenow });
  };
  onFilterRemove = (index: number) => {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('Key', '=', 'Value');
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters.splice(index, 1);
    onChange({ ...query, servicenow });
  };
  onFilterKeyChange = (event: SelectableValue, index: number) => {
    const filterType = event.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('Key', '=', 'Value');
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters[index].field = filterType;
    onChange({ ...query, servicenow });
  };
  onFilterOperatorChange = (event: SelectableValue, index: number) => {
    const operator = event.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('Key', '=', 'Value');
    servicenow.filters = servicenow.filters || [newFilter];
    servicenow.filters[index].operator = operator;
    onChange({ ...query, servicenow });
  };
  onFilterValueChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    const newFilter = new ServiceNowQueryFilter('Key', '=', 'Value');
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
                <span className="btn btn-success btn-small" style={{ margin: '5px' }} onClick={this.onFilterAdd}>
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
                  value={FilterFields.find((gran: any) => gran.value === filter.field)}
                  options={FilterFields}
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
                  <span className="btn btn-success btn-small" style={{ margin: '5px' }} onClick={this.onFilterAdd}>
                    +
                  </span>
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

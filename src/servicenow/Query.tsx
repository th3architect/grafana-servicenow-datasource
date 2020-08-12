import React, { PureComponent, ChangeEvent } from 'react';
import { Select, SelectableValue } from './../grafana';
import { TABLE_NAMES } from './../config';
export { ServiceNowQueryFiltersCtrl } from './ServiceNowQueryFiltersCtrl';

const SUPPORTED_TABLES: SelectableValue[] = TABLE_NAMES as SelectableValue[];

const SUPPORTED_TYPES: SelectableValue[] = [
  { label: 'Table', value: 'table' },
  { label: 'Stats', value: 'stats' },
];

const ORDER_DIRECTIONS: SelectableValue[] = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' },
];

export class ServiceNowQueryTableAndTypeCtrl extends PureComponent<any, any> {
  onTableChange = (table: SelectableValue) => {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.table = table.value;
    onChange({ ...query, servicenow });
  };
  onTypeChange = (typeValue: SelectableValue) => {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.type = typeValue.value;
    onChange({ ...query, servicenow });
  };
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label query-keyword width-8">Table</label>
            <div className="gf-form-select-wrapper gf-form-select-wrapper--caret-indent">
              <Select
                className="width-12"
                value={SUPPORTED_TABLES.find((service: any) => service.value === query.servicenow.table)}
                options={SUPPORTED_TABLES}
                defaultValue={query.servicenow.table}
                onChange={this.onTableChange}
              />
            </div>
          </div>
          <div className="gf-form">
            <label className="gf-form-label query-keyword width-6">Type</label>
            <div className="gf-form-select-wrapper gf-form-select-wrapper--caret-indent">
              <Select
                className="width-12"
                value={SUPPORTED_TYPES.find((service: any) => service.value === query.servicenow.type)}
                options={SUPPORTED_TYPES}
                defaultValue={query.servicenow.type}
                onChange={this.onTypeChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class ServiceNowQueryFieldsCtrl extends PureComponent<any, any> {
  onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rgQuery = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.fields = rgQuery;
    onChange({ ...query, servicenow });
  };
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Fields ( Comma separated )">
              Fields
            </label>
            <input
              className="gf-form-input width-30"
              type="text"
              onChange={this.onFieldChange}
              value={query.servicenow.fields}
              placeholder="Fields ( Comma Separated)"
              title="Fields ( Comma Separated )"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export class ServiceNowQueryQueryCtrl extends PureComponent<any, any> {
  onQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const serviceNowQuery = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.query = serviceNowQuery;
    onChange({ ...query, servicenow });
  };
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Query">
              Query
            </label>
            <textarea value={query.servicenow.query || ''} onChange={this.onQueryChange} className="gf-form-input min-width-30 width-30" rows={3} />
          </div>
        </div>
      </div>
    );
  }
}

export class ServiceNowQueryGroupByCtrl extends PureComponent<any, any> {
  onGroupByChange = (event: ChangeEvent<HTMLInputElement>) => {
    const groupBy = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.groupBy = groupBy;
    onChange({ ...query, servicenow });
  };
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Group By Field">
              Group By
            </label>
            <input
              className="gf-form-input width-30"
              type="text"
              onChange={this.onGroupByChange}
              value={query.servicenow.groupBy}
              placeholder=""
              title="Group By"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export class ServiceNowQueryOrderByCtrl extends PureComponent<any, any> {
  onOrderByChange = (event: ChangeEvent<HTMLInputElement>) => {
    const orderBy = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.orderBy = orderBy;
    onChange({ ...query, servicenow });
  };
  onOrderDirectionChange = (event: SelectableValue) => {
    const orderByDirection = event.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.orderByDirection = orderByDirection;
    onChange({ ...query, servicenow });
  };
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
              className="gf-form-input width-10"
              type="text"
              onChange={this.onOrderByChange}
              value={query.servicenow.orderBy}
              placeholder=""
              title="Order By"
            ></input>
            <label className="gf-form-label width-8" title="Order Direction">
              Order Direction
            </label>
            <div className="gf-form-select-wrapper gf-form-select-wrapper--caret-indent">
              <Select
                className="width-12"
                value={ORDER_DIRECTIONS.find((service: any) => service.value === query.servicenow.orderByDirection)}
                options={ORDER_DIRECTIONS}
                defaultValue={query.servicenow.orderByDirection}
                onChange={this.onOrderDirectionChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class ServiceNowQueryLimitCtrl extends PureComponent<any, any> {
  onLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const limit = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.limit = limit;
    onChange({ ...query, servicenow });
  };
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Limit">
              Limit
            </label>
            <input
              className="gf-form-input width-10"
              type="text"
              onChange={this.onLimitChange}
              value={query.servicenow.limit}
              placeholder="Limit"
              title="Limit"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

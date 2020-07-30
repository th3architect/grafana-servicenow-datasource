import { defaults } from 'lodash';
import React, { PureComponent, ChangeEvent } from 'react';
import { Select, QueryEditorProps, DataQuery, SelectableValue } from './grafana';
import { Datasource } from './datasource';
import { TABLE_NAMES } from './config';

interface ServiceNowQueryStructure {
  table: string;
  type: string;
  fields: string;
  query: string;
  limit: number;
}

export interface ServiceNowQuery extends DataQuery {
  servicenow?: ServiceNowQueryStructure;
}

const SUPPORTED_TABLES = TABLE_NAMES as SelectableValue[];
const SUPPORTED_TYPES: SelectableValue[] = [{ label: 'Table', value: 'table' }];

const DEFAULT_SERVICENOW_QUERY: ServiceNowQueryStructure = {
  table: 'incident',
  type: 'table',
  fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority',
  query: 'ORDERBYDESCopened_at',
  limit: 10,
};

type Props = QueryEditorProps<Datasource, ServiceNowQuery>;

interface State {}

export class ServiceNowQueryEditor extends PureComponent<Props, State> {
  state: State = {};
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
  onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rgQuery = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.fields = rgQuery;
    onChange({ ...query, servicenow });
  };
  onQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const serviceNowQuery = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.query = serviceNowQuery;
    onChange({ ...query, servicenow });
  };
  onLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const limit = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.fields = limit;
    onChange({ ...query, servicenow });
  };
  render() {
    const query = defaults(this.props.query, {
      servicenow: defaults(this.props.query.servicenow, DEFAULT_SERVICENOW_QUERY),
    });
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
            <label className="gf-form-label query-keyword width-8">Type</label>
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
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Filter/Query">
              Filter / Query
            </label>
            <textarea value={query.servicenow.query || ''} onChange={this.onQueryChange} className="gf-form-input min-width-30 width-30" rows={10} />
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Limit">
              Limit
            </label>
            <input
              className="gf-form-input width-30"
              type="text"
              onChange={this.onFieldChange}
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

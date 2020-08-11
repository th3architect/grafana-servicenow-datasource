import React, { PureComponent, ChangeEvent } from 'react';
import { Select, SelectableValue } from './../grafana';
import { TABLE_NAMES } from './../config';

const SUPPORTED_TABLES = TABLE_NAMES as SelectableValue[];

const SUPPORTED_TYPES: SelectableValue[] = [
  { label: 'Table', value: 'table' },
  { label: 'Stats', value: 'stats' },
];

const RESULT_FORMATS: SelectableValue[] = [
  { label: 'Table', value: 'table' },
  { label: 'Time Series', value: 'time_series' },
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
            <label className="gf-form-label width-8" title="Filter/Query">
              Filter / Query
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

export class ServiceNowQueryLimitCtrl extends PureComponent<any, any> {
  onLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const limit = event.target.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.limit = limit;
    onChange({ ...query, servicenow });
  };
  onResultFormatChange = (event: SelectableValue) => {
    const resultFormat = event.value;
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow.resultFormat = resultFormat;
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
            <label className="gf-form-label width-8" title="Format As">
              Format As
            </label>
            <div className="gf-form-select-wrapper gf-form-select-wrapper--caret-indent">
              <Select
                className="width-12"
                value={RESULT_FORMATS.find((service: any) => service.value === query.servicenow.resultFormat)}
                options={RESULT_FORMATS}
                defaultValue={query.servicenow.resultFormat}
                onChange={this.onResultFormatChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
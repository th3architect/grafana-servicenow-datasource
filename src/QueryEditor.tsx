import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps, DataQuery } from './grafana';
import { Datasource } from './datasource';
import {
  ServiceNowQueryTableAndTypeCtrl,
  ServiceNowQueryFieldsCtrl,
  ServiceNowQueryQueryCtrl,
  ServiceNowQueryGroupByCtrl,
  ServiceNowQueryLimitCtrl,
} from './servicenow/Query';

interface ServiceNowQueryStructure {
  table: string;
  type: string;
  fields: string;
  query: string;
  group_by: string;
  result_format: string;
  limit: number;
}

export interface ServiceNowPluginQuery extends DataQuery {
  servicenow?: ServiceNowQueryStructure;
}

const DEFAULT_SERVICENOW_QUERY: ServiceNowQueryStructure = {
  table: 'incident',
  type: 'table',
  fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority',
  query: 'ORDERBYDESCopened_at',
  group_by: '',
  result_format: 'time_series',
  limit: 10,
};

type Props = QueryEditorProps<Datasource, ServiceNowPluginQuery>;

export class ServiceNowQueryEditor extends PureComponent<Props> {
  render() {
    let groupByCtrl: any;
    const query: ServiceNowPluginQuery = defaults(this.props.query, {
      servicenow: defaults(this.props.query.servicenow, DEFAULT_SERVICENOW_QUERY),
    });
    if (query && query.servicenow && query.servicenow.type === 'stats') {
      groupByCtrl = <ServiceNowQueryGroupByCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
    }
    return (
      <div>
        <ServiceNowQueryTableAndTypeCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        <ServiceNowQueryFieldsCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        <ServiceNowQueryQueryCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        {groupByCtrl}
        <ServiceNowQueryLimitCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
      </div>
    );
  }
}

import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps, DataQuery } from './../grafana';
import { Datasource } from './../datasource';
import {
  ServiceNowQueryTableAndTypeCtrl,
  ServiceNowQueryFieldsCtrl,
  ServiceNowQueryQueryCtrl,
  ServiceNowQueryGroupByCtrl,
  ServiceNowQueryOrderByCtrl,
  ServiceNowQueryFiltersCtrl,
} from './controls';
import {
  type_service_now_api,
  type_service_now_query_order_by_direction,
  ServiceNowQueryFilter,
  ServiceNowTableQuery,
  ServiceNowAggregationQuery,
} from './../servicenow/ServiceNowQuery';
import { filterStringArrays } from './../utils';

type type_service_now_table = `incident` | 'change_request' | 'problem';
type type_result_format = `table` | `timeseries`;
type Props = QueryEditorProps<Datasource, ServiceNowPluginQuery>;

export class ServiceNowQueryCtrlFields {
  table: type_service_now_table = 'incident';
  type: type_service_now_api = 'table';
  fields: string[];
  query: string;
  filters: ServiceNowQueryFilter[];
  orderBy: string;
  orderByDirection: type_service_now_query_order_by_direction = 'asc';
  groupBy: string[];
  resultFormat: type_result_format = 'table';
  limit: number;
  constructor(options: any) {
    this.table = options.table || 'incident';
    this.type = options.type || 'table';
    this.fields = options.fields || [];
    this.query = options.query || '';
    this.filters = options.filters || [];
    this.orderByDirection = options.orderByDirection || 'asc';
    this.orderBy = options.orderBy || '';
    this.groupBy = options.groupBy || [];
    this.limit = options.limit || 25;
    this.resultFormat = options.resultFormat || 'table';
  }
  getUrl(): string {
    if (this.type === 'table') {
      const fieldsValue =
        this.fields && this.fields[0] !== '*'
          ? this.fields || 'opened_at,number,short_description,sys_created_by,severity,category,state,priority'.split(',')
          : [];
      const fields: string[] = filterStringArrays(fieldsValue);
      const query = new ServiceNowTableQuery(this.table, fields, this.query, this.limit, this.filters, this.orderBy, this.orderByDirection);
      return query.getUrl();
    } else if (this.type === 'stats') {
      const groupByValue = this.groupBy ? this.groupBy : [];
      const groupBy: string[] = filterStringArrays(groupByValue);
      const query = new ServiceNowAggregationQuery(this.table, groupBy, this.query, 'true', this.filters);
      return query.getUrl();
    } else {
      return '';
    }
  }
}
export interface ServiceNowPluginQuery extends DataQuery {
  servicenow?: ServiceNowQueryCtrlFields;
}
export const DEFAULT_SERVICENOW_QUERY = new ServiceNowQueryCtrlFields({
  table: 'incident',
  type: 'stats',
  fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority'.split(','),
  query: '',
  groupBy: 'state'.split(','),
  orderBy: 'opened_at',
  orderByDirection: 'desc',
  limit: 10,
  resultFormat: 'table',
});
export class ServiceNowQueryEditor extends PureComponent<Props> {
  render() {
    let outCtrl: any;
    const query: ServiceNowPluginQuery = defaults(this.props.query, {
      servicenow: defaults(this.props.query.servicenow, DEFAULT_SERVICENOW_QUERY),
    });
    if (query && query.servicenow && query.servicenow.type) {
      switch (query.servicenow.type) {
        case 'table':
          outCtrl = <ServiceNowQueryFieldsCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
          break;
        case 'stats':
          outCtrl = <ServiceNowQueryGroupByCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
          break;
      }
    }
    return (
      <div>
        <ServiceNowQueryTableAndTypeCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        {outCtrl}
        <ServiceNowQueryQueryCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        <ServiceNowQueryFiltersCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        <ServiceNowQueryOrderByCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
      </div>
    );
  }
}

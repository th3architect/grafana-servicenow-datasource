import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps } from './grafana';
import { Datasource } from './datasource';
import {
  ServiceNowQueryTableAndTypeCtrl,
  ServiceNowQueryFieldsCtrl,
  ServiceNowQueryQueryCtrl,
  ServiceNowQueryFiltersCtrl,
  ServiceNowQueryGroupByCtrl,
  ServiceNowQueryOrderByCtrl,
  ServiceNowQueryLimitCtrl,
} from './servicenow/Query';
import { ServiceNowPluginQuery, DEFAULT_SERVICENOW_QUERY } from './ServiceNowQuery';

type Props = QueryEditorProps<Datasource, ServiceNowPluginQuery>;

export class ServiceNowQueryEditor extends PureComponent<Props> {
  render() {
    let fieldsCtrl: any;
    let groupByCtrl: any;
    const query: ServiceNowPluginQuery = defaults(this.props.query, {
      servicenow: defaults(this.props.query.servicenow, DEFAULT_SERVICENOW_QUERY),
    });
    if (query && query.servicenow && query.servicenow.type === 'table') {
      fieldsCtrl = <ServiceNowQueryFieldsCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
    }
    if (query && query.servicenow && query.servicenow.type === 'stats') {
      groupByCtrl = <ServiceNowQueryGroupByCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />;
    }
    return (
      <div>
        <ServiceNowQueryTableAndTypeCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        {fieldsCtrl}
        {groupByCtrl}
        <ServiceNowQueryQueryCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        <ServiceNowQueryFiltersCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        <ServiceNowQueryOrderByCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
        <ServiceNowQueryLimitCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
      </div>
    );
  }
}

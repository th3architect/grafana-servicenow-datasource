import { defaults } from 'lodash';
import React, { PureComponent } from 'react';
import { QueryEditorProps } from './grafana';
import { Datasource } from './datasource';
import { ServiceNowPluginQuery, DEFAULT_SERVICENOW_QUERY } from './ServiceNowQuery';
import { ServiceNowQueryTableAndTypeCtrl } from './servicenow/TableAndTypeCtrl';
import { ServiceNowQueryFieldsCtrl } from './servicenow/FieldsCtrl';
import { ServiceNowQueryQueryCtrl } from './servicenow/QueryCtrl';
import { ServiceNowQueryGroupByCtrl } from './servicenow/GroupByCtrl';
import { ServiceNowQueryOrderByCtrl } from './servicenow/OrderByCtrl';
import { ServiceNowQueryFiltersCtrl } from './servicenow/FiltersCtrl';
import { ServiceNowQueryLimitCtrl } from './servicenow/LimitCtrl';

type Props = QueryEditorProps<Datasource, ServiceNowPluginQuery>;

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
        <ServiceNowQueryLimitCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
      </div>
    );
  }
}

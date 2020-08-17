import React, { PureComponent } from 'react';
import { Select } from './../../grafana';
import { onSelectChange } from './../../utils';
import { QUERY_TYPES } from './../../config';
import { ServiceNowQueryTableSelectorCtrl } from './Help/TableSelector';

export class ServiceNowQueryTableAndTypeCtrl extends PureComponent<any, any> {
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8">Table</label>
            <ServiceNowQueryTableSelectorCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="gf-form">
            <label className="gf-form-label width-6">Type</label>
            <Select
              className="width-11"
              value={QUERY_TYPES.find((service: any) => service.value === query.servicenow.type)}
              options={QUERY_TYPES}
              defaultValue={query.servicenow.type}
              onChange={e => onSelectChange(e, 'type', this.props)}
            />
          </div>
        </div>
      </div>
    );
  }
}

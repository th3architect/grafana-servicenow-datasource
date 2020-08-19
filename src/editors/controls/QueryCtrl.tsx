import React, { PureComponent } from 'react';
import { ServiceNowQueryHelpCtrl } from './Help/QueryHelp';
import { ServiceNowQueryAdvancedQueryCtrl } from './Help/AdvancedQuery';

export class ServiceNowQueryQueryCtrl extends PureComponent<any, any> {
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <ServiceNowQueryAdvancedQueryCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} />
            <ServiceNowQueryHelpCtrl />
          </div>
        </div>
      </div>
    );
  }
}

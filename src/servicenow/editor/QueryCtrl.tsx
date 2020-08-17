import React, { PureComponent } from 'react';
import { onInputTextChange } from './../../utils';
import { ServiceNowQueryHelpCtrl } from './Help/QueryHelp';

export class ServiceNowQueryQueryCtrl extends PureComponent<any, any> {
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Query">
              Query
            </label>
            <textarea
              value={query.servicenow.query || ''}
              onChange={e => onInputTextChange(e, 'query', this.props)}
              className="gf-form-input min-width-28 width-28"
              rows={3}
            />
            <ServiceNowQueryHelpCtrl />
          </div>
        </div>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import { onInputTextChange } from './../../utils';

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
              className="gf-form-input min-width-30 width-30"
              rows={3}
            />
          </div>
        </div>
      </div>
    );
  }
}

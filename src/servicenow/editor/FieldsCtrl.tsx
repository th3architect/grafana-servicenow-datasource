import React, { PureComponent } from 'react';
import { onInputTextChange } from './../../utils';

export class ServiceNowQueryFieldsCtrl extends PureComponent<any, any> {
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
              onChange={e => onInputTextChange(e, 'fields', this.props)}
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

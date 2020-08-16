import React, { PureComponent } from 'react';
import { onInputTextChange } from './../../utils';

export class ServiceNowQueryGroupByCtrl extends PureComponent<any, any> {
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
              onChange={e => onInputTextChange(e, 'groupBy', this.props, true)}
              value={query.servicenow.groupBy.join(',')}
              placeholder=""
              title="Group By"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

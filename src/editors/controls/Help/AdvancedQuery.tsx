import React, { PureComponent } from 'react';
import { Modal, Select } from '../../../grafana';
import { onInputTextChange, onSelectChange } from './../../../utils';
import { SHOW_DISPLAY_OPTIONS } from './../../../config';

interface State {
  showAdvancedQueryModal: boolean;
}
export class ServiceNowQueryAdvancedQueryCtrl extends PureComponent<any, State> {
  state = {
    showAdvancedQueryModal: false,
  };
  showAdvancedQueryModal = (show: boolean) => () => {
    this.setState({ showAdvancedQueryModal: show });
  };
  render() {
    const query = this.props.query;
    const { showAdvancedQueryModal } = this.state;
    return (
      <>
        <label className="gf-form-label width-8" title="Query">
          Query
        </label>
        <label
          role="button"
          onClick={this.showAdvancedQueryModal(true)}
          title="Advanced Query"
          className="btn btn-secondary btn-small"
          style={{ marginTop: '4px', padding: '10px' }}
        >
          Advanced Query Options <i className="fa fa-expand fa-large btn btn-small"></i>
        </label>
        <Modal
          title={
            <div className="modal-header-title">
              <span className="p-l-1">Service Now Query</span>
            </div>
          }
          isOpen={showAdvancedQueryModal}
          onDismiss={this.showAdvancedQueryModal(false)}
        >
          <div className="gf-form-inline">
            <div className="gf-form">
              <label className="gf-form-label width-8" title="Show display value">
                Show Display Value
              </label>
            </div>
            <div className="gf-form">
              <Select
                className="width-28"
                value={SHOW_DISPLAY_OPTIONS.find((options: any) => options.value === query.servicenow.sysparmDisplayValue)}
                defaultValue={query.servicenow.sysparmDisplayValue}
                options={SHOW_DISPLAY_OPTIONS}
                onChange={e => onSelectChange(e, 'sysparmDisplayValue', this.props)}
              ></Select>
            </div>
          </div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <label className="gf-form-label width-8" title="Show display value">
                Custom Query
              </label>
            </div>
            <div className="gf-form">
              <textarea
                value={query.servicenow.query || ''}
                onChange={e => onInputTextChange(e, 'query', this.props)}
                className="gf-form-input min-width-28 width-28"
                rows={10}
              />
            </div>
          </div>
          <span className="btn btn-success btn-small" style={{ marginTop: '5px' }} onClick={() => this.setState({ showAdvancedQueryModal: false })}>
            OK
          </span>
        </Modal>
      </>
    );
  }
}

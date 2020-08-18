import React, { PureComponent } from 'react';
import { Modal } from '../../../grafana';
import { onInputTextChange } from './../../../utils';

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
        <input
          value={query.servicenow.query || ''}
          type="text"
          onChange={e => onInputTextChange(e, 'query', this.props)}
          className="gf-form-input min-width-24 width-24"
          title="Can be blank. This is for advance use cases. Only use when filters are not sufficient."
          placeholder="Can be blank. This is for advance use cases. Only use when filters are not sufficient."
        />
        &nbsp;
        <label
          role="button"
          onClick={this.showAdvancedQueryModal(true)}
          title="Advanced Query"
          className="btn btn-secondary btn-small"
          style={{ marginTop: '4px', padding: '10px' }}
        >
          <i className="fa fa-expand fa-large btn btn-small"></i>
        </label>
        <Modal
          title={
            <div className="modal-header-title">
              <span className="p-l-1">Service Now Advanced Query</span>
            </div>
          }
          isOpen={showAdvancedQueryModal}
          onDismiss={this.showAdvancedQueryModal(false)}
        >
          <textarea
            value={query.servicenow.query || ''}
            onChange={e => onInputTextChange(e, 'query', this.props)}
            className="gf-form-input min-width-28 width-28"
            rows={10}
          />
          <br />
          <span className="btn btn-success btn-small" style={{ marginTop: '5px' }} onClick={() => this.setState({ showAdvancedQueryModal: false })}>
            OK
          </span>
        </Modal>
      </>
    );
  }
}

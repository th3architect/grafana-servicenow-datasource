import React, { PureComponent } from 'react';
import { Modal } from '../../../grafana';

interface State {
  showHelpModal: boolean;
}
export class ServiceNowQueryHelpCtrl extends PureComponent<any, State> {
  state = {
    showHelpModal: false,
  };
  showHelpModal = (show: boolean) => () => {
    this.setState({ showHelpModal: show });
  };
  render() {
    const { showHelpModal } = this.state;
    return (
      <>
        &nbsp;&nbsp;
        <button onClick={this.showHelpModal(true)} title="Help" className="btn btn-secondary btn-small">
          query help
        </button>
        <Modal
          title={
            <div className="modal-header-title">
              <span className="p-l-1">Service Now Query Help</span>
            </div>
          }
          isOpen={showHelpModal}
          onDismiss={this.showHelpModal(false)}
        >
          <div>
            <div>
              <h4>Time Filter</h4>
              <br />
              <pre style={{ display: 'inline' }}>$__timeFrom()</pre> Returns the From datetime from the Grafana picker. Can be used with{' '}
              <b>Before / After</b> filter.
              <br />
              <br />
              <pre style={{ display: 'inline' }}>$__timeTo()</pre> Returns the To datetime from the Grafana picker. Can be used with{' '}
              <b>Before / After</b> filter.
              <br />
              <br />
              <pre style={{ display: 'inline' }}>$__timeFilter()</pre> Return start and end time form Grafana picker. Can be used with <b>Between</b>{' '}
              filter.
              <br />
              <br />
              <h4>Relative Time</h4>
              <br />
              <pre style={{ display: 'inline' }}>@hour@ago@24</pre> Returns the timestamp of 24 hours ago. Can be used with <b>Relative</b> filter.
              <br />
              <br />
              <pre style={{ display: 'inline' }}>@hour@ago@-24</pre> Returns the timestamp of 24 hours from now. Can be used with <b>Relative</b>{' '}
              filter.
              <br />
              <br />
              <p>
                More help can be found at{' '}
                <a
                  href="https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html"
                  target="_blank"
                  rel="noopener"
                >
                  service-now website.
                </a>
              </p>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

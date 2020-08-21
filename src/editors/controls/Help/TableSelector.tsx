import React, { PureComponent } from 'react';
import { orderBy, set } from 'lodash';
import { Modal } from '../../../grafana';
import { ServiceNowInstance } from './../../../servicenow/ServiceNowInstance';
import { ServiceNowDocQuery } from './../../../servicenow/ServiceNowQuery';
import { TABLE_NAMES } from '../../../config';
import { onInputTextChange } from '../../../utils';

interface Props {
  onChange: any;
  query: any;
  datasource: any;
}
interface State {
  showTableSelectorModal: boolean;
  tablesList: any[];
}
export class ServiceNowQueryTableSelectorCtrl extends PureComponent<Props, State> {
  state = {
    showTableSelectorModal: false,
    tablesList: [],
  };
  showHelpModal = (show: boolean) => () => {
    this.setState({ showTableSelectorModal: show });
  };
  chooseTable(tableName: string) {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    set(servicenow, 'table', tableName);
    onChange({ ...query, servicenow });
    this.setState({ showTableSelectorModal: false });
  }
  loadMoreTables() {
    const snInstance = new ServiceNowInstance(this.props.datasource.instanceSettings, null);
    const query = new ServiceNowDocQuery(`table/schema`);
    snInstance.getServiceNowResults(query).then(res => {
      if (res && res.data && res.data.result) {
        this.setState({ tablesList: res.data.result });
      }
    });
  }
  render() {
    const { showTableSelectorModal } = this.state;
    return (
      <>
        <input
          type="text"
          className="gf-form-input width-8"
          value={this.props.query.servicenow.table}
          placeholder="Table Name. If you don't know the table name, click 'change' option"
          title="Table Name. If you don't know the table name, click 'change' option"
          onChange={e => {
            onInputTextChange(e, 'table', this.props);
          }}
        />
        <label role="button" title="Click to choose from list" className="query-keyword gf-form-label width-4" onClick={this.showHelpModal(true)}>
          change
        </label>
        <Modal
          title={
            <div className="modal-header-title">
              <span className="p-l-1">Tables</span>
            </div>
          }
          isOpen={showTableSelectorModal}
          onDismiss={this.showHelpModal(false)}
        >
          <div>
            <h4>Popular Tables</h4>
            <table style={{ width: '100%' }}>
              {TABLE_NAMES.map((table: any, index: number) => {
                return (
                  <tr key={index}>
                    <td style={{ width: '40%' }}>{table.label}</td>
                    <td style={{ width: '40%' }}>{table.value}</td>
                    {table.value === this.props.query.servicenow.table ? (
                      <td>
                        <span className="btn btn-secondary btn-small" style={{ margin: '5px' }}>
                          &nbsp;&nbsp;selected&nbsp;&nbsp;
                        </span>
                      </td>
                    ) : (
                        <td>
                          <span className="btn btn-success btn-small" style={{ margin: '5px' }} onClick={() => this.chooseTable(table.value)}>
                            &nbsp;&nbsp;select&nbsp;&nbsp;
                          </span>
                        </td>
                      )}
                  </tr>
                );
              })}
            </table>
            <br />
            <br />
            {this.state.tablesList.length > 0 ? (
              <div>
                <h4>More Tables</h4>
                <table style={{ width: '100%' }}>
                  {orderBy(this.state.tablesList, ['label'], ['asc']).map((table: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td style={{ width: '40%' }}>{table.label}</td>
                        <td style={{ width: '40%' }}>{table.value}</td>
                        {table.value === this.props.query.servicenow.table ? (
                          <td>
                            <span className="btn btn-secondary btn-small" style={{ margin: '5px' }}>
                              &nbsp;&nbsp;selected&nbsp;&nbsp;
                            </span>
                          </td>
                        ) : (
                            <td>
                              <span className="btn btn-success btn-small" style={{ margin: '5px' }} onClick={() => this.chooseTable(table.value)}>
                                &nbsp;&nbsp;select&nbsp;&nbsp;
                            </span>
                            </td>
                          )}
                      </tr>
                    );
                  })}
                </table>
              </div>
            ) : (
                <div style={{ textAlign: 'center' }}>
                  <span className="btn btn-secondary btn-medium" style={{ margin: '5px' }} onClick={() => this.loadMoreTables()}>
                    Load more tables
                </span>
                </div>
              )}
          </div>
        </Modal>
      </>
    );
  }
}

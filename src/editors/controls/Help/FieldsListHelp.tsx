import React, { PureComponent } from 'react';
import { orderBy } from 'lodash';
import { Modal } from '../../../grafana';
import { ServiceNowInstance } from './../../../servicenow/ServiceNowInstance';
import { ServiceNowDocQuery } from './../../../servicenow/ServiceNowQuery';

interface Props {
  query: any;
  onChange: any;
  datasource: any;
  fieldName: string;
}
interface State {
  showFieldsListModal: boolean;
  selectedTable: string;
  fieldsList: any[];
}
export class ServiceNowFieldsListCtrl extends PureComponent<Props, State> {
  state = {
    showFieldsListModal: false,
    selectedTable: '',
    fieldsList: [],
  };
  showFieldsListModal = (show: boolean) => () => {
    if (show) {
      this.retrieveFieldsList();
    }
    this.setState({ showFieldsListModal: show });
  };
  retrieveFieldsList(override = false) {
    if (this.props.query.servicenow.table !== this.state.selectedTable || override) {
      this.setState({ selectedTable: this.props.query.servicenow.table });
      const snInstance = new ServiceNowInstance(this.props.datasource.instanceSettings, null);
      const query = new ServiceNowDocQuery(`table/schema/${this.props.query.servicenow.table}`);
      snInstance.getServiceNowResults(query).then(res => {
        if (res && res.data && res.data.result) {
          this.setState({ fieldsList: res.data.result });
        }
      });
    }
  }
  addField(fieldName: string) {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow[this.props.fieldName] = servicenow[this.props.fieldName] || [];
    servicenow[this.props.fieldName].push(fieldName);
    onChange({ ...query, servicenow });
  }
  removeField(fieldName: string) {
    const { query, onChange } = this.props;
    const servicenow: any = query.servicenow;
    servicenow[this.props.fieldName] = servicenow[this.props.fieldName] || [];
    servicenow[this.props.fieldName] = servicenow[this.props.fieldName].filter((field: string) => field !== fieldName);
    onChange({ ...query, servicenow });
  }
  componentWillMount() {
    this.setState({ selectedTable: this.props.query.servicenow.table });
    this.retrieveFieldsList(true);
  }
  render() {
    const { showFieldsListModal } = this.state;
    return (
      <>
        &nbsp;
        <label role="button" onClick={this.showFieldsListModal(true)} title="Fields List" className="query-keyword gf-form-label width-6">
          choose fields
        </label>
        <Modal
          title={
            <div className="modal-header-title">
              <span className="p-l-1">Fields List - Table : {this.state.selectedTable}</span>
            </div>
          }
          isOpen={showFieldsListModal}
          onDismiss={this.showFieldsListModal(false)}
        >
          <div>
            <table style={{ width: '100%' }}>
              <tr>
                <td>Label</td>
                <td>Value</td>
                <td>Type</td>
                <td>Selected</td>
              </tr>
              {orderBy(this.state.fieldsList, ['label'], ['asc']).map((field: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{field.label}</td>
                    <td>{field.name}</td>
                    <td>{field.internalType}</td>
                    <td>
                      {this.props.query.servicenow[this.props.fieldName].indexOf(field.name) > -1 ? (
                        <span className="btn btn-danger btn-small" style={{ margin: '5px' }} onClick={() => this.removeField(field.name)}>
                          remove
                        </span>
                      ) : (
                          <span className="btn btn-success btn-small" style={{ margin: '5px' }} onClick={() => this.addField(field.name)}>
                            &nbsp;&nbsp;add&nbsp;&nbsp;
                          </span>
                        )}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </Modal>
      </>
    );
  }
}

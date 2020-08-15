import React, { PureComponent, ChangeEvent } from 'react';
import { DataSourcePluginOptionsEditorProps, DataSourceJsonData } from './../grafana';

interface ServiceNowOptions extends DataSourceJsonData {
  url?: string;
  basicAuthUser?: string;
}
interface ServiceNowDatasourceSecureJsonData {
  basicAuthPassword?: string;
}
type Props = DataSourcePluginOptionsEditorProps<ServiceNowOptions>;
interface State {}

export class ServiceNowConfigEditor extends PureComponent<Props, State> {
  onURLChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({ ...options, url: event.target.value });
  };
  onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({ ...options, basicAuthUser: event.target.value });
  };
  onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonData: {
        basicAuthPassword: event.target.value,
      },
    });
  };
  onResetPassword = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        basicAuthPassword: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        basicAuthPassword: '',
      },
    });
  };
  render() {
    const { options } = this.props;
    options.basicAuth = true;
    const { secureJsonFields } = options;
    const secureJsonData = (options.secureJsonData || {}) as ServiceNowDatasourceSecureJsonData;
    return (
      <>
        <h3 className="page-heading">Service Now Settings</h3>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-11" title="Service Now URL">
              Service Now URL
            </label>
            <input
              className="gf-form-input width-20"
              type="text"
              onChange={this.onURLChange}
              value={options.url || ''}
              placeholder="https://YOUR_INSTANCE_NAME.service-now.com"
            ></input>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-11" title="User Name">
              User name
            </label>
            <input
              className="gf-form-input width-20"
              type="text"
              onChange={this.onUserNameChange}
              value={options.basicAuthUser || ''}
              placeholder="username"
            ></input>
          </div>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-11" title="Password">
              Password
            </label>
            {((secureJsonFields && secureJsonFields.basicAuthPassword) as boolean) ? (
              <>
                <label className="gf-form-label width-20">Configured</label>
                <span className="gf-form-button btn btn-secondary width-6" onClick={this.onResetPassword}>
                  Reset
                </span>
              </>
            ) : (
              <input
                type="password"
                value={secureJsonData.basicAuthPassword || ''}
                className="gf-form-input width-20"
                onChange={this.onPasswordChange}
              ></input>
            )}
          </div>
        </div>
      </>
    );
  }
}

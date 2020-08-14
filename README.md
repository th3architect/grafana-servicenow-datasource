# grafana-servicenow-datasource

[![License](https://img.shields.io/github/license/yesoreyeram/grafana-servicenow-datasource)](LICENSE)
[![Build](https://github.com/yesoreyeram/grafana-servicenow-datasource/workflows/Build%20&%20Publish/badge.svg)](https://github.com/yesoreyeram/grafana-servicenow-datasource/actions?query=workflow%3A%22Build+%26+Publish%22)
[![Maintainability](https://api.codeclimate.com/v1/badges/83c309f7c60efdfd2fd3/maintainability)](https://codeclimate.com/github/yesoreyeram/grafana-servicenow-datasource/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/yesoreyeram/grafana-servicenow-datasource/badge.svg)](https://snyk.io/test/github/yesoreyeram/grafana-servicenow-datasource)

Service Now data source for Grafana.

![image](https://user-images.githubusercontent.com/153843/90186224-c0177700-ddaf-11ea-9f47-425d17aa0eaf.png)

For more screenshots, follow [this github issue](https://github.com/yesoreyeram/grafana-servicenow-datasource/issues/1).

**Warning:** This is not official plugin from Grafana / Service Now. Use [official plugin from Grafana](https://grafana.com/grafana/plugins/grafana-servicenow-datasource) for additional capabilities like alerting, official support. This is a community contributed plugin and it may have only limited features comparing to official plugin.

## Time fields in query & filters

If you want to use grafana time picker's time field in your query/filter values, you can use the following macros to represent grafana time picker's fields. `$__timeFrom()` represents start time and `$__timeTo()` represents end time in grafana. This can be combined with query fields like **Greater Than** and **Less Than**. Use `$__timeFilter()` if you want use **Between** query field.

* `$__timeFrom()` Returns the From datetime from the Grafana picker. Example: `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')`

* `$__timeTo()` Returns the To datetime from the Grafana picker. Example: `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')`

* `$__timeFilter()` - Expands to `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')@javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')` where the from and to date times are from the Grafana time picker.

In query field this can be used like `start_date>$__timeFrom()^start_date<$__timeTo()`. Above example returns data where start_date is within grafana time range. Also `start_dateBETWEEN$__timeFilter()` can be used as shortcut.

## Installation

There are multiple ways to install this plugin into your grafana instance

#### Download and extract zip file

Download the zip file from [github](https://github.com/yesoreyeram/grafana-servicenow-datasource/archive/master.zip) and extract into your grafana plugin folder. Then restart Grafana.

#### Using grafana-cli

If you are using grafana-cli, execute the following command to install the plugin

```
grafana-cli --pluginUrl https://github.com/yesoreyeram/grafana-servicenow-datasource/archive/master.zip plugins install yesoreyeram-servicenow-datasource
```
#### Using helm chart

If you use help chart to provision grafana, use the following config to install the plugin

```
plugins:
  - https://github.com/yesoreyeram/grafana-servicenow-datasource/archive/master.zip;yesoreyeram-servicenow-datasource
```

## Configurations

Configuration of the plugin requires following field.

| Field      | Description |
|------------|-------------|
| URL        | URL for the service now instance. Typically, it will be `https://<YOUR_INSTNACE_NAME>.service-now.com`. |
| Username   | Service now username |
| Password   | Service now password |

#### Provisioning via file

If you want to use the grafana provisioning feature, use the following yaml

```
apiVersion: 1

datasources:
- name: <Datasource Name>
  type: yesoreyeram-servicenow-datasource
  access: proxy
  isDefault: false
  url: https://<YOUR_INSTNACE_NAME>.service-now.com
  basicAuth: true
  basicAuthUser: <Service Now User Name>
  withCredentials: false
  secureJsonData:
       basicAuthPassword: <Service Now Password>
  version: 1
  readOnly: false
```

## Service now permissions

In order to retrieve the data from service-now, the user account used should have appropriate roles in service now. Typically [**Business Stakeholder role**](https://docs.servicenow.com/bundle/orlando-it-business-management/page/product/project-portfolio-suite-with-financials/reference/business-stakeholder-role-ppm.html) can give enough permissions to read the data. If you want to reduce the permissions to more granular level, use one or more of the following roles.

* sn_incident_read
* sn_change_read
* sn_problem_read
* sn_request_read
* cmdb_read

## Service Now wiki useful links

[Operators available for filters and queries](https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html) 

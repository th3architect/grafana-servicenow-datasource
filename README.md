# Grafana Service-Now Datasource

[![License](https://img.shields.io/github/license/yesoreyeram/grafana-servicenow-datasource)](LICENSE)
[![Build](https://github.com/yesoreyeram/grafana-servicenow-datasource/workflows/Build%20&%20Publish/badge.svg)](https://github.com/yesoreyeram/grafana-servicenow-datasource/actions?query=workflow%3A%22Build+%26+Publish%22)
[![Grafana Plugin Validation](https://github.com/yesoreyeram/grafana-servicenow-datasource/workflows/Lint/badge.svg)](https://github.com/yesoreyeram/grafana-servicenow-datasource/actions?query=workflow%3ALint)
[![Maintainability](https://api.codeclimate.com/v1/badges/83c309f7c60efdfd2fd3/maintainability)](https://codeclimate.com/github/yesoreyeram/grafana-servicenow-datasource/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/yesoreyeram/grafana-servicenow-datasource/badge.svg)](https://snyk.io/test/github/yesoreyeram/grafana-servicenow-datasource)

Service Now data source for Grafana. 

![image](https://user-images.githubusercontent.com/153843/90498026-b5f2d100-e13f-11ea-9068-08f496d1df30.png)
![image](https://user-images.githubusercontent.com/153843/90538813-f7eb3980-e176-11ea-9a51-bf9ee1be2a78.png)

**Warning:** This is not official plugin from Grafana / Service Now. Use [official plugin from Grafana](https://grafana.com/grafana/plugins/grafana-servicenow-datasource) for additional capabilities like alerting, official support. This is a community contributed plugin and it may have only limited features comparing to official plugin.

## Query Guidelines

### Time fields in query & filters

If you want to use grafana time picker's time field in your query/filter values, you can use the following macros to represent grafana time picker's fields. `$__timeFrom()` represents start time and `$__timeTo()` represents end time in grafana. This can be combined with query fields like **Greater Than** and **Less Than**. Use `$__timeFilter()` if you want use **Between** query field.

* `$__timeFrom()` Returns the From datetime from the Grafana picker. Example: `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')`

* `$__timeTo()` Returns the To datetime from the Grafana picker. Example: `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')`

* `$__timeFilter()` - Expands to `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')@javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')` where the from and to date times are from the Grafana time picker.

In query field this can be used like `start_date>$__timeFrom()^start_date<$__timeTo()`. Above example returns data where start_date is within grafana time range. Also `start_dateBETWEEN$__timeFilter()` can be used as shortcut.

## Template variables

If you want to pull the list of items for any field in a table as a variable dropdown, use the following query to define the variable

| Format | Definition | Example |
|--------|------------|---------|
|`list(YOUR_TABLE_NAME,YOUR_FIELD_NAME)` | This will list all the **YOUR_FIELD_NAME** from the **YOUR_TABLE_NAME** table. | `list(incident,state)` will list all the state values from the incident table.|
| `list(YOUR_TABLE_NAME,YOUR_FIELD_NAME,YOUR_QUERY)` | This will list all the **YOUR_FIELD_NAME** from the **YOUR_TABLE_NAME** table after applying **YOUR_QUERY** filter. Query can contain any number of and/or conditions | `list(change_request,assignment_group,assignment_group.nameLIKEInfra)` will list all the assignment_groups from the change_request table where the assignment group name is like Infra. |

**Note:** Under the hood, the list query performs an aggregation over the table and returns the result. So consider the performance impact while querying fields with lots of unique values. 

## Annotation

You can annotate any servicenow table data as annotation in grafana with any of the time field in that table. For example, you can annotate **Priority 1** incidents as annotations over a graph as an event. Annotation fields and their usage.

| Field | Description |
|-------|-------------|
| Title | Field in service now displayed as annotation title. Typically it is **number** or **short_description**. Only single field allowed.   |
| Description| Field in service now displayed as annotation description.Typically it will be **short_description** of **description**. Only single field allowed. |
| Stat Time Field | **[Mandatory]** Field in service now which should be considered as annotation start time. |
| End Time Field | Field in service now which should be considered as annotation start time. If you specify this field, annotation will be shown as ranged annotation. |
| Tags | List of comma separated fields you want to show as tags in annotation |
| Query | Service now filter query string to filter the number of events.<br/><br/>Example: `short_descriptionLIKEoutage^priority<3` filter the records with all the two conditions. <br/>1: **short_description** contains the work outage.<br/>2: **priority** less than 3.<br/>Apart from the two conditions, query automatically include filter with your start time field over grafana time range.|
| Custom Description | Custom description on the annotation. You can specify content using plain text / HTML tags.<br/> If you want to provide field values in text specify `${__data.fields[FIELD_NAME]}` as token where `FIELD_NAME` is your service now field name (should be one of the tags/title fields specified).<br/><br/>Example : `<a href="https://XXXX.service-now.com/incident.do?sysparm_query=number={field.number}" target="_blank">More about ${__data.fields[number]}</a>` will be turned into hyperlink. |

## Installation

There are multiple ways to install this plugin into your grafana instance

### Download and extract zip file

Download the zip file from [github](https://github.com/yesoreyeram/grafana-servicenow-datasource/archive/master.zip) and extract into your grafana plugin folder. Then restart Grafana.

### Using grafana-cli

If you are using grafana-cli, execute the following command to install the plugin

```
grafana-cli --pluginUrl https://github.com/yesoreyeram/grafana-servicenow-datasource/archive/master.zip plugins install yesoreyeram-servicenow-datasource
```

### Using helm chart

If you use help chart to provision grafana, use the following config to install the plugin

```
plugins:
  - https://github.com/yesoreyeram/grafana-servicenow-datasource/archive/master.zip;yesoreyeram-servicenow-datasource
```

## Configuration

### Manual configuration

Configuration of the plugin requires following field.

| Field      | Description |
|------------|-------------|
| URL        | URL for the service now instance. Typically, it will be `https://<YOUR_INSTNACE_NAME>.service-now.com`. |
| Username   | Service now username |
| Password   | Service now password |

![image](https://user-images.githubusercontent.com/153843/90634456-9e8b1500-e21f-11ea-8e3c-b2fa366e2150.png)

### Provisioning via file

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

### Service now permissions & roles

In order to retrieve the data from service-now, the user account used should have appropriate roles in service now. Typically [**Business Stakeholder role**](https://docs.servicenow.com/bundle/orlando-it-business-management/page/product/project-portfolio-suite-with-financials/reference/business-stakeholder-role-ppm.html) can give enough permissions to read the data. If you want to reduce the permissions to more granular level, use one or more of the following roles.

* sn_incident_read
* sn_change_read
* sn_problem_read
* sn_request_read
* cmdb_read

### Useful links

[Operators available for filters and queries](https://docs.servicenow.com/bundle/paris-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html) 

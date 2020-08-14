# grafana-servicenow-datasource

[![License](https://img.shields.io/github/license/yesoreyeram/grafana-servicenow-datasource)](LICENSE)
[![Build](https://github.com/yesoreyeram/grafana-servicenow-datasource/workflows/Build%20&%20Publish/badge.svg)](https://github.com/yesoreyeram/grafana-servicenow-datasource/actions?query=workflow%3A%22Build+%26+Publish%22)
[![Maintainability](https://api.codeclimate.com/v1/badges/83c309f7c60efdfd2fd3/maintainability)](https://codeclimate.com/github/yesoreyeram/grafana-servicenow-datasource/maintainability)

Service Now data source for Grafana.

![image](https://user-images.githubusercontent.com/153843/90186224-c0177700-ddaf-11ea-9f47-425d17aa0eaf.png)

For more screenshots, follow [this github issue](https://github.com/yesoreyeram/grafana-servicenow-datasource/issues/1).

**Note:** This is not official plugin from Grafana / Service Now. Use [official plugin from Grafana](https://grafana.com/grafana/plugins/grafana-servicenow-datasource) for additional capabilities like alerting, official support. 

## Time fields in query & filters

If you want to use grafana time picker's time field in your query/filter values, you can use the following macros to represent grafana time picker's fields. `$__timeFrom()` represents start time and `$__timeTo()` represents end time in grafana. This can be combined with query fields like **Greater Than** and **Less Than**. Use `$__timeFilter()` if you want use **Between** query field.

* `$__timeFrom()` Returns the From datetime from the Grafana picker. Example: `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')`

* `$__timeTo()` Returns the To datetime from the Grafana picker. Example: `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')`

* `$__timeFilter()` - Expands to `javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')@javascript:gs.dateGenerate('YYYY-MM-DD','HH:mm:ss')` where the from and to date times are from the Grafana time picker.

In query field this can be used like `start_date>$__timeFrom()^start_date<$__timeTo()`. Above example returns data where start_date is within grafana time range. Also `start_dateBETWEEN$__timeFilter()` can be used as shortcut.

## Service Now Wiki useful links

[Operators available for filters and queries](https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html) 

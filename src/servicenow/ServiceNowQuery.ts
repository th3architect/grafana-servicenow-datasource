import { DataQuery } from './../grafana';

type type_service_now_query_order_by_direction = `asc` | `desc`;
type type_service_now_url_keys =
  | 'sysparm_display_value'
  | 'sysparm_limit'
  | 'sysparm_fields'
  | 'sysparm_query'
  | 'sysparm_count'
  | 'sysparm_group_by';
type type_sysparm_count = 'true' | 'false';
type type_sysparm_display_value = 'true' | 'false' | 'all';
type type_service_now_table = `incident` | 'change_request' | 'problem';
type type_service_now_api = `table` | 'stats';
export type type_service_now_query_filter_condition = `^` | `^OR`;

class ServiceNowQueryURLParam {
  key: type_service_now_url_keys;
  value: string;
  constructor(key: type_service_now_url_keys, value: any) {
    this.key = key;
    this.value = value.toString();
  }
  getValue() {
    return [this.key, this.value].join('=');
  }
}
export class ServiceNowQueryFilter {
  condition: type_service_now_query_filter_condition;
  field: string;
  operator: string;
  value: string;
  constructor(field: string, operator: string, value: string, condition: type_service_now_query_filter_condition = '^') {
    this.condition = condition;
    this.field = field;
    this.operator = operator;
    this.value = value;
  }
  toString() {
    return `${this.field}${this.operator}${this.value}`.trim();
  }
}
export class ServiceNowQuery {
  api: type_service_now_api;
  tableName = '';
  queryParams: ServiceNowQueryURLParam[] = [];
  constructor(
    api: type_service_now_api,
    sysparmQuery: string,
    filters: ServiceNowQueryFilter[],
    sysparmDisplayValue: type_sysparm_display_value,
    orderBy = '',
    orderByDirection: type_service_now_query_order_by_direction = 'desc'
  ) {
    this.api = api;
    const query = this.getNormalizedSysParmQuery(sysparmQuery);
    const sysparmQueries = [query].filter(Boolean);
    filters.forEach((filter, index) => {
      const prefix: string = sysparmQueries.length === 0 && index === 0 ? '' : filter.condition || '^';
      sysparmQueries.push(encodeURIComponent(`${prefix}${filter.field}${filter.operator}${filter.value}`.trim()));
    });
    if (orderBy) {
      sysparmQueries.push((orderByDirection === 'asc' ? '^ORDERBY' : '^ORDERBYDESC') + orderBy.trim());
    }
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_query', sysparmQueries.join('')));
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_display_value', sysparmDisplayValue));
  }
  private getNormalizedSysParmQuery(sysparmQuery: string) {
    return (sysparmQuery + '')
      .trim()
      .replace(/\^OR\n/g, '^OR')
      .replace(/\^\n/g, '^')
      .replace(/\n/g, '^');
  }
  getUrl(): string {
    switch (this.api) {
      case 'table':
        return `/api/now/table/${this.tableName}?${this.queryParams.map(v => v.getValue()).join('&')}`;
      case 'stats':
        return `/api/now/stats/${this.tableName}?${this.queryParams.map(v => v.getValue()).join('&')}`;
    }
  }
}
export class ServiceNowTableQuery extends ServiceNowQuery {
  constructor(
    tableName: string,
    sysparmFields: string[],
    sysparmQuery: string,
    sysparmLimit = 10,
    filters: ServiceNowQueryFilter[],
    orderBy: string,
    orderByDirection: type_service_now_query_order_by_direction
  ) {
    super('table', sysparmQuery, filters, 'all', orderBy, orderByDirection);
    this.tableName = tableName;
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_fields', sysparmFields.join(',')));
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_limit', sysparmLimit.toString()));
  }
}
export class ServiceNowAggregationQuery extends ServiceNowQuery {
  constructor(
    tableName: string,
    sysparmGroupBy: string[],
    sysparmQuery: string,
    sysparmCount: type_sysparm_count = 'true',
    filters: ServiceNowQueryFilter[],
    orderBy: string,
    orderByDirection: type_service_now_query_order_by_direction
  ) {
    super('stats', sysparmQuery, filters, 'all', orderBy, orderByDirection);
    this.tableName = tableName;
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_group_by', sysparmGroupBy.join(',')));
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_count', sysparmCount));
  }
}
export class ServiceNowQueryCtrlFields {
  table: type_service_now_table = 'incident';
  type: type_service_now_api = 'table';
  fields: string;
  query: string;
  filters: ServiceNowQueryFilter[];
  orderBy: string;
  orderByDirection: type_service_now_query_order_by_direction = 'asc';
  groupBy: string;
  limit: number;
  constructor(options: any) {
    this.table = options.table || 'incident';
    this.type = options.type || 'table';
    this.fields = options.fields || '';
    this.query = options.query || '';
    this.filters = options.filters || [];
    this.orderByDirection = options.orderByDirection || 'asc';
    this.orderBy = options.orderBy || '';
    this.groupBy = options.groupBy || '';
    this.limit = options.limit || 25;
  }
  getUrl(): string {
    if (this.type === 'table') {
      const fieldsValue =
        this.fields && this.fields !== '*' ? this.fields || 'opened_at,number,short_description,sys_created_by,severity,category,state,priority' : '';
      const fields: string[] = fieldsValue
        .trim()
        .split(',')
        .filter(Boolean)
        .map(a => a.trim());
      const query = new ServiceNowTableQuery(this.table, fields, this.query, this.limit, this.filters, this.orderBy, this.orderByDirection);
      return query.getUrl();
    } else if (this.type === 'stats') {
      const groupByValue = this.groupBy ? this.groupBy : '';
      const groupBy: string[] = groupByValue
        .trim()
        .split(',')
        .filter(Boolean)
        .map(a => a.trim());
      const query = new ServiceNowAggregationQuery(this.table, groupBy, this.query, 'true', this.filters, this.orderBy, this.orderByDirection);
      return query.getUrl();
    } else {
      return '';
    }
  }
}
export interface ServiceNowPluginQuery extends DataQuery {
  servicenow?: ServiceNowQueryCtrlFields;
}
export const DEFAULT_SERVICENOW_QUERY = new ServiceNowQueryCtrlFields({
  table: 'incident',
  type: 'table',
  fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority',
  query: '',
  groupBy: '',
  orderBy: 'opened_at',
  orderByDirection: 'desc',
  limit: 10,
});

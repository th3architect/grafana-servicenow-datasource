import { DataQuery, getBackendSrv } from './grafana';

type SERVICE_NOW_QUERY_TABLE_NAME = `incident` | 'change_request';
type SERVICE_NOW_QUERY_TYPE = `table` | 'stats';
type SERVICE_NOW_URL_PARAM = 'sysparm_display_value' | 'sysparm_limit' | 'sysparm_fields' | 'sysparm_query' | 'sysparm_count' | 'sysparm_group_by';
type SERVICE_NOW_QUERY_ORDER_BY_DIRECTION = `asc` | `desc`;
export type SERVICE_NOW_QUERY_FILTER_CONDITION = `^` | `^OR`;

class ServiceNowQueryURLParam {
  key: SERVICE_NOW_URL_PARAM;
  value: string;
  constructor(key: SERVICE_NOW_URL_PARAM, value: any) {
    this.key = key;
    this.value = value.toString();
  }
  getValue() {
    return [this.key, this.value].join('=');
  }
}

export class ServiceNowQueryFilter {
  condition: SERVICE_NOW_QUERY_FILTER_CONDITION;
  field: string;
  operator: string;
  value: string;
  constructor(field: string, operator: string, value: string, condition: SERVICE_NOW_QUERY_FILTER_CONDITION = '^') {
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
  table: SERVICE_NOW_QUERY_TABLE_NAME = 'incident';
  type: SERVICE_NOW_QUERY_TYPE = 'table';
  fields: string;
  query: string;
  filters: ServiceNowQueryFilter[];
  orderBy: string;
  orderByDirection: SERVICE_NOW_QUERY_ORDER_BY_DIRECTION = 'asc';
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
    const URL_PARAMS: ServiceNowQueryURLParam[] = [];
    URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_display_value`, 'all'));
    URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_limit`, this.limit || 10));
    if (this.fields && this.fields !== '*') {
      URL_PARAMS.push(
        new ServiceNowQueryURLParam(
          `sysparm_fields`,
          this.fields || 'opened_at,number,short_description,sys_created_by,severity,category,state,priority'
        )
      );
    }
    const query = (this.query + '')
      .trim()
      .replace(/\^OR\n/g, '^OR')
      .replace(/\^\n/g, '^')
      .replace(/\n/g, '^');
    const sysparmQueries = [query].filter(Boolean);
    this.filters.forEach((filter, index) => {
      const prefix: string = sysparmQueries.length === 0 && index === 0 ? '' : filter.condition || '^';
      sysparmQueries.push(encodeURIComponent(`${prefix}${filter.field}${filter.operator}${filter.value}`.trim()));
    });
    if (this.orderBy) {
      sysparmQueries.push((this.orderByDirection === 'asc' ? '^ORDERBY' : '^ORDERBYDESC') + this.orderBy.trim());
    }
    if (sysparmQueries.length > 0) {
      URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_query`, sysparmQueries.join('')));
    }
    if (this.type === 'stats') {
      URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_count`, 'true'));
    }
    if (this.type === 'stats' && this.groupBy) {
      URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_group_by`, this.groupBy.trim()));
    }
    return `/api/now/${this.type || 'table'}/${this.table}?${URL_PARAMS.map(v => v.getValue()).join('&')}`;
  }
}

export interface ServiceNowPluginQuery extends DataQuery {
  servicenow?: ServiceNowQuery;
}

export const DEFAULT_SERVICENOW_QUERY = new ServiceNowQuery({
  table: 'incident',
  type: 'table',
  fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority',
  query: '',
  groupBy: '',
  orderBy: 'opened_at',
  orderByDirection: 'desc',
  limit: 10,
});

export const doServiceNowRequest = (url: string, serviceNowQuery: ServiceNowQuery, maxRetries = 1): Promise<any> => {
  return getBackendSrv()
    .datasourceRequest({ method: 'GET', url: url })
    .catch((error: any) => {
      console.log(error);
      if (maxRetries > 0) {
        return doServiceNowRequest(url, serviceNowQuery, maxRetries - 1);
      }
      throw error;
    });
};

export type type_service_now_api = `table` | 'stats' | 'doc';
export type type_service_now_query_order_by_direction = `asc` | `desc`;
type type_service_now_url_keys =
  | 'sysparm_display_value'
  | 'sysparm_limit'
  | 'sysparm_fields'
  | 'sysparm_query'
  | 'sysparm_count'
  | 'sysparm_group_by';
type type_sysparm_count = 'true' | 'false';
export type type_sysparm_display_value = 'true' | 'false' | 'all';
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
    tableName: string,
    sysparmQuery: string,
    filters: ServiceNowQueryFilter[],
    sysparmDisplayValue: type_sysparm_display_value,
    orderBy = '',
    orderByDirection: type_service_now_query_order_by_direction = 'desc'
  ) {
    this.api = api;
    this.tableName = tableName;
    const sysparmQueries = [this.getNormalizedSysParmQuery(sysparmQuery) + '^'].filter(i => i !== '^');
    filters.forEach((filter, index) => {
      const suffix: string = index === filters.length - 1 ? '' : filter.condition || '^';
      sysparmQueries.push(encodeURIComponent(`${filter.field}${filter.operator}${filter.value}${suffix}`.trim()));
    });
    if (orderBy) {
      sysparmQueries.push((orderByDirection === 'asc' ? '^ORDERBY' : '^ORDERBYDESC') + orderBy.trim());
    }
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_query', sysparmQueries.join('').replace(/\^\^/g, '^')));
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
      case 'doc':
        return `/api/now/doc/${this.tableName}`;
      case 'table':
        return `/api/now/table/${this.tableName}?${this.queryParams.map(v => v.getValue()).join('&')}`;
      case 'stats':
        return `/api/now/stats/${this.tableName}?${this.queryParams.map(v => v.getValue()).join('&')}`;
    }
  }
}
export class ServiceNowDocQuery extends ServiceNowQuery {
  constructor(tableName: string) {
    super('doc', tableName, '', [], 'all', '', 'asc');
  }
}
export class ServiceNowTableQuery extends ServiceNowQuery {
  constructor(
    tableName: string,
    sysparmFields: string[],
    sysparmQuery: string,
    sysparmLimit = 10,
    filters: ServiceNowQueryFilter[],
    sysparmDisplayValue: type_sysparm_display_value,
    orderBy: string,
    orderByDirection: type_service_now_query_order_by_direction
  ) {
    super('table', tableName, sysparmQuery, filters, sysparmDisplayValue || 'all', orderBy, orderByDirection);
    if (sysparmFields.length > 0 && sysparmFields[0] && sysparmFields[0] !== '*') {
      this.queryParams.push(new ServiceNowQueryURLParam('sysparm_fields', sysparmFields.join(',')));
    }
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
    sysparmDisplayValue: type_sysparm_display_value
  ) {
    super('stats', tableName, sysparmQuery, filters, sysparmDisplayValue || 'all', '', 'asc');
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_group_by', sysparmGroupBy.join(',')));
    this.queryParams.push(new ServiceNowQueryURLParam('sysparm_count', sysparmCount));
  }
}

export type type_service_now_query = ServiceNowDocQuery | ServiceNowTableQuery | ServiceNowAggregationQuery;

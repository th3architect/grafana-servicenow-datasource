import { FieldType } from './grafana';
export const TABLE_NAME_INCIDENT = 'incident';
export const TABLE_NAME_CHANGE_REQUEST = 'change_request';
export const TABLE_NAME_PROBLEM = 'problem';
export const TABLE_NAMES = [
  { label: 'Incidents (INC)', value: TABLE_NAME_INCIDENT, short_code: 'INC' },
  { label: 'Change Request (CHG)', value: TABLE_NAME_CHANGE_REQUEST, short_code: 'CHG' },
  { label: 'Problem (PRB)', value: TABLE_NAME_PROBLEM, short_code: 'PRB' },
];
export const QUERY_TYPES: any[] = [
  { label: 'Table', value: 'table' },
  { label: 'Stats', value: 'stats' },
];
export const RESULT_FORMATS: any[] = [
  { label: 'Table', value: 'table' },
  { label: 'Time Series', value: 'timeseries' },
];
export const FIELDS_LIST: any[] = [
  { value: 'active', label: 'Active', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  { value: 'assigned_to', label: 'Assigned To', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  { value: 'assignment_group.name', label: 'Assignment Group', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  { value: 'assignment_group', label: 'Assignment Group ID', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  {
    value: 'description',
    label: 'Description',
    tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM],
  },
  { value: 'end_date', label: 'End Date', tables: [TABLE_NAME_CHANGE_REQUEST], FieldType: FieldType.time },
  { value: 'incident_state', label: 'Incident State', tables: [TABLE_NAME_INCIDENT] },
  { value: 'number', label: 'Number', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  { value: 'opened_at', label: 'Opened At', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM], FieldType: FieldType.time },
  { value: 'priority', label: 'Priority', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  { value: 'short_description', label: 'Short Description', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  { value: 'start_date', label: 'Start Date', tables: [TABLE_NAME_CHANGE_REQUEST], FieldType: FieldType.time },
  { value: 'state', label: 'State', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  { value: 'sys_created_by', label: 'Created By', tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM] },
  {
    value: 'sys_created_on',
    label: 'Created On',
    tables: [TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAME_PROBLEM],
    FieldType: FieldType.time,
  },
  { value: 'urgency', label: 'Urgency', tables: [TABLE_NAME_PROBLEM] },
  { value: 'category', label: 'Category', tables: [TABLE_NAME_PROBLEM] },
  { value: 'subcategory', label: 'Subcategory', tables: [TABLE_NAME_PROBLEM] },
];
export const FIELDS_LIST_TIME = FIELDS_LIST.filter(f => f.FieldType === FieldType.time);
export const FILTER_CONDITIONS: any[] = [
  { value: '^', label: 'AND' },
  { value: '^OR', label: 'OR' },
];
export const FILTER_OPERATIONS: any[] = [
  { value: '=', label: 'Equals' },
  { value: '!=', label: 'Not Equals' },
  { value: '<', label: 'Less than' },
  { value: '<=', label: 'Less than or Equals' },
  { value: '>', label: 'Greater than' },
  { value: '>=', label: 'Greater than or Equals' },
  { value: 'STARTSWITH', label: 'Starts With' },
  { value: 'ENDSWITH', label: 'Ends With' },
  { value: 'LIKE', label: 'Like' },
  { value: 'NOT LIKE', label: 'Not Like' },
  { value: 'ISEMPTY', label: 'Is Empty' },
  { value: 'ISNOTEMPTY', label: 'Is Not Empty' },
  { value: 'IN', label: 'In' },
  { value: 'NOT IN', label: 'Not In' },
  { value: 'ANYTHING', label: 'Anything' },
  { value: 'BETWEEN', label: 'Between' },
  { value: 'SAMEAS', label: 'Is Same' },
  { value: 'NSAMEAS', label: 'Is Different' },
  { value: 'ONToday', label: 'On Today' },
  { value: 'NOTONToday', label: 'Not On Today' },
  { value: 'DATEPART', label: 'Date Part' },
  { value: 'RELATIVEGE', label: 'Relative (on or after)' },
  { value: 'RELATIVELE', label: 'Relative (on or before)' },
  { value: 'RELATIVEGT', label: 'Relative (after)' },
  { value: 'RELATIVELT', label: 'Relative (before)' },
  { value: 'RELATIVEEE', label: 'Relative (on)' },
  { value: 'MORETHAN', label: 'Is More than' },
  { value: 'LESSTHAN', label: 'Is Less than' },
  { value: 'GT_FIELD', label: 'Greater than field' },
  { value: 'LT_FIELD', label: 'Less than field' },
  { value: 'GT_OR_EQUALS_FIELD', label: 'Greater than or is field' },
  { value: 'LT_OR_EQUALS_FIELD', label: 'Less than or is field' },
];
export const FILTER_VALUES: any = {
  active: [
    { label: 'True', value: 'true' },
    { label: 'False', value: 'false' },
  ],
  grafanaTimestamps: [
    { label: 'Grafana Start Time', value: '$__timeFrom()' },
    { label: 'Grafana End Time', value: '$__timeTo()' },
    { label: 'Grafana Time Range', value: '$__timeFilter()' },
  ],
};

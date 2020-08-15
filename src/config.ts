export const TEMPLATE_URL = {
  QUERY_EDITOR: 'query_editor/query.editor.html',
  ANNOTATION: 'annotations/annotations.editor.html',
};
export const TABLE_NAME_INCIDENT = 'incident';
export const TABLE_NAME_CHANGE_REQUEST = 'change_request';
export const TABLE_NAME_PROBLEM = 'problem';
export const TABLE_NAME_SYSTEM_USER_GROUP = 'sys_user_group';
export const TABLE_NAMES = [
  { label: 'Incidents (INC)', value: TABLE_NAME_INCIDENT, short_code: 'INC' },
  { label: 'Change Request (CHG)', value: TABLE_NAME_CHANGE_REQUEST, short_code: 'CHG' },
  { label: 'Problem (PRB)', value: TABLE_NAME_PROBLEM, short_code: 'PRB' },
  { label: 'System User Group', value: TABLE_NAME_SYSTEM_USER_GROUP, short_code: '' },
];

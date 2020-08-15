import { SelectableValue } from './../grafana';
import {
  TABLE_NAME_CHANGE_REQUEST as CHANGE_REQUEST,
  TABLE_NAME_INCIDENT as INCIDENT,
  TABLE_NAME_PROBLEM as PROBLEM,
  TABLE_NAME_SYSTEM_USER_GROUP as SYS_USER_GROUP,
} from './../config';

export const FieldsList: SelectableValue[] = [
  { value: 'active', label: 'Active', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'assigned_to', label: 'Assigned To', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'assignment_group.name', label: 'Assignment Group', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'assignment_group', label: 'Assignment Group ID', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'description', label: 'Description', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM, SYS_USER_GROUP] },
  { value: 'end_date', label: 'End Date', tables: [CHANGE_REQUEST] },
  { value: 'incident_state', label: 'Incident State', tables: [INCIDENT] },
  { value: 'number', label: 'Number', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'opened_at', label: 'Opened At', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'priority', label: 'Priority', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'short_description', label: 'Short Description', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'start_date', label: 'Start Date', tables: [CHANGE_REQUEST] },
  { value: 'state', label: 'State', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'sys_created_by', label: 'Created By', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'sys_created_on', label: 'Created On', tables: [INCIDENT, CHANGE_REQUEST, PROBLEM] },
  { value: 'urgency', label: 'Urgency', tables: [PROBLEM] },
  { value: 'category', label: 'Category', tables: [PROBLEM] },
  { value: 'subcategory', label: 'Subcategory', tables: [PROBLEM] },
  { value: 'name', label: 'Name', tables: [SYS_USER_GROUP] },
  { value: 'manager', label: 'Manager', tables: [SYS_USER_GROUP] },
  { value: 'email', label: 'Email', tables: [SYS_USER_GROUP] },
];

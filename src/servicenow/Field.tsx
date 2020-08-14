import { SelectableValue } from './../grafana';

const CHANGE_REQUEST = `change_request`;
const INCIDENT = `incident`;

export const FieldsList: SelectableValue[] = [
  { value: 'active', label: 'Active', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'assigned_to', label: 'Assigned To', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'assignment_group.name', label: 'Assignment Group', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'assignment_group', label: 'Assignment Group ID', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'description', label: 'Description', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'end_date', label: 'End Date', tables: [CHANGE_REQUEST] },
  { value: 'incident_state', label: 'Incident State', tables: [INCIDENT] },
  { value: 'number', label: 'Number', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'opened_at', label: 'Opened At', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'priority', label: 'Priority', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'short_description', label: 'Short Description', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'start_date', label: 'Start Date', tables: [CHANGE_REQUEST] },
  { value: 'state', label: 'State', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'sys_created_by', label: 'Created By', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'sys_created_on', label: 'Created On', tables: [INCIDENT, CHANGE_REQUEST] },
  { value: 'type', label: 'Type', tables: [INCIDENT, CHANGE_REQUEST] },
];

import { SelectableValue } from './../grafana';

export const FieldsList: SelectableValue[] = [
  { value: 'number', label: 'Number', tables: ['incident', 'change_request'] },
  { value: 'short_description', label: 'Short Description', tables: ['incident', 'change_request'] },
  { value: 'incident_state', label: 'Incident State', tables: ['incident'] },
  { value: 'state', label: 'State', tables: ['incident', 'change_request'] },
  { value: 'assigned_to', label: 'Assigned To', tables: ['incident'] },
  { value: 'assignment_group.name', label: 'Assignment Group', tables: ['incident', 'change_request'] },
  { value: 'assignment_group', label: 'Assignment Group ID', tables: ['incident', 'change_request'] },
  { value: 'sys_created_by', label: 'Created By', tables: ['incident'] },
  { value: 'sys_opened_by', label: 'Opened By', tables: ['incident'] },
  { value: 'business_service', label: 'Business Service', tables: ['incident'] },
  { value: 'cmdb_ci', label: 'CMDB CI', tables: ['incident'] },
  { value: 'active', label: 'Active', tables: ['incident'] },
  { value: 'priority', label: 'Priority', tables: ['incident'] },
  { value: 'phase_state', label: 'Phase State', tables: ['change_request'] },
  { value: 'type', label: 'Type', tables: ['change_request'] },
  { value: 'start_date', label: 'Start Date', tables: ['change_request'] },
  { value: 'end_date', label: 'End Date', tables: ['change_request'] },
];

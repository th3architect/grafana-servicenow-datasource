export { Select, Modal } from '@grafana/ui';
export {
  DataSourcePlugin,
  DataSourceApi,
  QueryEditorProps,
  DataQuery,
  SelectableValue,
  DataSourcePluginOptionsEditorProps,
  DataSourceJsonData,
  FieldType,
} from '@grafana/data';
export { getBackendSrv } from '@grafana/runtime';

export const replaceTimeTokens = (field: string, from: any, to: any): string => {
  const fromDateString = `javascript:gs.dateGenerate('${from.format('YYYY-MM-DD')}','${from.format('HH:mm:ss')}')`;
  const toDateString = `javascript:gs.dateGenerate('${to.format('YYYY-MM-DD')}','${to.format('HH:mm:ss')}')`;
  field = field.replace('$__timeFrom()', fromDateString);
  field = field.replace('$__timeTo()', toDateString);
  field = field.replace('$__timeFilter()', `${fromDateString}@${toDateString}`);
  return field;
};

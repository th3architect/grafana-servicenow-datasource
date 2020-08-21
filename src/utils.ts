import { ChangeEvent } from 'react';
import { set, toInteger } from 'lodash';
import { SelectableValue } from './grafana';

export const filterStringArrays = (input: string[]): string[] => {
  return input.filter(Boolean).map(a => a.trim());
};

export const getSeriesNameFromRow = (row: any[], joinBy = ' - ') => {
  return (
    row
      .map((ri: string, index: number) => (index === row.length - 1 ? '' : ri))
      .filter(a => a || a.toString() === '0')
      .join(joinBy) || ''
  );
};

export const onSelectChange = (selectableItem: SelectableValue, field: string, props: any, format = 'string') => {
  const { query, onChange } = props;
  const servicenow: any = query.servicenow;
  set(servicenow, field, format === 'number' ? toInteger(selectableItem.value) : selectableItem.value);
  onChange({ ...query, servicenow });
};

export const onInputTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, props: any, splitIntoArray = false) => {
  const { query, onChange } = props;
  const servicenow: any = query.servicenow;
  const value = splitIntoArray ? event.target.value.split(',') : event.target.value;
  set(servicenow, field, value);
  onChange({ ...query, servicenow });
};

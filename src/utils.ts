import { ChangeEvent } from 'react';
import { set } from 'lodash';
import { SelectableValue } from './grafana';

export const onSelectChange = (selectableItem: SelectableValue, field: string, props: any) => {
  const { query, onChange } = props;
  const servicenow: any = query.servicenow;
  set(servicenow, field, selectableItem.value);
  onChange({ ...query, servicenow });
};

export const onInputTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, props: any, splitIntoArray = false) => {
  const { query, onChange } = props;
  const servicenow: any = query.servicenow;
  const value = splitIntoArray ? event.target.value.split(',') : event.target.value;
  set(servicenow, field, value);
  onChange({ ...query, servicenow });
};

import { forEach, toInteger } from 'lodash';
import { Annotation, ServiceNowAnnotationQuery } from './annotations/annotation';
import { ServiceNowQuery } from './ServiceNowQuery';

const getServiceNowRowAsAnnotation = (row: any, cols: any, query: ServiceNowAnnotationQuery): Annotation => {
  const annotation: Annotation = {
    text: '',
    title: '',
    tags: [],
    time: new Date().getTime(),
  };
  let amendText = '';
  forEach(cols, (value, index) => {
    if (value.text === query.startTimeField) {
      if (row[index]) {
        annotation.time = new Date(row[index]).getTime();
        amendText += `${value.text} : ${row[index]}\n`;
      }
    } else if (value.text === query.endTimeField) {
      if (row[index]) {
        annotation.timeEnd = new Date(row[index]).getTime();
        amendText += `${value.text} : ${row[index]}\n`;
      }
    } else if (value.text === query.titleField) {
      if (row[index]) {
        annotation.title = row[index];
      }
    } else if (value.text === query.descriptionField) {
      if (row[index]) {
        annotation.text = row[index];
      }
    } else {
      if (row[index]) {
        annotation.tags.push(`${value.text} : ${row[index]}`);
      }
    }
  });
  annotation.text += `
    ${amendText}
  `;
  return annotation;
};

export class ServiceNowResultsParser {
  resultFormat = 'table';
  query: ServiceNowAnnotationQuery | ServiceNowQuery | any;
  output: any = {
    columns: [],
    rows: [],
    type: 'table',
  };
  constructor(results: any[]) {
    results
      .filter(res => res && res.result && res.result.data && res.result.data.result)
      .forEach((res: any) => {
        this.query = res.query;
        if (res && res.query && res.query.servicenow && res.query.servicenow.type === 'stats') {
          this.resultFormat = res.query.servicenow.result_format;
          res.result.data.result.forEach((item: any, index: number) => {
            if (index === 0) {
              this.output.columns.push({
                text: 'stat',
                type: 'string',
              });
              this.output.columns.push({
                text: 'value',
                type: 'number',
              });
            }
            if (item && item.stats && item.stats.count) {
              const displayValue = item.groupby_fields[0].display_value || item.groupby_fields[0].value;
              const value = toInteger(item.stats.count);
              this.output.rows.push([displayValue, value]);
            }
          });
        } else {
          res.result.data.result.forEach((item: any, index: number) => {
            if (index === 0) {
              forEach(item, (value, key) => {
                if (typeof value === 'object' && value && (value.display_value || value.value === '')) {
                  this.output.columns.push({
                    text: key,
                    type: 'string',
                  });
                } else {
                  this.output.columns.push({
                    text: key,
                    type: typeof value === 'object' ? 'string' : typeof value,
                  });
                }
              });
            }
            const row: any = [];
            forEach(item, value => {
              if (typeof value === 'object' && value && (value.display_value || value.value === '')) {
                row.push(value.display_value || value.value);
              } else if (typeof value === 'object') {
                row.push(JSON.stringify(value));
              } else {
                row.push(value);
              }
            });
            this.output.rows.push(row);
          });
        }
      });
  }
  getResultsAsAnnotations(): Annotation[] {
    const annotations: Annotation[] = [];
    forEach(this.output.rows, row => {
      const annotation: Annotation = getServiceNowRowAsAnnotation(row, this.output.columns, this.query);
      annotations.push(annotation);
    });
    return annotations;
  }
  getResultsAsTimeSeries(timestamp: number): any[] {
    const out: any[] = [];
    this.output.rows.forEach((row: any[]) => {
      out.push({
        target: row[0] || '-',
        datapoints: [[row[1], timestamp]],
      });
    });
    return out;
  }
}

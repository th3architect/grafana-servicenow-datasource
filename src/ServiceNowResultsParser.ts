import { forEach, toInteger, uniq } from 'lodash';
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
          if (res.result.data.result.stats) {
            this.parseResultsAsSingleStat(res);
          } else {
            this.parseResultsAsMultiStat(res);
          }
        } else {
          this.parseResultsAsTable(res);
        }
      });
  }
  private parseResultsAsSingleStat(res: any) {
    this.output.columns.push({
      text: 'count',
      type: 'number',
    });
    this.output.rows.push([toInteger(res.result.data.result.stats.count)]);
  }
  private parseResultsAsMultiStat(res: any) {
    res.result.data.result.forEach((item: any, index: number) => {
      if (index === 0) {
        if (res && res.query && res.query.servicenow && res.query.servicenow.groupBy) {
          res.query.servicenow.groupBy.split(',').forEach((groupItem: string) => {
            this.output.columns.push({
              text: groupItem,
              type: 'string',
            });
          });
          this.output.columns.push({
            text: 'count',
            type: 'number',
          });
        }
      }
      if (item && item.stats) {
        const value = toInteger(item.stats.count);
        const outArray: any[] = [];
        res.query.servicenow.groupBy.split(',').forEach((groupItem: string) => {
          const field = item.groupby_fields.find((g: any) => g.field === groupItem);
          if (field) {
            outArray.push(field.display_value || field.value || '-');
          }
        });
        outArray.push(value);
        this.output.rows.push(outArray);
      }
    });
  }
  private parseResultsAsTable(res: any) {
    this.output.columns = [];
    let fields = '';
    fields = res && res.query && res.query.servicenow && res.query.servicenow.fields ? res.query.servicenow.fields : fields;
    fields = res && res.query && res.query && res.query.fields ? res.query.fields : fields;
    const cols: string[] = uniq(
      fields
        .split(',')
        .map((item: string) => item.trim())
        .filter(Boolean)
    );
    if (fields && fields[0] !== '*') {
      res.result.data.result.forEach((item: any, index: number) => {
        if (index === 0) {
          forEach(cols, col => {
            this.output.columns.push({
              text: col,
              type: 'string',
            });
          });
        }
        const row: any = [];
        this.output.columns.forEach((col: any) => {
          const matchingItem = item[col.text];
          if (typeof matchingItem === 'object' && matchingItem && (matchingItem.display_value || matchingItem.value === '')) {
            row.push(matchingItem.display_value || matchingItem.value);
          } else if (typeof matchingItem === 'object') {
            row.push(JSON.stringify(matchingItem));
          } else {
            row.push(matchingItem);
          }
        });
        this.output.rows.push(row);
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
  }
  getResultsAsAnnotations(): Annotation[] {
    const annotations: Annotation[] = [];
    forEach(this.output.rows, row => {
      const annotation: Annotation = getServiceNowRowAsAnnotation(row, this.output.columns, this.query);
      annotations.push(annotation);
    });
    return annotations;
  }
}

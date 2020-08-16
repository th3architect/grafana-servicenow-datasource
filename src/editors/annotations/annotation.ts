export class ServiceNowAnnotationQuery {
  table = 'incident';
  fields: string[] = [];
  query = '';
  titleField = '';
  descriptionField = '';
  startTimeField = '';
  endTimeField = '';
  limit = 25;
}
export class Annotation {
  title = '';
  text = '';
  tags: string[] = [];
  time?: number = new Date().getTime();
  timeEnd?: number;
}

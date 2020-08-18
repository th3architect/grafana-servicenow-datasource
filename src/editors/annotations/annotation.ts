export class ServiceNowAnnotationQuery {
  table = 'incident';
  fields: string[] = [];
  query = '';
  titleField = '';
  descriptionField = '';
  startTimeField = '';
  endTimeField = '';
  customDescription = '';
  limit = 25;
}
export class Annotation {
  title = '';
  text = '';
  tags: string[] = [];
  time?: number = new Date().getTime();
  timeEnd?: number;
}

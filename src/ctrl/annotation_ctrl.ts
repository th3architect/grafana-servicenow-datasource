import { TEMPLATE_URL, TABLE_NAMES } from './../config';

export class AnnotationCtrl {

  static templateUrl = TEMPLATE_URL.ANNOTATION;
  annotation: any;
  supportedTables = TABLE_NAMES;

}

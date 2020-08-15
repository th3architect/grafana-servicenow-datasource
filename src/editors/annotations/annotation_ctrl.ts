import { TABLE_NAMES } from '../../config';

export class AnnotationCtrl {
  static templateUrl = 'editors/annotations/annotations.editor.html';
  annotation: any;
  supportedTables = TABLE_NAMES.map(t => {
    return { text: t.label, value: t.value };
  });
}

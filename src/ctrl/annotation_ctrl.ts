export class AnnotationCtrl {
  static templateUrl = 'partials/annotations.editor.html';
  annotation: any;
  supportedTables = [
    { text: 'Incidents (INC)', value: 'incident' },
    { text: 'Change Request (CHG)', value: 'change_request' },
  ];
}

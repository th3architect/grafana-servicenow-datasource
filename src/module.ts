import { DataSourcePlugin } from './grafana';

import { Datasource } from './datasource';
import { ServiceNowConfigEditor } from './editors/ConfigEditor';
import { ServiceNowQueryEditor } from './editors/QueryEditor';
import { AnnotationCtrl } from './editors/annotations/annotation_ctrl';

export const plugin = new DataSourcePlugin(Datasource)
  .setConfigEditor(ServiceNowConfigEditor)
  .setQueryEditor(ServiceNowQueryEditor)
  .setAnnotationQueryCtrl(AnnotationCtrl);

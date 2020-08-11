import { DataSourcePlugin } from './grafana';

import { Datasource } from './datasource';
import { ServiceNowConfigEditor } from './ConfigEditor';
import { ServiceNowQueryEditor } from './QueryEditor';
import { AnnotationCtrl } from './annotations/annotation_ctrl';

export const plugin = new DataSourcePlugin(Datasource)
  .setConfigEditor(ServiceNowConfigEditor)
  .setQueryEditor(ServiceNowQueryEditor)
  .setAnnotationQueryCtrl(AnnotationCtrl);

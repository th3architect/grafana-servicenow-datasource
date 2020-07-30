import { DataSourcePlugin } from './grafana';

import { Datasource } from './datasource';
import { ServiceNowQueryEditor } from './QueryEditor';
import { ServiceNowConfigCtrl } from './config/config_ctrl';
import { AnnotationCtrl } from './annotations/annotation_ctrl';

export const plugin = new DataSourcePlugin(Datasource)
  .setConfigCtrl(ServiceNowConfigCtrl)
  .setQueryEditor(ServiceNowQueryEditor)
  .setAnnotationQueryCtrl(AnnotationCtrl);

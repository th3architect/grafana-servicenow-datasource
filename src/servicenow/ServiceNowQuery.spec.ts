import { ServiceNowDocQuery } from './ServiceNowQuery';

describe('ServiceNowQuery', () => {
  it('ServiceNowDocQuery', () => {
    const serviceNowQuery1 = new ServiceNowDocQuery('table/schema');
    expect(serviceNowQuery1.api).toBe('doc');
    expect(serviceNowQuery1.tableName).toBe('table/schema');
    expect(serviceNowQuery1.getUrl()).toBe('/api/now/doc/table/schema');
    const serviceNowQuery2 = new ServiceNowDocQuery('table/schema/incident');
    expect(serviceNowQuery2.api).toBe('doc');
    expect(serviceNowQuery2.tableName).toBe('table/schema/incident');
    expect(serviceNowQuery2.getUrl()).toBe('/api/now/doc/table/schema/incident');
  });
});

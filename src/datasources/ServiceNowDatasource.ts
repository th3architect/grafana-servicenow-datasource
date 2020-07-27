import { ServiceNowResultsParser } from './ServiceNowResultsParser';

/** @ngInject */
export class ServiceNowDataSource {
    public url: string;
    public withCredentials: any;
    constructor(private instanceSettings: any, private backendSrv: any, private templateSrv: any) {
        this.url = this.instanceSettings.url + '/servicenow';
        console.log(typeof this.templateSrv);
    }
    private doServiceNowRequest(options: any, maxRetries = 1) {
        let URL_PARAMS: any[] = [];
        URL_PARAMS.push(`sysparm_limit=${options.limit || 10}`);
        URL_PARAMS.push(`sysparm_display_value=all`);
        if (options.fields && options.fields !== "*") {
            URL_PARAMS.push(`sysparm_fields=${options.fields || 'opened_at,number,short_description,sys_created_by,severity,category,state,priority'}`);
        }
        if (options.query) {
            let sysparm_queries = [options.query];
            URL_PARAMS.push(`sysparm_query=${sysparm_queries.join('^')}`);
        }
        return this.backendSrv
            .datasourceRequest({
                method: 'GET',
                url: this.url + `/api/now/${options.type || 'table'}/${options.table}?${URL_PARAMS.join('&')}`
            })
            .catch((error: any) => {
                console.log(error);
                if (maxRetries > 0) {
                    return this.doServiceNowRequest(options, maxRetries - 1);
                }
                throw error;
            });
    }
    private doQueries(queries: any[]) {
        return queries.map((query: any) => {
            return this.doServiceNowRequest(query)
                .then((result: any) => {
                    return { result, query };
                })
                .catch((error: any) => {
                    throw { error, query };
                });
        });
    }
    query(options: any): Promise<any> {
        const queries: any[] = options.targets
            .filter((item: any) => {
                return item.hide !== true;
            })
        const promises = this.doQueries(queries);
        return Promise.all(promises).then((results: any) => {
            let parsed_results = new ServiceNowResultsParser(results)
            return parsed_results.output;
        });
    }
}
import { forEach } from "lodash";

export class ServiceNowResultsParser {
    output: any = {
        columns: [],
        rows: [],
        type: 'table',
    };
    constructor(results: any[]) {
        results
            .filter(res => res && res.result && res.result.data && res.result.data.result)
            .forEach((res: any) => {
                console.log(res);
                res.result.data.result.forEach((item: any, index: number) => {
                    if (index === 0) {
                        forEach(item, (value, key) => {
                            if (typeof value === 'object' && value && (value.display_value || value.value === '')) {
                                this.output.columns.push({
                                    text: key,
                                    type: 'string'
                                })
                            } else {
                                this.output.columns.push({
                                    text: key,
                                    type: (typeof value === 'object' ? 'string' : typeof value)
                                })
                            }
                        })
                    }
                    let row: any = [];
                    forEach(item, (value) => {
                        if (typeof value === 'object' && value && (value.display_value || value.value === '')) {
                            row.push(value.display_value || value.value)
                        } else if (typeof value === 'object') {
                            row.push(JSON.stringify(value));
                        } else {
                            row.push(value);
                        }
                    })
                    this.output.rows.push(row);
                })
            });
    }
}
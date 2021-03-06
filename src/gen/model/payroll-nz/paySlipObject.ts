/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in the NZ region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Pagination } from '././pagination';
import { PaySlip } from '././paySlip';
import { Problem } from '././problem';

export class PaySlipObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'paySlip'?: PaySlip;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "paySlip",
            "baseName": "paySlip",
            "type": "PaySlip"
        }    ];

    static getAttributeTypeMap() {
        return PaySlipObject.attributeTypeMap;
    }
}


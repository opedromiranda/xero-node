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

import { EmployeeStatutorySickLeave } from '././employeeStatutorySickLeave';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EmployeeStatutorySickLeaves {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'statutorySickLeave'?: Array<EmployeeStatutorySickLeave>;

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
            "name": "statutorySickLeave",
            "baseName": "statutorySickLeave",
            "type": "Array<EmployeeStatutorySickLeave>"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeStatutorySickLeaves.attributeTypeMap;
    }
}

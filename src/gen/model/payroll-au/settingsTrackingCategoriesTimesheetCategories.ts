/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* The tracking category used for timesheets
*/
export class SettingsTrackingCategoriesTimesheetCategories {
    /**
    * The identifier for the tracking category
    */
    'trackingCategoryID'?: string;
    /**
    * Name of the tracking category
    */
    'trackingCategoryName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trackingCategoryID",
            "baseName": "TrackingCategoryID",
            "type": "string"
        },
        {
            "name": "trackingCategoryName",
            "baseName": "TrackingCategoryName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SettingsTrackingCategoriesTimesheetCategories.attributeTypeMap;
    }
}


/**
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 *
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 2.10.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { RequestArgs, BaseAPI } from '../base';
import { UserType } from '../models';
import { Response } from 'node-fetch';
import { Http } from '../../http';
import { Collection } from '../../collection';
import type { V2Configuration } from '../../configuration';
import type { Configuration } from '../configuration';
/**
 * UserTypeApi - request parameter creator
 * @export
 */
export declare const UserTypeApiRequestParamCreator: (configuration?: Configuration & V2Configuration) => {
    http: Http;
    /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * @summary Create User Type
      * @param {UserType} body
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    createUserType: (body: UserType, options?: any) => Promise<RequestArgs>;
    /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * @summary Delete User Type
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    deleteUserType: (typeId: string, options?: any) => Promise<RequestArgs>;
    /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * @summary Get User Type
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getUserType: (typeId: string, options?: any) => Promise<RequestArgs>;
    /**
      * Fetches all User Types in your org
      * @summary List User Types
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    listUserTypes: (options?: any) => Promise<RequestArgs>;
    /**
      * Replace an existing User Type
      * @summary Replace User Type
      * @param {UserType} body
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    replaceUserType: (body: UserType, typeId: string, options?: any) => Promise<RequestArgs>;
    /**
      * Updates an existing User Type
      * @summary Update User Type
      * @param {UserType} body
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    updateUserType: (body: UserType, typeId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * UserTypeApi - functional programming interface
 * @export
 */
export declare const UserTypeApiFp: (configuration?: Configuration & V2Configuration) => {
    /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * @summary Create User Type
      * @param {UserType} body
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    createUserType(body: UserType, options?: any): Promise<(http?: Http, basePath?: string) => Promise<UserType>>;
    /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * @summary Delete User Type
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    deleteUserType(typeId: string, options?: any): Promise<(http?: Http, basePath?: string) => Promise<Response>>;
    /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * @summary Get User Type
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getUserType(typeId: string, options?: any): Promise<(http?: Http, basePath?: string) => Promise<UserType>>;
    /**
      * Fetches all User Types in your org
      * @summary List User Types
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    listUserTypes(options?: any): Promise<(http?: Http, basePath?: string) => Collection<UserType>>;
    /**
      * Replace an existing User Type
      * @summary Replace User Type
      * @param {UserType} body
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    replaceUserType(body: UserType, typeId: string, options?: any): Promise<(http?: Http, basePath?: string) => Promise<UserType>>;
    /**
      * Updates an existing User Type
      * @summary Update User Type
      * @param {UserType} body
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    updateUserType(body: UserType, typeId: string, options?: any): Promise<(http?: Http, basePath?: string) => Promise<UserType>>;
};
/**
 * UserTypeApi - factory interface
 * @export
 */
export declare const UserTypeApiFactory: (configuration?: Configuration, basePath?: string, http?: Http) => {
    /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * @summary Create User Type
      * @param {UserType} body
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    createUserType(body: UserType, options?: any): Promise<UserType>;
    /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * @summary Delete User Type
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    deleteUserType(typeId: string, options?: any): Promise<Response>;
    /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * @summary Get User Type
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    getUserType(typeId: string, options?: any): Promise<UserType>;
    /**
      * Fetches all User Types in your org
      * @summary List User Types
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    listUserTypes(options?: any): Promise<Collection<UserType>>;
    /**
      * Replace an existing User Type
      * @summary Replace User Type
      * @param {UserType} body
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    replaceUserType(body: UserType, typeId: string, options?: any): Promise<UserType>;
    /**
      * Updates an existing User Type
      * @summary Update User Type
      * @param {UserType} body
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      */
    updateUserType(body: UserType, typeId: string, options?: any): Promise<UserType>;
};
/**
 * UserTypeApi - object-oriented interface
 * @export
 * @class UserTypeApi
 * @extends {BaseAPI}
 */
export declare class UserTypeApi extends BaseAPI {
    /**
      * Creates a new User Type. A default User Type is automatically created along with your org, and you may add another 9 User Types for a maximum of 10.
      * @summary Create User Type
      * @param {UserType} body
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof UserTypeApi
      */
    createUserType(body: UserType, options?: any): Promise<UserType>;
    /**
      * Deletes a User Type permanently. This operation is not permitted for the default type, nor for any User Type that has existing users
      * @summary Delete User Type
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof UserTypeApi
      */
    deleteUserType(typeId: string, options?: any): Promise<Response>;
    /**
      * Fetches a User Type by ID. The special identifier `default` may be used to fetch the default User Type.
      * @summary Get User Type
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof UserTypeApi
      */
    getUserType(typeId: string, options?: any): Promise<UserType>;
    /**
      * Fetches all User Types in your org
      * @summary List User Types
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof UserTypeApi
      */
    listUserTypes(options?: any): Promise<Collection<UserType>>;
    /**
      * Replace an existing User Type
      * @summary Replace User Type
      * @param {UserType} body
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof UserTypeApi
      */
    replaceUserType(body: UserType, typeId: string, options?: any): Promise<UserType>;
    /**
      * Updates an existing User Type
      * @summary Update User Type
      * @param {UserType} body
      * @param {string} typeId
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof UserTypeApi
      */
    updateUserType(body: UserType, typeId: string, options?: any): Promise<UserType>;
}

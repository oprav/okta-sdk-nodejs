/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


'use strict';
/**
 * Okta API
 * Allows customers to easily access the Okta API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.OAuth2Client = void 0;
class OAuth2Client {
  constructor() {
  }
  static getAttributeTypeMap() {
    return OAuth2Client.attributeTypeMap;
  }
}
exports.OAuth2Client = OAuth2Client;
OAuth2Client.discriminator = undefined;
OAuth2Client.attributeTypeMap = [
  {
    'name': 'client_id',
    'baseName': 'client_id',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'client_name',
    'baseName': 'client_name',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'client_uri',
    'baseName': 'client_uri',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'logo_uri',
    'baseName': 'logo_uri',
    'type': 'string',
    'format': ''
  },
  {
    'name': '_links',
    'baseName': '_links',
    'type': '{ [key: string]: any; }',
    'format': ''
  }
];

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
exports.SwaThreeFieldApplicationSettingsApplicationAllOf = void 0;
class SwaThreeFieldApplicationSettingsApplicationAllOf {
  constructor() {
  }
  static getAttributeTypeMap() {
    return SwaThreeFieldApplicationSettingsApplicationAllOf.attributeTypeMap;
  }
}
exports.SwaThreeFieldApplicationSettingsApplicationAllOf = SwaThreeFieldApplicationSettingsApplicationAllOf;
SwaThreeFieldApplicationSettingsApplicationAllOf.discriminator = undefined;
SwaThreeFieldApplicationSettingsApplicationAllOf.attributeTypeMap = [
  {
    'name': 'buttonSelector',
    'baseName': 'buttonSelector',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'extraFieldSelector',
    'baseName': 'extraFieldSelector',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'extraFieldValue',
    'baseName': 'extraFieldValue',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'loginUrlRegex',
    'baseName': 'loginUrlRegex',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'passwordSelector',
    'baseName': 'passwordSelector',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'targetURL',
    'baseName': 'targetURL',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'userNameSelector',
    'baseName': 'userNameSelector',
    'type': 'string',
    'format': ''
  }
];

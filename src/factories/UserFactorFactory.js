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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

const ModelResolutionFactory = require('../resolution-factory');
/*eslint-disable no-unused-vars*/
const factories = require('./');
const models = require('../models');

class UserFactorFactory extends ModelResolutionFactory {
  getMapping() {
    return {
      'call': models.CallUserFactor,
      'email': models.EmailUserFactor,
      'hotp': models.CustomHotpUserFactor,
      'push': models.PushUserFactor,
      'question': models.SecurityQuestionUserFactor,
      'sms': models.SmsUserFactor,
      'token': models.TokenUserFactor,
      'token:hardware': models.HardwareUserFactor,
      'token:hotp': models.CustomHotpUserFactor,
      'token:software:totp': models.TotpUserFactor,
      'u2f': models.U2fUserFactor,
      'web': models.WebUserFactor,
      'webauthn': models.WebAuthnUserFactor,
    };
  }

  getResolutionProperty() {
    return 'factorType';
  }

  getParentModel() {
    return models.UserFactor;
  }
}

module.exports = UserFactorFactory;

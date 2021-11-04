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

var Resource = require('../resource');


/**
 * @class Theme
 * @extends Resource
 * @property { hash } _links
 * @property { string } backgroundImage
 * @property { EmailTemplateTouchPointVariant } emailTemplateTouchPointVariant
 * @property { EndUserDashboardTouchPointVariant } endUserDashboardTouchPointVariant
 * @property { ErrorPageTouchPointVariant } errorPageTouchPointVariant
 * @property { string } favicon
 * @property { string } id
 * @property { string } logo
 * @property { string } primaryColorContrastHex
 * @property { string } primaryColorHex
 * @property { string } secondaryColorContrastHex
 * @property { string } secondaryColorHex
 * @property { SignInPageTouchPointVariant } signInPageTouchPointVariant
 */
class Theme extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);

  }

  /**
   * @param {string} brandId
   * @returns {Promise<Theme>}
   */
  update(brandId) {
    return this.httpClient.updateBrandTheme(brandId, this.id, this);
  }

  /**
   * @param {string} brandId
   * @param {file} fs.ReadStream
   * @returns {Promise<ImageUploadResponse>}
   */
  uploadBrandThemeLogo(brandId, file) {
    return this.httpClient.uploadBrandThemeLogo(brandId, this.id, file);
  }

  /**
   * @param {string} brandId
   */
  deleteBrandThemeLogo(brandId) {
    return this.httpClient.deleteBrandThemeLogo(brandId, this.id);
  }

  /**
   * @param {string} brandId
   * @param {file} fs.ReadStream
   * @returns {Promise<ImageUploadResponse>}
   */
  updateBrandThemeFavicon(brandId, file) {
    return this.httpClient.uploadBrandThemeFavicon(brandId, this.id, file);
  }

  /**
   * @param {string} brandId
   */
  deleteBrandThemeFavicon(brandId) {
    return this.httpClient.deleteBrandThemeFavicon(brandId, this.id);
  }

  /**
   * @param {string} brandId
   * @param {file} fs.ReadStream
   * @returns {Promise<ImageUploadResponse>}
   */
  updateBrandThemeBackgroundImage(brandId, file) {
    return this.httpClient.uploadBrandThemeBackgroundImage(brandId, this.id, file);
  }

  /**
   * @param {string} brandId
   */
  deleteBrandThemeBackgroundImage(brandId) {
    return this.httpClient.deleteBrandThemeBackgroundImage(brandId, this.id);
  }
}

module.exports = Theme;

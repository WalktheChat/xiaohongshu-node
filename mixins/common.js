'use strict';

const crypto = require('crypto');
const qs = require('qs');

/**
 * This provides methods used by other resources
 *
 * @mixin
 */

const common = {
  encodeUri(data, sorting = false, separator = '&') {
    let ret = [];
    let keys = Object.keys(data);
    if (sorting) {
      keys = keys.sort();
    }
    keys.forEach(key => {
      ret.push(key + '=' + data[key]);
    });
    return ret.join(separator);
  },
  getHash: function (data, algorithm) {
    let digest = crypto.createHash(algorithm)
      .update(data).digest('hex');
    return digest;
  },

  /**
  * Sign url with params.
  *
  * @param {String} url base url
  * @param {String} params parameters to append to url
  * @param {String} md5Key key to sign
  * @return {String} MD5 signature
  * @private
  */
  signUrlMD5(url, params, md5Key) {
    let signParamsString = common.encodeUri(params, true);
    signParamsString += md5Key;
    url += `?${signParamsString}`;
    let signature = common.getHash(url, 'md5');
    return signature;
  },

  /**
  * Builds the request URL.
  *
  * @param {Object} query Query parameters
  * @return {String} URL
  * @private
  */
  buildUrl(query) {
    let path = `/${this.resource}`
      .replace(/\/+/g, '/')
      .replace(/\/$/, '');

    if (query) {
      path += '?' + qs.stringify(query, { arrayFormat: 'brackets' });
    }
    let url = `${this.xiaohongshu.baseUrl.protocol}${this.xiaohongshu.baseUrl.hostname}${this.xiaohongshu.baseUrl.defaultSegment}${this.version}${path}`
    return url;
  }

};

module.exports = common;

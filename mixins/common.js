'use strict';

const crypto = require('crypto');

/**
 * This provides methods used by other resources.
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
  signUrlMD5(url, params, md5Key) {
    let signParamsString = encodeQueryData(params, true);
    signParamsString += md5Key;
    url += `?${signParamsString}`;
    let signature = getHash(url, 'md5');
    return signature;
  },

};

module.exports = common;

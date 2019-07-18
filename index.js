'use strict';
const camelCase = require('lodash/camelCase');
const defaults = require('lodash/defaults');
const assign = require('lodash/assign');
const path = require('path');
const got = require('got');
const fs = require('fs');

const pkg = require('./package');
const signMD5 = require('./mixins/common').signUrlMD5;

/**
 * Creates a Xiaohongshu instance.
 *
 * @param {Object} options Configuration options
 * @param {String} options.appKey The API app key
 * @param {String} options.appSecret The API app secret
 * @constructor
 * @public
 */

function Xiaohongshu(options) {
  if (!(this instanceof Xiaohongshu)) {
    return new Xiaohongshu(options);
  }
  if (
    !options ||
    !options.appKey ||
    !options.appSecret
  ) {
    throw new Error('Missing or invalid options');
  }

  this.options = defaults(options, { timeout: 60000 });

  this.baseUrl = {
    protocol: 'http://',
    hostname: 'flssandbox.xiaohongshu.com',
    defaultSegment: '/ark/open_api/'
  };
}

/**
 * Sends a request to a Xiaohongshu API endpoint.
 *
 * @param {String} method HTTP method
 * @param {String} url URL
 * @param {String} version Api version
 * @param {String} resource ressource to query
 * @param {Object} [query] Query params
 * @param {Object} [body] Request body
 * @return {Promise}
 * @private
 */
Xiaohongshu.prototype.request = function request(method, url, version, resource, query, body) {
  const options = {
    headers: { 'User-Agent': `${pkg.name}/${pkg.version}` },
    timeout: this.options.timeout,
    json: true,
    method,
    url
  };

  if (this.options.appKey && this.options.appSecret) {
    let timestamp = Math.floor(Date.now() / 1000);
    options.headers['timestamp'] = timestamp;
    options.headers['app-key'] = this.options.appKey;
    options.headers['sign'] = signMD5(
      `${this.baseUrl.defaultSegment}${version}${resource}`,
      assign({}, { 'app-key': this.options.appKey, timestamp }, query),
      this.options.appSecret
    );
  }

  if (body) {
    options.headers['Content-Type'] = 'application/json;charset=utf-8';
    options.body = body;
  }

  return got(options)
    .then(res => {
      const responseBody = res.body;
      if (responseBody && responseBody.body.data && responseBody.body.success) {
        responseBody = responseBody.data;
        return responseBody || {};
      } else {
        throw responseBody;
      }
    }).catch(err => {
      if (err.body) {
        err = err.body;
      }
      return err;
    });
};


//
// Require and instantiate the resources lazily.
//
fs.readdirSync(path.join(__dirname, 'resources')).forEach(name => {
  const prop = camelCase(name.slice(0, -3));

  Object.defineProperty(Xiaohongshu.prototype, prop, {
    get: function get() {
      const resource = require(`./resources/${name}`);

      return Object.defineProperty(this, prop, {
        value: new resource(this)
      })[prop];
    },
    set: function set(value) {
      return Object.defineProperty(this, prop, { value })[prop];
    }
  });
});

module.exports = Xiaohongshu;

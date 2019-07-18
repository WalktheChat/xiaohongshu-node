'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const common = require('../mixins/common');

/**
 * Creates a SPU instance.
 *
 * @param {Xiaohongshu} xiaohongshu Reference to the Xiaohongshu instance
 * @constructor
 * @public
 */
function Spu(xiaohongshu) {
  this.xiaohongshu = xiaohongshu;
  this.resourceName = 'spu';
  this.version = 'v1'
}

assign(Spu.prototype, pick(common, ['buildUrl']));

/**
 * Creates a SPU.
 *
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spu.prototype.create = function create(body) {
  this.resource = `${this.resourceName}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('POST', url, this.version, this.resource, {}, body);
};

/**
 * Updates a SPU.
 *
 * @param {String} spuId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spu.prototype.update = function update(spuId, body) {
  this.resource = `${this.resourceName}/${spuId}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Gets a single SPU by its ID.
 *
 * @param {String} spuId Record ID
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spu.prototype.get = function get(spuId, query) {
  this.resource = `${this.resourceName}/${spuId}`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

module.exports = Spu;

'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const common = require('../mixins/common');

/**
 * Creates a SPV instance.
 *
 * @param {Xiaohongshu} xiaohongshu Reference to the Xiaohongshu instance
 * @constructor
 * @public
 */
function Spv(xiaohongshu) {
  this.xiaohongshu = xiaohongshu;
  this.resource = 'spv';
  this.version = 'v1'
}

assign(Spv.prototype, pick(common, ['buildUrl']));

/**
 * Creates a SPV.
 *
 * @param {String} splId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spv.prototype.create = function create(splId, body) {
  this.resource = `spl/${splId}/spv`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('POST', url, this.version, this.resource, {}, body);
};

/**
 * Updates a SPV.
 *
 * @param {String} spuId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spv.prototype.update = function update(spvId, body) {
  this.resource += `/${spvId}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Updates a SPV CUSTOMS.
 *
 * @param {String} spvId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spv.prototype.update = function update(spvId, body) {
  this.resource += `/${spvId}/customs`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};


module.exports = Spv;

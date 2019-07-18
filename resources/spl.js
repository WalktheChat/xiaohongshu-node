'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const common = require('../mixins/common');

/**
 * Creates a SPL instance.
 *
 * @param {Xiaohongshu} xiaohongshu Reference to the Xiaohongshu instance
 * @constructor
 * @public
 */
function Spl(xiaohongshu) {
  this.xiaohongshu = xiaohongshu;
  this.resource = 'spl';
  this.version = 'v1'
}

assign(Spl.prototype, pick(common, ['buildUrl']));

/**
 * Creates a SPL.
 *
 * @param {String} spuId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spl.prototype.create = function create(spuId, body) {
  this.resource = `spu/${spuId}/spl`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('POST', url, this.version, this.resource, {}, body);
};

/**
 * Creates a SPL ITEM.
 *
 * @param {String} spuId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spl.prototype.createItem = function createItem(splId, body) {
  this.resource += `/${splId}/spl_item`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('POST', url, this.version, this.resource, {}, body);
};


/**
 * Updates a SPL.
 *
 * @param {String} splId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spl.prototype.update = function update(splId, body) {
  this.resource += `/${splId}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Updates a SPL ITEM.
 *
 * @param {String} splId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spl.prototype.updateItem = function updateItem(splId, body) {
  this.resource += `/${splId}/spl_item`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Submit a SPL ITEM.
 *
 * @param {String} splId Record ID
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Spl.prototype.submitItem = function submitItem(splId, body) {
  this.resource += `/${splId}/spl_item/submit`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('POST', url, this.version, this.resource, {}, null);
};

module.exports = Spl;

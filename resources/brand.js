'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const common = require('../mixins/common');

/**
 * Creates a BRAND instance.
 *
 * @param {Xiaohongshu} xiaohongshu Reference to the Xiaohongshu instance
 * @constructor
 * @public
 */
function Brand(xiaohongshu) {
  this.xiaohongshu = xiaohongshu;
  this.resourceName = 'brand_search';
  this.version = 'v1'
}

assign(Brand.prototype, pick(common, ['buildUrl']));

/**
 * Searches BRANDS.
 *
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Brand.prototype.search = function search(query) {
  this.resource = `${this.resourceName}`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

module.exports = Brand;


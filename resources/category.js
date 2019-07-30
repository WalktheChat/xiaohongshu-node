'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const common = require('../mixins/common');

/**
 * Creates a CATEGORY instance.
 *
 * @param {Xiaohongshu} xiaohongshu Reference to the Xiaohongshu instance
 * @constructor
 * @public
 */
function Category(xiaohongshu) {
  this.xiaohongshu = xiaohongshu;
  this.resourceName = 'categories';
  this.version = 'v1'
}

assign(Category.prototype, pick(common, ['buildUrl']));

/**
 * Gets CATEGORIES.
 *
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Category.prototype.getList = function getList(query) {
  this.resource = `${this.resourceName}`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

/**
 * Gets CATEGORY VARIATIONS.
 *
 * @param {String} categoryId Record ID
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Category.prototype.getVariations = function getVariations(categoryId, query) {
  this.resource = `${this.resourceName}/${categoryId}/variations`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

/**
 * Gets CATEGORY ATTRIBUTE OPTIONS.
 *
 * @param {String} categoryId Record ID
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Category.prototype.getAttributeOptions = function getAttributeOptions(categoryId) {
  this.resource = `${this.resourceName}/${categoryId}/attribute_options`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};


/**
 * Gets ATTRIBUTE VALUES.
 *
 * @param {String} attributeId Record ID
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Category.prototype.getAttributeOptions = function getAttributeOptions(attributeId) {
  this.resource = `attributes/${attributeId}/values`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};


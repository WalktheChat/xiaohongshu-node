'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const common = require('../mixins/common');

/**
 * Creates a ITEM instance.
 *
 * @param {Xiaohongshu} xiaohongshu Reference to the Xiaohongshu instance
 * @constructor
 * @public
 */
function Item(xiaohongshu) {
  this.xiaohongshu = xiaohongshu;
  this.resourceName = 'item';
  this.version = 'v1'
}

assign(Item.prototype, pick(common, ['buildUrl']));

/**
 * Creates a ITEM.
 *
 * @param {String} spvId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.create = function create(spvId, body) {
  this.resource = `spv/${spvId}/${this.resourceName}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('POST', url, this.version, this.resource, {}, body);
};

/**
 * Updates a ITEM.
 *
 * @param {String} itemId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.update = function update(itemId, body) {
  this.resource = `${this.resourceName}/${itemId}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Updates a ITEM LOGISTICS.
 *
 * @param {String} itemId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.updateLogistics = function updateLogistics(itemId, body) {
  this.resource = `${this.resourceName}/${itemId}/logistics`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Updates a ITEM AVAILABILITY.
 *
 * @param {String} itemId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.updateAvailability = function updateAvailability(itemId, body) {
  this.resource = `${this.resourceName}/${itemId}/availability`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Gets ITEMS LITE.
 *
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.getListLite = function getListLite(query) {
  this.resource = `/items/lite`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

/**
 * Gets ITEMS.
 *
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.getList = function getList(query) {
  this.resource = `/items`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

/**
 * Gets a single ITEM.
 *
 * @param {String} itemId Record ID
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.get = function get(itemId) {
  let query = { id: itemId }
  this.resource = `/items`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

/**
 * Gets ITEM INVENTORY.
 *
 * @param {String} itemId Record ID
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.getInventory = function getInventory(itemId) {
  this.version = "v0"
  this.resource = `/items/${itemId}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('GET', url, this.version, this.resource, {}, null);
};

/**
 * Updates a ITEM INVENTORY.
 *
 * @param {String} itemId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Item.prototype.updateInventory = function updateInventory(itemId, body) {
  this.version = "v0"
  this.resource = `/inventories/item/${itemId}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

module.exports = Item;

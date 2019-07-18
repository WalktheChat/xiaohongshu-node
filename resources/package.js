'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');
const common = require('../mixins/common');

/**
 * Creates a PACKAGE instance.
 *
 * @param {Xiaohongshu} xiaohongshu Reference to the Xiaohongshu instance
 * @constructor
 * @public
 */
function Package(xiaohongshu) {
  this.xiaohongshu = xiaohongshu;
  this.resource = 'packages';
  this.version = 'v0'
}

assign(Package.prototype, pick(common, ['buildUrl']));

/**
 * Gets lastest PACKAGES.
 *
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.getLastest = function getLastest(query) {
  this.resource += `/latest_packages`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

/**
 * Gets PACKAGES status.
 *
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.getStatus = function getStatus(query) {
  this.resource += `/packages_status`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

/**
 * Gets PACKAGES list.
 *
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.getList = function getList(query) {
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};

/**
 * Gets PACKAGES list.
 *
 * @param {String} packageId Record ID
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.get = function get(packageId) {
  this.resource += `/${packageId}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('GET', url, this.version, this.resource, {}, null);
};

/**
 * Updates PACKAGE shipping.
 *
 * @param {String} packageId Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.updateShipping = function updateShipping(packageId, body) {
  this.resource += `/${packageId}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Creates PACKAGE batch (parcel).
 *
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.createBatch = function createBatch(body) {
  this.resource += `/transfer_batches`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('POST', url, this.version, this.resource, {}, body);
};

/**
 * Updates PACKAGE batch (parcel).
 *
 * @param {String} batchNo Record ID
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.updateBatch = function updateBatch(batchNo, body) {
  this.resource += `transfer_batches/${batchNo}`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Update cancelled PACKAGES.
 *
 * @param {Object} body Body parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.updateCancelled = function updateCancelled(body) {
  this.resource += `canceling/audit`;
  const url = this.buildUrl();
  return this.xiaohongshu.request('PUT', url, this.version, this.resource, {}, body);
};

/**
 * Gets cancelled PACKAGES list.
 *
 * @param {Object} query Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Package.prototype.getlistCancelled = function getlistCancelled(query) {
  this.resource += `canceling/list`;
  const url = this.buildUrl(query);
  return this.xiaohongshu.request('GET', url, this.version, this.resource, query, null);
};


module.exports = Package;

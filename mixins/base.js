'use strict';

const qs = require('qs');

/**
 * This provides methods used by resources that have no relationships with
 * other resources. this is meant to be used as reference.
 *
 * @mixin
 */
const base = {
  /**
   * Counts the number of records.
   *
   * @param {Object} query Query parameters
   * @return {Promise} Promise that resolves with the result
   * @public
   */
  count(query) {
    const key = 'count';
    const url = this.buildUrl(key, params);
    return this.xiaohongshu.request('GET', url, this.version, this.name, query);
  },

  /**
   * Creates a new record.
   * 
   * @param {Object} body Record properties
   * @return {Promise} Promise that resolves with the result
   * @public
   */
  create(body) {
    const url = this.buildUrl();
    return this.xiaohongshu.request('POST', url, this.version, this.name, {}, body);
  },

  /**
   * Deletes a record.
   *
   * @param {Number} id Record ID
   * @return {Promise} Promise that resolves with the result
   * @public
   */
  delete(id) {
    const url = this.buildUrl(id);
    return this.xiaohongshu.request('GET', url, this.version, this.name, {}, null);
  },

  /**
   * Gets a single record by its ID.
   *
   * @param {Number} id Record ID
   * @param {Object} query Query parameters
   * @return {Promise} Promise that resolves with the result
   * @public
   */
  get(id, query) {
    const url = this.buildUrl(id, query);
    return this.xiaohongshu.request('GET', url, this.version, this.name, query, null);
  },

  /**
   * Gets a list of records.
   *
   * @param {Object} query Query parameters
   * @return {Promise} Promise that resolves with the result
   * @public
   */
  list(query) {
    const url = this.buildUrl(undefined, query);
    return this.xiaohongshu.request('GET', url, this.version, this.name, query, null);
  },

  /**
   * Updates a record.
   *
   * @param {Number} id Record ID
   * @param {Object} body Record properties
   * @return {Promise} Promise that resolves with the result
   * @public
   */
  update(id, body) {
    const url = this.buildUrl(id);
    return this.xiaohongshu.request('PUT', url, this.version, this.name, {}, body);
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
    let url = `${this.xiaohongshu.baseUrl.protocol}${this.xiaohongshu.baseUrl.hostname}${this.xiaohongshu.baseUrl.defaultSegment}/${this.version}/${path}`
    return url;
  }
};

module.exports = base;

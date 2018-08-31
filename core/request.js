const fetch = require('isomorphic-fetch')
const {size} = require('lodash')
const qs = require('qs')

/**
 * This is our overly complicated isomorphic "request"
 * @param state
 * @returns {Function}
 */
export default {
  async get(url, params, headers = {}) {
    return buildRequest('GET', url, params, { headers })
  },

  async post(url, data, headers = {}) {
    return buildRequest('POST', url, data, { headers })
  },
}

/**
 * Build and execute remote request
 * @param method
 * @param url
 * @param params
 * @param config
 */
function buildRequest(method, url, params, options) {
  const requestURL = createURL(url) + (method === 'GET' && size(params) ? ('?' + qs.stringify(params)) : '')
  const request = {
    method,
    mode: 'cors',
    credentials: 'include',
    headers: options.headers,
  }

  if (!options.isMultiForm) {
    request.headers['accept-encoding'] = 'br,gzip,deflate'
    request.headers['content-type'] = 'application/json'
  }

  if (method === 'POST') {
    request.body = JSON.stringify(params || {})
  }

  return fetch(requestURL, request).then(handleResponse)
}

/**
 * Prepend host of API server
 * @param path
 * @returns {String}
 * @private
 */
function createURL(path) {
  if (path.startsWith('http')) {
    return path
  } else {
    return '/' + path.trimLeft('/')
  }
}

/**
 * Decide what to do with the response
 * @param response
 * @returns {Promise}
 * @private
 */
async function handleResponse(response) {
  try {
    return response.json()
  } catch(err) {
    console.error(err)
    return Promise.reject(err)
  }
}

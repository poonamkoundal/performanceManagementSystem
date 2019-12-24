/*
 * @file: index.js
 * @description: It Contain rest functions for api call .
 * @author: 
 */
import axios from 'axios';
import querystring from 'querystring';
import { setAuthorizationToken } from '../auth';
var config = {
  headers: { 'Content-Type': 'application/json' }
};

class ApiClient {
  static post(url, params, token = '') {
    setAuthorizationToken(axios, token);
    return new Promise(function (fulfill, reject) {
      axios
        .post(url, JSON.stringify(params), config)

        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static put(url, params, token = '') {
    setAuthorizationToken(axios, token);
    return new Promise(function (fulfill, reject) {
      axios
        .put(url, JSON.stringify(params), config)
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static get(url, params, token = '') {
    let query = querystring.stringify(params);
    url = query ? `${url}?${query}` : url;
    setAuthorizationToken(axios, token);
    return new Promise(function (fulfill, reject) {
      axios
        .get(url, config)

        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static delete(url, token = '') {
    setAuthorizationToken(axios, token);
    return new Promise(function (fulfill, reject) {
      axios
        .delete(url, config)
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  /*************** Form-Data Method ***********/
  static postFormData(url, params, token = '') {
    config.headers['Content-Type'] = 'multipart/form-data';
    return new Promise(function (fulfill, reject) {
      var body = new FormData();
      body.append('file', params);

      axios
        .post(url, body, config)

        .then(function (response) {
          fulfill({ status: response.status, data: response.data });
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

}

export default ApiClient;

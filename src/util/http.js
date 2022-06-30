// import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
// import router from '../router';

// axios 配置
axios.defaults.timeout = 15000;

axios.defaults.baseURL = '/api/app/circles';

axios.interceptors.request.use(
    function(config) {
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);


// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.status != 200 || (response.data.status != 'ok' && response.data.code != 1000)) {
            Message.error('获取数据错误');
            return false;
        }
        return response.data;
    },
    error => {
        return Promise.reject(error);
    });

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data))
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * del 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */

export function del(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, qs.stringify(data))
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

/**
 * get 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
              params: params
          })
          .then(response => {
              resolve(response.data);
          }, err => {
              reject(err);
          })
    })
}

/**
 * axios request module
 * return a Promise instance
 *
 * optimization
 * 1. error/exception handling with executors
 */

import axios from "axios";

import {message} from 'antd';

export default function ajax(url, data = {}, method = 'GET') {

    //as sending async request, the
    return new Promise(function (resolve, reject) {
        let promise;

        if(method === 'GET'){
            promise = axios.get(url, {params : data});
        } else {
            promise = axios.post(url, data);
        }

        promise.then(response => {
            resolve(response.data);
        }).catch(error => {
            message.error("request failed: " + error.message);
        })
    })
}

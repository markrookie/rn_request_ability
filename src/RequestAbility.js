/**
 * Copyright (c) 2018-present, SanQiu, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * author：Mark
 * date：  2021/9/15 11:09 AM
 */
import axios from 'axios';
import ResponseError from './ResponseError';
import parseResponseErrorMessage from './parseResponseErrorMessage';
import parseResponseErrorType from './parseResponseErrorType';

const DEFAULT_TIME_OUT = 10000;

export default class RequestAbility {
    accessToken;

    headerFactory;

    #apiDomain;

    constructor(apiDomain, accessToken, headerFactory) {
        if (!apiDomain) {
            throw new Error('Please specify an apiDomain');
        }
        this.#apiDomain = apiDomain;
        if (accessToken) {
            this.accessToken = accessToken;
        }
        if (headerFactory) {
            this.headerFactory = headerFactory;
        }
    }

    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }

    post(path, header, body, timeout = DEFAULT_TIME_OUT) {
        return this._request('post', { path, header, body, timeout });
    }

    get(path, header, timeout = DEFAULT_TIME_OUT) {
        return this._request('get', { path, header, timeout });
    }

    put(path, header, body, timeout = DEFAULT_TIME_OUT) {
        return this._request('put', { path, header, body, timeout });
    }

    delete(path, header, body, timeout = DEFAULT_TIME_OUT) {
        return this._request('delete', { path, header, body, timeout });
    }

    _request(method, { path, header, body, timeout }) {
        const axiosConfig = {
            baseURL: this.#apiDomain,
            method,
            url: path,
            timeout,
        };
        if (body) {
            axiosConfig.data = body;
        }
        if (header) {
            axiosConfig.headers = header;
        }
        return axios(axiosConfig)
            .then((res) => {
                const { data } = res;
                const { ok, result } = data;
                if (ok) {
                    return result;
                }
                throw new ResponseError(parseResponseErrorMessage(res), parseResponseErrorType(res), path, res);
            })
            .catch((error) => {
                if (error instanceof ResponseError) {
                    throw error;
                } else {
                    const { response } = error;
                    throw new ResponseError(error.message, 'axios_catch_error', path, response);
                }
            });
    }
}

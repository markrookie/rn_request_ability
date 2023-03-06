/**
 * Copyright (c) 2018-present, AC, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * author：Mark
 * date：  2021/9/16 1:20 PM
 */

export default class ResponseError extends Error {
    constructor(message, type, path, response) {
        super(message);
        this.path = path;
        this.response = response || {};
        const { config, status } = this.response;
        this.request = config;
        this.type = type;
        this.status = status;
    }
}

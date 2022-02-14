/**
 * Copyright (c) 2018-present, SanQiu, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * author：Mark
 * date：  2021/9/16 1:29 PM
 */

export default function parseResponseErrorMessage(response) {
    const {
        data: { errors, error_message: errorMessage, message },
    } = response;
    if (errors) {
        const error = errors[0];
        const { field, message } = error;
        return `field ${field}, ${message} `;
    }
    if (typeof errorMessage === 'string') {
        return errorMessage;
    }
    if (typeof message === 'string') {
        return message;
    }
    return 'server error message invalid';
}

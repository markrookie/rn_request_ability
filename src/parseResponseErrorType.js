/**
 * Copyright (c) 2018-present, SanQiu, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * author：Mark
 * date：  2021/9/16 1:32 PM
 */

export default function parseResponseErrorType(response) {
    const { data } = response;
    return data.error_type;
}

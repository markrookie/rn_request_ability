/**
 * Copyright (c) 2018-present, AC, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * author：Mark
 * date：  2022/5/30 15:58
 */

export default class RequestAbilityHeaderFactory {
    #header;

    constructor(props) {
        const { appId, sysLanguage, appVersion } = props;
        this.#header = {
            'Content-Type': 'application/json',
            'APP-ID': appId,
            'Accept-Language': sysLanguage,
            'App-Version': appVersion,
        };
    }

    authorizedHeader(auth) {
        return {
            ...this.#header,
            Authorization: auth,
        }
    }

    unauthorizedHeader() {
        return {...this.#header};
    }
}

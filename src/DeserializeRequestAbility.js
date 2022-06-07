import RequestAbility from './RequestAbility';
import toCamelCase from './utils/toCamelCase';

export default class DeserializeRequestAbility extends RequestAbility {
    get(path, header, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        return super.get(path, header, timeout).then((res) => toCamelCase(res));
    }

    post(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        return super.post(path, header, body, timeout).then((res) => toCamelCase(res));
    }

    put(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        return super.put(path, header, body, timeout).then((res) => toCamelCase(res));
    }

    delete(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        return super.delete(path, header, body, timeout).then((res) => toCamelCase(res));
    }

    patch(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        return super.patch(path, header, body, timeout).then((res) => toCamelCase(res));
    }
}

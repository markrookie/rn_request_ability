import RequestAbility from './RequestAbility';
import toCamelCase from './utils/toCamelCase';

const DEFAULT_TIME_OUT = 10000;

export default class DeserializeRequestAbility extends RequestAbility {
    get(path, header, timeout = DEFAULT_TIME_OUT) {
        return super.get(path, header, timeout).then((res) => toCamelCase(res));
    }

    post(path, header, body, timeout = DEFAULT_TIME_OUT) {
        return super.post(path, header, body, timeout).then((res) => toCamelCase(res));
    }

    put(path, header, body, timeout = DEFAULT_TIME_OUT) {
        return super.put(path, header, body, timeout).then((res) => toCamelCase(res));
    }

    delete(path, header, body, timeout = DEFAULT_TIME_OUT) {
        return super.delete(path, header, body, timeout).then((res) => toCamelCase(res));
    }
}

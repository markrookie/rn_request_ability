import RequestAbility from './RequestAbility';

export default class LoggerRequestAbility extends RequestAbility {
    get(path, header, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`♦️♦♦️♦️♦️️ http (${path}) http ♦♦️♦️♦♦️`);
        return super.get(path, header, timeout);
    }

    post(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`♦️♦♦️♦️♦️️ http (${path}) http ♦♦️♦️♦♦️`);
        return super.post(path, header, body, timeout);
    }

    put(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`♦️♦♦️♦️♦️️ http (${path}) http ♦♦️♦️♦♦️`);
        return super.put(path, header, body, timeout);
    }

    delete(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`♦️♦♦️♦️♦️️ http (${path}) http ♦♦️♦️♦♦️`);
        return super.delete(path, header, body, timeout);
    }

    patch(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`♦️♦♦️♦️♦️️ http (${path}) http ♦♦️♦️♦♦️`);
        return super.patch(path, header, body, timeout);
    }    
}
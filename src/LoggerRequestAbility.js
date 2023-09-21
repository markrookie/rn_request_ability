import RequestAbility from './RequestAbility';

const now = () => new Date().toISOString(); 
const HTTP_LOGGER_COLOR = 'color: rgb(14, 138, 238)';

export default class LoggerRequestAbility extends RequestAbility {
    get(path, header, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`${now()}%c http GET ${path}`, HTTP_LOGGER_COLOR);
        return super.get(path, header, timeout);
    }

    post(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`${now()}%c http POST ${path} body:${JSON.stringify(body)}`, HTTP_LOGGER_COLOR);
        return super.post(path, header, body, timeout);
    }

    put(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`${now()}%c http PUT ${path} body:${JSON.stringify(body)}`, HTTP_LOGGER_COLOR);
        return super.put(path, header, body, timeout);
    }

    delete(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`${now()}%c http DELETE ${path} body:${JSON.stringify(body)}`, HTTP_LOGGER_COLOR);
        return super.delete(path, header, body, timeout);
    }

    patch(path, header, body, timeout = RequestAbility.DEFAULT_TIMEOUT) {
        console.debug(`${now()}%c http PATCH ${path} body:${JSON.stringify(body)}`, HTTP_LOGGER_COLOR);
        return super.patch(path, header, body, timeout);
    }    
}
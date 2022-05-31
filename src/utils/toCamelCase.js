const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';
const toCamelCase = (originObj) => {
    let result;
    if (Array.isArray(originObj)) {
        result = [];
        originObj.forEach((value, index) => {
            result[index] = toCamelCase(value);
        });
    } else if (isObject(originObj)) {
        result = {};

        const keys = Object.keys(originObj);

        keys.forEach((key) => {
            const value = originObj[key];
            const newKey = key.replace(/_(\w)/g, (all, letter) => letter.toUpperCase());

            result[newKey] = isObject(value) ? toCamelCase(value) : value;
        });
    } else {
        return originObj;
    }
    return result;
};
export default toCamelCase;

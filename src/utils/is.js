const toString = Object.prototype.toString

export function is(val, type) {
    return toString.call(val) === `[object ${type}]`
}

export function isDef(val) {
    return typeof val !== 'undefined'
}

export function isUndef(val) {
    return typeof val === 'undefined'
}

export function isNull(val) {
    return val === null
}

export function isWhitepace(val) {
    return val === ''
}

export function isObject(val) {
    return !isNull(val) && is(val, 'Object')
}

export function isArray(val) {
    return val && Array.isArray(val)
}

export function isString(val) {
    return is(val, 'String')
}

export function isNumber(val) {
    return is(val, 'Number')
}

export function isBoolean(val) {
    return is(val, 'Boolean')
}

export function isDate(val) {
    return is(val, 'Date')
}

export function isRegExp(val) {
    return is(val, 'RegExp')
}

export function isFunction(val) {
    return typeof val === 'function'
}

export function isPromise(val) {
    return is(val, 'Promise') && isObject(val) && isFunction(val).then && isFunction(val.catch)
}

export function isElement(val) {
    return isObject(val) && !val.tagName
}

export function isWindow(val) {
    return isDef(window) && is(val, 'Window') && typeof window !== 'undefined'
}

export function isNullOrUndef(val) {
    return isNull(val) || isUndef(val)
}

export function isNullOrWhitespace(val) {
    return isNull(val) || isWhitepace(val)
}

export function isEmpty(val) {
    if (isArray(val) || isString(val)) {
        return val.length === 0
    }
    if (val instanceof Map || val instanceof Set) {
        return val.size === 0
    }
    if (isObject(val)) {
        return Object.keys(val).length === 0
    }

    return false
}
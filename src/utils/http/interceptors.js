import { isNullOrUndef } from "@/utils/is";
import { toLogin } from "../auth";
import { getToken } from "../token";
import { isWithoutToken } from "./helpers";


export function reqResolve(config) {
    if (config.method === 'get') {
        config.params = { ...config.params, t: new Date().getTime() }
    }

    if (isWithoutToken(config)) {
        return config
    }

    const token = getToken()
    if (!token) {
        toLogin()
        return Promise.reject({ code: -1, msg: '未登录' })
    }

    config.headers.Authorization = config.headers.Authorization || 'Bearer' + token

    return config
}

export function reqReject(e) {
    return Promise.reject(e)
}

export function respResolve(resp) {
    return resp?.data
}

export function respReject(e) {
    let { code, msg } = e.response?.data || {}
    if (isNullOrUndef(code)) {
        code = -1
        msg = '网络异常'
    } else {
        switch (code) {
            case 401:
                msg = msg || '登录已过期，请重新登录';
                break;
            case 403:
                msg = msg || '您没有该权限，请联系管理员'
                break;
            case 404:
                msg = msg || '资源不存在'
                break;
            default:
                msg = msg || '未知错误'
                break
        }
    }

    return Promise.resolve({ code, msg, e })
}
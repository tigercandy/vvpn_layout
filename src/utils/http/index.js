import axios from 'axios';
import { reqResolve, reqReject, respResolve, respReject } from './interceptors';

export function createAxios(options = {}) {
    const defaultOptions = {
        baseURL: import.meta.env.VITE_APP_BASE_API,
        timeout: 1000,
    }
    const service = axios.create({
        ...defaultOptions,
        ...options,
    })
    service.interceptors.request.use(reqResolve, reqReject)
    service.interceptors.response.use(respResolve, respReject)

    return service
}

export const defAxios = createAxios()

export const testAxios = createAxios({
    baseURL: import.meta.env.VITE_APP_BASE_API_TEST
})
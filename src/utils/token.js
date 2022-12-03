import { lStorage } from "./cache";

const TOKEN_KEY = 'access_token';
const DURATION = 1 * 60 * 60;

export function getToken() {
    return lStorage.get(TOKEN_KEY)
}

export function setToken(token) {
    return lStorage.set(TOKEN_KEY, token, DURATION)
}

export function removeToken() {
    return lStorage.remove(TOKEN_KEY)
}
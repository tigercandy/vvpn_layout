export function resolveToken(auth) {
    const reqTokenSplit = auth.split(' ')
    if (reqTokenSplit.length === 2) {
        return reqTokenSplit[1]
    }
    return ''
}
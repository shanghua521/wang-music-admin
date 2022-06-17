import Cookie from 'js-cookie'

const TokenKey = 'shanghua-token'

export const getToken = () => {
    return Cookie.get(TokenKey)
}

export const setToken = token => {
    return Cookie.set(TokenKey, token)
}

export const removeToken = token => {
    return Cookie.remove(token)
}

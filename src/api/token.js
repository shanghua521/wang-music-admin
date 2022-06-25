import { post } from './request.js'

export const createTokens = (username, password) => {
    return post('/tokens', { username, password })
}

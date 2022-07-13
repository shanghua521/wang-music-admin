import { get, post } from './request.js'

export const search = paging => {
    return get('/users/', { params: paging })
}

export const me = () => {
    return get('/users/me')
}

export const create = user => {
    return post('/users', user)
}

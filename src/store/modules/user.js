import {
    getCurrentUser,
    getToken,
    removeCurrentUser,
    removeToken,
    setCurrentUser,
    setToken
} from '../../utils/auth.js'
import { createTokens } from '../../api/token.js'
import { me } from '../../api/user.js'

const state = () => ({
    token: getToken(),
    currentUser: getCurrentUser()
})

const getters = {
    nicknameFirstWord: state => {
        return state.currentUser ? state.currentUser?.nickname.at(0) : ''
    }
}

const actions = {
    login({ commit }, { username, password }) {
        return new Promise((resolve, reject) => {
            createTokens(username.trim(), password)
                .then(token => {
                    commit('SET_TOKEN', token)
                    setToken(token)
                    resolve()
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    logout({ commit }) {
        commit('SET_TOKEN', '')
        setToken('')
        removeToken()
        removeCurrentUser()
    },
    fetchCurrentUser({ commit }) {
        return new Promise((resolve, reject) => {
            me()
                .then(currentUser => {
                    commit('SET_CURRENT_USER', currentUser)
                    setCurrentUser(currentUser)
                    resolve(currentUser)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_CURRENT_USER: (state, currentUser) => {
        state.currentUser = currentUser
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}

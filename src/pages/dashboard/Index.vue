<template>
    <div>欢迎光临 {{ nickname }}</div>
    <q-btn @click="logout">退出</q-btn>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'Index',
    setup() {
        const store = useStore()
        return {
            nickname: computed(() =>
                store.state.currentUser ? store.state.currentUser.nickname : ''
            ),
            logout: () => store.dispatch('logout').then(() => window.location.reload())
        }
    }
}
</script>

<style scoped></style>

<template>
    <div class="login-page form">
        <q-card class="login-from-content">
            <div class="title">殇花音乐后台</div>
            <q-form class="q-gutter-md" @submit="onSubmit(username, password)">
                <q-input
                    v-model="username"
                    filled
                    label="用户名"
                    lazy-rules
                    :rules="[val => (val && val.length > 0) || '请输入用户名']"
                    model-value=""
                />

                <q-input
                    v-model="password"
                    filled
                    label="密码 "
                    lazy-rules
                    type="password"
                    model-value=""
                    autocomplete
                    :rules="[val => (val && val.length > 0) || '请输入密码']"
                />

                <q-toggle v-model="accept" label="记住i我" />

                <div>
                    <q-btn class="full-width" label="登录" type="submit" color="primary" />
                </div>
            </q-form>
        </q-card>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
    name: 'Login',
    setup() {
        const username = ref('')
        const password = ref('')
        const accept = ref(false)
        const store = useStore()
        const router = useRouter()
        const route = useRoute()

        const onSubmit = (username, password) => {
            store.dispatch('login', { username, password }).then(() => {
                store.dispatch('fetchCurrentUser').then(() => {
                    router.push({ path: route.query.redirect || '/' })
                })
            })
        }

        return {
            username,
            password,
            accept,
            onSubmit
        }
    }
}
</script>

<style scoped lang="less">
.login-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-from-content {
        width: 400px;
        padding: 10px;

        .title {
            font-size: 40px;
            text-align: center;
            margin-bottom: 50px;
        }
    }

    .form {
        width: 400px;
    }
}
</style>

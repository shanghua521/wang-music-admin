<template>
    <div class="login-page form">
        <q-card class="login-from-content">
            <div class="title">殇花音乐后台</div>
            <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
                <q-input
                    v-model="name"
                    filled
                    label="用户名"
                    lazy-rules
                    :rules="[val => (val && val.length > 0) || '请输入用户名']"
                    model-value="name"
                />

                <q-input
                    v-model="password"
                    filled
                    label="密码 "
                    lazy-rules
                    type="password"
                    model-value=""
                    :rules="[val => (val && val.length > 0) || '请输入密码']"
                />

                <q-toggle v-model="accept" label="记住我" />

                <div>
                    <q-btn class="full-width" label="登录" type="submit" color="primary" />
                </div>
            </q-form>
        </q-card>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
    name: 'Login',
    setup() {
        const $q = useQuasar()

        const name = ref('')
        const password = ref('')
        const accept = ref(false)

        return {
            name,
            password,
            accept,

            onSubmit() {
                if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                } else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                }
            },

            onReset() {
                name.value = ''
                password.value = ''
                accept.value = false
            }
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

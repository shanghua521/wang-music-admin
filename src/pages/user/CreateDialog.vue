<template>
    <q-dialog v-model="show" persistent>
        <q-card style="min-width: 350px; padding: 20px 10px">
            <q-card-section>
                <div class="text-h6">添加用户</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
                <q-input
                    v-model="username"
                    label="用户名"
                    dense
                    autofocus
                    @keyup.enter="show = false"
                />
            </q-card-section>
            <q-card-section class="q-pt-none">
                <q-input
                    v-model="password"
                    label="用户名"
                    type="password"
                    dense
                    autofocus
                    @keyup.enter="show = false"
                />
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
                <q-btn color="primary" label="确认" @click="createUser(username, password)" />
                <q-btn v-close-popup flat label="取消" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { create } from '../../api/user.js'
import { Notify } from 'quasar'

const show = ref(true)
const username = ref('')
const password = ref('')

const emit = defineEmits(['create-success'])

const createUser = (username, password) => {
    create({ username, password }).then(() => {
        show.value = false
        Notify.create({
            type: 'positive',
            message: '用户创建成功！',
            position: 'top'
        })
        emit('create-success')
    })
}
</script>

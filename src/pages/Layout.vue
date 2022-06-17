<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <!--                    <q-avatar>-->
                    <!--                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
                    <!--                    </q-avatar>-->
                    原力音乐
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

// export default {
//     setup () {
//
//         return {
//             leftDrawerOpen,
//
//         }
//     }
// }
</script>

<style scoped></style>

<template>
    <h1 class="strokeme">Home of the Wolverines</h1>
    <div
        class="mt-8 border-double border-4 border-yellow-200 rounded-md container mx-auto w-auto h-screen bg-green-600"
    >
        <section class="max-w-2xl mx-auto rounded bg-neutral bg-coolGray-900 text-coolGray-100">
            <div class="container flex items-center justify-center text-center">
                <form
                    @submit.prevent
                    class="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-coolGray-100"
                >
                    <label for="username" class="self-start text-xs font-semibold">Email</label>
                    <input
                        id="username"
                        type="text"
                        class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
                    />
                    <label for="password" class="self-start mt-3 text-xs font-semibold">Password</label>
                    <input
                        id="password"
                        type="password"
                        class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
                    />
                    <button @click="login" class="btn btn-primary mt-4">Login</button>
                    <button class="btn btn-primary mt-4">SignUp</button>
                </form>
            </div>
        </section>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../helpers/useAuth'
const router = useRouter()

const login = () => {
    isAuthenticated.value = true
    router.push('/')
}
</script>
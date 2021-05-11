<template>
  <div class="navbar mb-2 p-4 bg-green-700">
    <div class="flex-none px-2 mx-2">
      <span class="text-2xl font-bold text-yellow-300">
        <noto:badger />
      </span>

      <span class="text-lg font-bold text-yellow-300 tracking-wider">&nbsp;Liberty Elementary</span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch flex">
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">Home</router-link>
        <router-link to="/Computers" class="btn btn-ghost btn-sm rounded-btn">Computers</router-link>
        <router-link to="/Monitors" class="btn btn-ghost btn-sm rounded-btn">Monitors</router-link>
        <router-link to="/Keyboard-Mouse" class="btn btn-ghost btn-sm rounded-btn">Keyboard/Mouse</router-link>
      </div>
    </div>

    <div class="flex-none">
      <router-link
        v-if="!isAuthenticated"
        to="/Login"
        class="btn btn-ghost btn-sm rounded-btn"
      >Login</router-link>

      <div v-else>
        <router-link to="/Inventory" class="btn btn-sucess btn-ghost btn-sm rounded-btn">Inventory</router-link>
        <button class="btn btn-error btn-sm rounded-btn" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { isAuthenticated, signOut } from '../helpers/useAuth'
const router = useRouter()
const logout = async () => {
  await signOut()
  router.push('/')
}
</script>


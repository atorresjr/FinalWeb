<template>
  <div class="navbar mb-2 shadow-lg bg-success text-neutral-content">
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold"> Liberty Elementary </span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch flex">
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
          Home
        </router-link>
        <router-link to="/Computers" class="btn btn-ghost btn-sm rounded-btn">
          Computers
        </router-link>
        <router-link to="/Monitors" class="btn btn-ghost btn-sm rounded-btn">
          Monitors
        </router-link>
        <router-link to="/Keyboard-Mouse" class="btn btn-ghost btn-sm rounded-btn">
          Keyboard/Mouse
        </router-link>
        <router-link to="/Inventory" class="btn btn-ghost btn-sm rounded-btn">
          Inventory
        </router-link>
      </div>
    </div>

    <div class="flex-none">
      <router-link to="/SignIn" class="btn btn-ghost btn-sm rounded-btn"
        >Sign In</router-link
      >
    </div>
  </div>
</template>
0

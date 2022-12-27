<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
  </nav> -->
  <div class="bg-[#2F3136] h-screen">
    <NavigationVue />
    <router-view />
  </div>
</template>

<script setup>
import NavigationVue from './components/Navigation.vue';
</script>

<script setup>
import Navbar from "./components/Navbar.vue";
import SideNav from "./components/SideNav.vue";
</script>

<template>
  <Navbar />
  <SideNav>
    <router-view />
  </SideNav>
</template>
<script setup>
import { ref } from 'vue';

const searchInput = ref({
    value: ''
})
</script>

<template>
    <nav>
        <ul>
            <li><router-link to="/">Dashboard</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/data-structures">Data Structures</router-link></li>
            <input type="search" v-model="searchInput.value">
            {{ searchInput.value }}
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background-color: #333;
    color: #fff;
    padding: 10px;
}

ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    cursor: pointer;
}

a {
    color: #fff;
    text-decoration: none;
}

a:visited {
    color: #fff;
}
</style>
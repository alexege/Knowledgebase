<script setup>

import { ref } from 'vue';

const cards = ref([
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
    { id: 7, title: 'Card 7' },
    { id: 8, title: 'Card 8' },
    { id: 9, title: 'Card 9' },
])

</script>
<template>
    <div class="dashboard">
        <h1>Dashboard</h1>

        <div class="cards">
            <div class="card" v-for="card in cards" :key="card.id">{{ card.title }}</div>
        </div>

    </div>
</template>
<style scoped>
.dashboard {
    color: white;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    min-height: 100vh;
}

.cards {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 5px;
}

.card {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    /* min-width: 200px; */
    background-color: #242424;
    border: 1px solid black;
}
</style>
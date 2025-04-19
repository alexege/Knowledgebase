<script setup>

import { ref } from 'vue';

const linearStructures = ref([
    { id: 1, title: 'Array / List' },
    { id: 2, title: 'Linked List' },
    { id: 3, title: 'Stack' },
    { id: 4, title: 'Queue' },
])

const nonlinearStructures = ref([
    { id: 1, title: 'Tree' },
    { id: 2, title: 'Graph' },
])

const hashStructures = ref([
    { id: 1, title: 'Hash Table' },
    { id: 2, title: 'Hash Map' },
    { id: 3, title: 'Dictionary' },
])

const specializedStructures = ref([
    { id: 1, title: 'Heap' },
    { id: 2, title: 'Trie' },
    { id: 3, title: 'Set' },
])

</script>
<template>
    <div class="dashboard">
        <h1>Data Structures</h1>

        <h3>Linear Data Structures</h3>

        <div class="cards">
            <div class="card" v-for="card in linearStructures" :key="card.id">{{ card.title }}</div>
        </div>

        <h3>Non-Linear Data Structures</h3>

        <div class="cards">
            <div class="card" v-for="card in nonlinearStructures" :key="card.id">{{ card.title }}</div>
        </div>

        <h3>Hash Based Data Structures</h3>

        <div class="cards">
            <div class="card" v-for="card in hashStructures" :key="card.id">{{ card.title }}</div>
        </div>

        <h3>Specialized Data Structures</h3>

        <div class="cards">
            <div class="card" v-for="card in specializedStructures" :key="card.id">{{ card.title }}</div>
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
    cursor: pointer;
    border-radius: 2px;
}

.card:hover {
    background: white;
    color: #242424;
}
</style>
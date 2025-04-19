<template>
    <div>
        <h1>Home</h1>
        <button @click="counter.increment">Count is: {{ counter.count }}</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

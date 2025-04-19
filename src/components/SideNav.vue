<script setup>
import { ref } from 'vue'

const isCollapsed = ref(false)

const toggleNav = () => {
    isCollapsed.value = !isCollapsed.value
}

const menuItems = [
    { label: 'Home' },
    { label: 'Profile', children: ['Edit Profile', 'Privacy', 'Avatar'] },
    { label: 'Settings', children: ['General', 'Security', 'Notifications'] },
    { label: 'Logout' },
]

const openSubmenus = ref([])

const toggleSubmenu = (index) => {
    if (openSubmenus.value.includes(index)) {
        openSubmenus.value = openSubmenus.value.filter((i) => i !== index)
    } else {
        openSubmenus.value.push(index)
    }
}

</script>
<template>
    <div class="layout">
        <!-- Side Nav -->
        <div :class="['sidenav', { collapsed: isCollapsed }]">
            <div class="sidenav-header">
                <span v-if="!isCollapsed" class="title">Menu</span>
                <button @click="toggleNav" class="toggle-btn">
                    <span v-if="isCollapsed">▶</span>
                    <span v-else>◀</span>
                </button>
            </div>

            <ul class="menu">
                <li v-for="(item, index) in menuItems" :key="item.label" class="menu-item">
                    <div class="menu-main" @click="toggleSubmenu(index)">
                        <span v-if="!isCollapsed">{{ item.label }}</span>
                        <span v-else>{{ item.label.charAt(0) }}</span>
                        <span v-if="item.children && !isCollapsed" class="arrow">
                            {{ openSubmenus.includes(index) ? '▲' : '▼' }}
                        </span>
                    </div>

                    <!-- Subcategories -->
                    <ul v-if="item.children && openSubmenus.includes(index)" class="submenu">
                        <li v-for="sub in item.children" :key="sub" class="submenu-item">
                            {{ sub }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
}

.sidenav {
    width: 250px;
    background-color: #2c3e50;
    color: white;
    transition: width 0.3s ease-in-out;
    overflow: hidden;
}

.sidenav.collapsed {
    width: 60px;
}

.sidenav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.title {
    font-size: 18px;
    font-weight: bold;
}

.toggle-btn {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-item {
    padding: 16px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
}

.menu-item:hover {
    background-color: #34495e;
}

.main-content {
    flex: 1;
    background-color: #f5f5f5;
}
</style>
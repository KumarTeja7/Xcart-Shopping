<template>
  <div class="layout-wrapper">
    
    <!-- Top Menu Bar -->
    <Menubar class="top-bar" :model="items">
      <template #start>
      </template>
      <template #end>
        <button class="p-button p-button-outlined p-button-primary" @click="login">Login</button>
      </template>
    </Menubar>

    <div class="layout-content">
      <!-- Sidebar -->
      <p-panelMenu :model="sidebarItems" class="sidebar"></p-panelMenu>

      <!-- Main Content -->
      <main class="main-content">
        <h1>Welcome to MyApp!</h1>
        <p>This is the best home screen layout with a top menu bar and sidebar.</p>
      </main>
    </div>
  </div>
</template>

<script setup>
import {ref } from 'vue';

import 'primeicons/primeicons.css';
import Menubar from 'primevue/menubar';
import PanelMenu from 'primevue/panelmenu';

const topMenuItems = [{ label: 'Home', icon: 'pi pi-home' }];

const sidebarItems = [
  { label: 'Dashboard', icon: 'pi pi-chart-line' },
  { label: 'Profile', icon: 'pi pi-user' },
  { label: 'Settings', icon: 'pi pi-cog' },
  { label: 'Logout', icon: 'pi pi-sign-out' },
];
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);

const login = () => {
  alert('Login clicked!');
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top-bar {
  background-color: #004d99;
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.layout-content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #ccc;
  padding: 1rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f9fafb;
}

h1 {
  font-size: 2rem;
  color: #222;
}

p {
  color: #444;
}

.p-button {
  background-color: #007ad9;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.p-button:hover {
  background-color: #005fa3;
}
</style>

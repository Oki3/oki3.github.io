<template>
  <footer>
    <p>&copy; {{ currentYear }} Weicheng Hu. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script> 
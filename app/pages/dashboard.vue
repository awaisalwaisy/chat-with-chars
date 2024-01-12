<script setup lang="ts">
const $auth = useAuth();
if (!$auth.loggedIn) {
  navigateTo("/sign-in");
}
</script>

<template>
  <div>Dashboard</div>
</template>

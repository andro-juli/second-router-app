<template>
  <div>
      <div class="nav">
          <h1>Welcome to the Dashboard</h1>
          <router-link :to="{ name: 'dashboard-user'}">Go to dashboard</router-link>
      </div>
      <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
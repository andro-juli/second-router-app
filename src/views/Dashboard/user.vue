<template>
  <div>
      <div>
          <p>welcome to the user dashboard. i am in the user.vue file</p>
          <router-link :to="{ name:'dashboard-single-user', params:{ id: 'salma'}}">salma</router-link>
          <router-link :to="{ name:'dashboard-single-user', params:{ id: 'emmanuel'}}">emmanuel</router-link>
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
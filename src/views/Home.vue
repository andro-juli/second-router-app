<template>
  <div class="home">
  
    <div class="body-section">
          <h1>These are my users</h1>
          <h4>Users are:</h4>
        <div class="users">
            <router-link v-for="(user, index) in allUsers"    :key="index" :to="{ name: 'Post', params: { id: `${user.name}`}}">
            {{ user.name}}
            </router-link> 
        </div>
      </div>
    
  </div>
</template>

<script>


export default {
  name: "home",
  data: () => ({
    allUsers: [
      {"id": 1, 'name': 'Micheal'},
      {"id": 2, 'name': 'salma'},
      {"id": 3, 'name': 'falila'},
      {"id": 4, 'name': 'emmanuel'},
      {"id": 5, 'name': 'Albert'},
      {"id": 6, 'name': 'Frank'},

    ]
  })
};
</script>

<style scoped>
  .body-section{
  padding: 50px;
}
.home h1{
  font-size: 24px;
  color: brown;
}

.home h4{
  margin-top: 20px;
  font-size: 18px;
  color: brown;
}

a{
 text-decoration: none;
 margin-top: 5px;
 color: chocolate;
}
.users{
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <v-app>
    <the-drawer ></the-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheDrawer from "./components/TheDrawer.vue";
export default {
  name: 'App',
  components:{
    TheDrawer
  },
  data: () => ({
    //
  }),
};
</script>

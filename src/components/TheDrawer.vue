<template>
    <div>    
    <v-navigation-drawer width="175" v-model="drawer" right app>   
        <v-container class="grey lighten-5" id="main-container" >
            <v-row align-content="center">
                <v-col cols="3">
                    <v-img
                    max-width="50"
                    max-height="50"
                    src = "../assets/logo.png"
                    />
                </v-col>
                <v-col align-self="center" cols="3"><h2 style="bold center" >بروکس</h2>
                    
                </v-col>
                <v-col cols="12">
                <v-divider/>
                </v-col>
                <v-col cols="12">
                    <router-link  style="text-decoration: none;" to='/main'><h3>تعریف سند مادر</h3></router-link>             
                </v-col>
                <v-col cols="12">
                    <router-link  style="text-decoration: none;" to='/equivalent'><h3>تعریف سند معادل</h3></router-link>             
                </v-col>
                <v-col cols="12">
                    <router-link  style="text-decoration: none;" to='/mapping'><h3>معادل سازی سند</h3></router-link>            
                </v-col>
                <v-col cols="12">
                    <router-link  style="text-decoration: none;" to='/requestdocs'><h3>ایجاد درخواست</h3></router-link>             
                </v-col>
                <v-col cols="12">
                    <router-link  style="text-decoration: none;" to='/requestdashboard'><h3>داشبورد درخواست ها</h3></router-link>             
                </v-col>
            </v-row>
        </v-container>
    </v-navigation-drawer> 
    <v-app-bar color="deep-purple accent-4"
          dense
          dark
          app>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    
          <v-toolbar-title>منو</v-toolbar-title>
          <v-spacer></v-spacer>
    </v-app-bar>
    </div>
    </template>
    
    <style scoped>
     .header{
        background: #000;
        
     }
     #main-container{
        height: 100%;
    
     }
    </style>
    
    <script>
    export default {
      data: () => ({
        drawer: null,
      }),
      methods:{

      },
      computed:{

    
      },
    };
    </script>
    
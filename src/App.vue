<template>
<div>
 <!-- <div v-if="isLoading">
   <LoadingScreen :isLoading="isLoading"/>
    </div>
    <div v-else> -->
  <AppBarVue/>
</div>
</template>

<script>
// import axios from 'axios';
import AppBarVue from './components/AppBar.vue'
// import LoadingScreen from './components/LoadingScreen.vue'

  export default {
     name: 'App',
     components: {
       AppBarVue,
      //  LoadingScreen
     },
      data() {
         return {
        // isLoading: true,
        // user: null,
         }

      },
        // mounted() {
        //     setTimeout(() => {
        //         this.isLoading = false
        //     }, 3000)
        // },
        methods: {
//           async created() {
// const response = await axios.get('user');
// this.user = response.data;
//   }
        }
  }
</script>

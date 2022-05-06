<template>
  <v-app id="inspire">
   <v-navigation-drawer v-if="!user" style="background-color: #fff; color: #000;" v-model="drawer" app>
      <v-list-item style="background-color: #FFE135;">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
           <img src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138471/Kallery/pror2_val2de.png" style="border-radius: 100%; width: 20%; border: 2px #fff solid;"/>
          </v-list-item-title>
          <v-list-item-subtitle>
            Omeny Robert
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        textColor="black"
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div style="display: flex; justify-content: space-around;">
           <v-icon color="black" class="iconss" >mdi-facebook</v-icon>
              <v-icon color="black" class="iconss">mdi-instagram</v-icon>
                 <v-icon color="black" class="iconss">mdi-twitter</v-icon>
                 <v-icon color="black" class="iconss">mdi-linkedin</v-icon>
      </div>

      <div style="background-color: #FFE135; padding: 20px; height: 200px; margin: 20px; border-radius: 10px;">
        <center>
<h3 style="background-color: #000; text-align: center; color: #fff; padding: 10px; margin: 10px; border-radius: 10px;">Upgrade</h3>
         <img src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138471/Kallery/pror2_val2de.png" style="border-radius: 100%; width: 80%; border: 2px #fff solid;"/>
        </center>
      </div>
    </v-navigation-drawer>
<br/>
   <v-app-bar
      app
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      style="margin-top: 20px; margin-left: -10px; padding-right:20px; background: none;"
    >
      <v-app-bar-nav-icon style="background-color: #FFE135; color: #000; border-radius: 10px; margin: 5px; padding: 5px;" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="display: flex; margin-right: 20px; margin-top: 10px;">
        </v-toolbar-title>
      <div class="searchbar">
        <v-icon size="30" style="color: #000; font-size: 30px;">mdi-magnify</v-icon>
        <input type="text" style="background-color: #fffade; border-radius: 50px; border: none; margin-left: 10px;" placeholder="Search places..."/>
        </div>
      <v-btn icon class="icon-left">
        <v-icon size="30" style="color: #000;">mdi-map-marker-radius</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'AppBar',
    data: () => ({ drawer: null,
     items: [
          { title: 'Home', icon: 'mdi-home', to: '/' },
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
          { title: 'About Us', icon: 'mdi-account', to: '/profile' },
           { title: 'Contact Us', icon: 'mdi-phone', to: '/savings' },
          { title: 'Private Policy', icon: 'mdi-briefcase-minus', to: '/withdraws' },
          { title: 'Terms & Conditions', icon: 'mdi-pencil', to: '/loans' },
          { title: 'FAQs', icon: 'mdi-layers-minus', to: '/loan-installments' },
          // { title: 'Refferals', icon: 'mdi-account-heart', to: '/referrals' },
          //  { title: 'Gurrantors', icon: 'mdi-account-eye', to: '/alliencies-list' },
          //   { title: 'Add Alliences', icon: 'mdi-account-eye', to: '/add-alliencies' },
        ],
        // props: {
        //   user: Array
        // }
    }),
  }
</script>

<style scoped>
.icon-left{
  background-color: #FFE135;
  border-radius: 10px; 
  width: 80px; 
  height: 80px;
  padding: 5px;
  margin-left: 80px;
}
.iconss{
  background-color: #FFE135;
  color: #000;
  border-radius: 100%;
  padding: 5px;
}
.searchbar{
  display: flex;
  color: #000;
  border-radius: 50px;
  background-color: #fffade;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: -10vw;
  width: 180px;
}
</style>
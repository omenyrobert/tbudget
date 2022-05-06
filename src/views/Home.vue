<template>
  <div style="margin-top: -40px; background-color: #f9f9f9;" class="Home">
    <v-main>
      <exchange-rate/>
      <br/>
      <v-carousel
    cycle
    height="300"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="carousel-imgg"
      reverse-transition="slide-transition"
      transition="slide-transition"
    ></v-carousel-item>
    <div class="slider-cap">
<h3 style="color: #000;">Find Places Manage Your Budget while Traveling</h3>
    </div>
    
  </v-carousel>
  <slick-carousel/>
  <br/>
  <div class="boxx">
    <div class="carrd">
     <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138544/Kallery/john-arano-h4i9G-de7Po-unsplash_zsxhnn.jpg"/>
     <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>
    <div class="carrd">
       <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138476/Kallery/istockphoto-1341029317-170667a_e7h7og.jpg"/>
  <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>

  </div>
  <br/>
   <div class="boxx">
    <div class="carrd">
     <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138478/Kallery/istockphoto-1295387240-170667a_nps74u.jpg"/>
     <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>
    <div class="carrd">
       <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138476/Kallery/istockphoto-1312283557-170667a_n3u38o.jpg"/>
  <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>

  </div>
<br/>
   <div class="boxx">
    <div class="carrd">
     <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138474/Kallery/istockphoto-1306005048-170667a_d0ijzs.jpg"/>
     <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>
    <div class="carrd">
       <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138473/Kallery/istockphoto-1319270438-170667a_fesbi8.jpg"/>
  <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>

  </div>
<br/>
   <div class="boxx">
    <div class="carrd">
     <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138470/Kallery/istockphoto-1295248329-170667a_z2f8qy.jpg"/>
     <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>
    <div class="carrd">
       <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1650138470/Kallery/istockphoto-1301086375-170667a_k5tvn4.jpg"/>
  <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>

  </div>
  <br/>
   <div class="boxx">
    <div class="carrd">
     <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1644517181/travelbudget/p1_djsquq.png"/>
     <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>
    <div class="carrd">
       <img class="home-pic" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1644517181/travelbudget/p1_djsquq.png"/>
  <div class="carrd-b">
       <div style="display: flex; justify-content: space-between; margin-right: 5px;">
        <p> <v-icon class="incon-h">mdi-phone</v-icon> +256 79895897</p>
       <p style="margin-left: 1px;"> <v-icon class="incon-h">mdi-web</v-icon> www.suitshotel.com</p>
       </div>
       <div class="boxx">
 <p> <v-icon class="incon-h" >mdi-map-marker</v-icon> Kampala Uganda</p>
       <p>Bukoto P o Box 47783</p>
       </div>
     </div>
    </div>

  </div>
  <BottomNav/>
  <br/><br/><br/><br/><br/><br/><br/><br/>  <br/><br/><br/><br/><br/><br/><br/><br/>  <br/><br/><br/><br/>  <br/><br/><br/><br/>
    </v-main>
  </div>
</template>

<script>
import SlickCarousel from '../components/SlickCarousel.vue';
import ExchangeRate from '../components/ExchangeRate.vue';
import BottomNav from './BottomNav.vue';
export default {
  name: 'Home',
  components: {
    SlickCarousel,
    ExchangeRate,
    BottomNav,
  },
  data () {
      return {
         items: [
          {
            src: 'https://res.cloudinary.com/dtlkiv19d/image/upload/v1644517181/travelbudget/p1_djsquq.png',
          },
          {
            src: 'https://res.cloudinary.com/dtlkiv19d/image/upload/v1644517183/travelbudget/p6_sbrzcz.png',
          },
          {
            src: 'https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700527/travelbudget/p_2_rnygru.jpg',
          },
          {
            src: "https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700514/travelbudget/p_10_kv4aoq.jpg"
          },
            {
            src: 'https://res.cloudinary.com/dtlkiv19d/image/upload/v1644517181/travelbudget/p1_djsquq.png',
          }
        ],
      }
    },
}
</script>

<style scoped>
.slider-cap{
  position: absolute;
  margin-top: -200px;
  background-color: #ffe135b7;
  margin-left: 50px;
  margin-right: 50px;
  padding: 20px;

}
.carousel-imgg{
  height: 45vh;
}
.boxx{
display: flex; justify-content: space-between;
}
.incon-h{
  background-color: #ffe135b7;
  color: #000;
  padding: 3px;
  border-radius: 100%;
  font-size: 8px;
}
.carrd-b{
  font-size: 8px;
}
.home-pic{
  width: 98%;
  border-radius: 10px;
  margin-left: -5px;
}
.carrd{
  width: 50%;
  padding: 1.5%;
  margin-left: 10px;
 box-shadow: -3px 3px 0px 0px #f5f5f5; 
 background-color: #fff;
 border-radius: 15px;

}
</style>

<template>
  <div style="margin: 20px;">
    <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
      <div class="slick-div">
   <img class="imag" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700428/travelbudget/p_3_reuxqf.jpg"/>
      <div class="slick-cap">
        Lakes
      </div>
      </div>

      <div class="slick-div">
          <img class="imag" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700439/travelbudget/p_9_dxhhbb.jpg"/>
      <div class="slick-cap">
        Culture
      </div>
      </div>

      <div class="slick-div">
          <img class="imag" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700452/travelbudget/p_8_yff8tr.jpg"/>
      <div class="slick-cap">
        Nature
      </div>
      </div>


      <div class="slick-div">
          <img class="imag" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700458/travelbudget/p_6_pnchef.jpg"/>
      <div class="slick-cap">
        Senaris
      </div>
        </div>

        <div class="slick-div">
   <img class="imag" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700454/travelbudget/p_7_hymjhy.jpg"/>
      <div class="slick-cap">
        lakes
      </div>
      </div>

      <div class="slick-div">
          <img class="imag" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700453/travelbudget/p_1_s02mik.jpg"/>
      <div class="slick-cap">
        hotels
      </div>
      </div>

      <div class="slick-div">
          <img class="imag" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700481/travelbudget/p_11_tnxlun.jpg"/>
      <div class="slick-cap">
        Restaurants
      </div>
      </div>

      <div class="slick-div">
          <img class="imag" src="https://res.cloudinary.com/dtlkiv19d/image/upload/v1649700458/travelbudget/p_6_pnchef.jpg"/>
      <div class="slick-cap">
        Parks
      </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'SlickCarousel',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
           "arrows": true,
           "autoplay": true,
 "centerMode": true,
  "centerPadding": "20px",
  "focusOnSelect": true,
  "infinite": true,
  "slidesToShow": 3,
  "speed": 500
      },
    };
   }
  }
</script> 
<style scoped>
.slick-div{
  padding: 5px;
  margin: 5px;
  height: 100px;
}
.imag{
   border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 70px;
}
.slick-cap{
  padding: 5px;
  color: black;
  font-weight: bold;
  font-size: smaller;
  text-align: center;
  margin-bottom: 5px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #FFE135;
  margin-bottom: 10px;
;
}
</style>
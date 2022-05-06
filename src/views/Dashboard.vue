<template>
  <div style="background-color: #f9f9f9;">
    <v-main>
      <v-container style="margin-top: -50px;">
        <!-- <h4 v-if="user"> hi, {{user.fullname}} {{user.email}}</h4> -->
        <div class="backg">
<h2 style="margin-bottom: 10px; margin-left: 50px;">My Budgets</h2>
<div style="display: flex; justify-content: space-between;">
  <div id="chart" style="margin-left: -80px;">
        <apexchart type="donut"  :options="chartOptions" :series="series"></apexchart>
      </div>
  <div style="background-color: #fae155; color: #000; height: 90px; border-radius: 10px; padding: 10px;">
    <p>UGX: 2,560,000</p>
    <b>UDS: 2,300</b>
  </div>
</div>
        </div>
        <div class="balance">
          <div>
            <h3>Total</h3>
              <p>UGX: 2,560,000</p>
    <b style="margin-top: -5px;">$2,300</b>
            </div>
            <div style="background-color: #000; height: 100px; width: 2px;"></div>
<div>
            <h3>Balance</h3>
              <p>UGX: 560,000</p>
    <b style="margin-top: -5px;">$1,300</b>
            </div>
        </div>





       
<div class="balance2">
 <h3 style="margin-left: 20px;">Budgets</h3>
         <v-row style="margin: 1px; background-color: #f9f9f9;" class="text-center">
          <v-col style="display: flex; flex-direction: column;"  class="cardd">
              <h5>Embrass Uganda</h5>
          <div class="budgetts" >
             <div style="width: 70%; text-align: left;">
           <h6>UGX: 1,570,000</h6>
           <h6>$370</h6>
           <div>
           <h6>UGX: 470,000</h6>
           <h6>$170</h6>
          </div>
          </div>
            <div>
         <v-icon color="rgb(250, 164, 4)">mdi-wallet</v-icon>
         <h4>0</h4>
          </div>      
          </div>
          </v-col>
     <v-col style="display: flex; flex-direction: column;"  class="cardd">
              <h5>School</h5>
          <div  class="budgetts" >
             <div style="width: 70%; text-align: left;">
           <h6>UGX: 1,570,000</h6>
           <h6>$370</h6>
           <div>
           <h6>UGX: 470,000</h6>
           <h6>$170</h6>
          </div>
          </div>
            <div>
         <v-icon color="rgb(250, 164, 4)">mdi-wallet</v-icon>
         <h4>0</h4>
          </div>      
          </div>
          </v-col>

        </v-row>
        <br/>
         <v-row style="margin: 1px;" class="text-center">
          <v-col style="display: flex; flex-direction: column;"  class="cardd">
              <h5>Kids Clothes</h5>
          <div  class="budgetts" >
             <div style="width: 70%; text-align: left;">
           <h6>UGX: 1,570,000</h6>
           <h6>$370</h6>
           <div>
           <h6>UGX: 470,000</h6>
           <h6>$170</h6>
          </div>
          </div>
            <div>
         <v-icon color="rgb(250, 164, 4)">mdi-wallet</v-icon>
         <h4>0</h4>
          </div>      
          </div>
          </v-col>
     <v-col style="display: flex; flex-direction: column;"  class="cardd">
              <h5>School</h5>
          <div  class="budgetts" >
             <div style="width: 70%; text-align: left;">
           <h6>UGX: 1,570,000</h6>
           <h6>$370</h6>
           <div>
           <h6>UGX: 470,000</h6>
           <h6>$170</h6>
          </div>
          </div>
            <div>
         <v-icon color="rgb(250, 164, 4)">mdi-wallet</v-icon>
         <h4>0</h4>
          </div>      
          </div>
          </v-col>

        </v-row>
        <br/>
         <v-row style="margin: 1px;" class="text-center">
          <v-col style="display: flex; flex-direction: column;"  class="cardd">
              <h5>Tours </h5>
          <div  class="budgetts" >
             <div style="width: 70%; text-align: left;">
           <h6>UGX: 1,570,000</h6>
           <h6>$370</h6>
           <div>
           <h6>UGX: 470,000</h6>
           <h6>$170</h6>
          </div>
          </div>
            <div>
         <v-icon color="rgb(250, 164, 4)">mdi-wallet</v-icon>
         <h4>0</h4>
          </div>      
          </div>
          </v-col>
     <v-col style="display: flex; flex-direction: column;"  class="cardd">
              <h5>School</h5>
          <div  class="budgetts" >
             <div style="width: 70%; text-align: left;">
           <h6>UGX: 1,570,000</h6>
           <h6>$370</h6>
           <div>
           <h6>UGX: 470,000</h6>
           <h6>$170</h6>
          </div>
          </div>
            <div>
         <v-icon color="rgb(250, 164, 4)">mdi-wallet</v-icon>
         <h4>0</h4>
          </div>      
          </div>
          </v-col>

        </v-row>
        <br/>
         <v-row style="margin: 1px;" class="text-center">
          <v-col style="display: flex; flex-direction: column;"  class="cardd">
              <h5>Personal Budget</h5>
          <div  class="budgetts" >
             <div style="width: 70%; text-align: left;">
           <h6>UGX: 1,570,000</h6>
           <h6>$370</h6>
           <div>
           <h6>UGX: 470,000</h6>
           <h6>$170</h6>
          </div>
          </div>
            <div>
         <v-icon color="rgb(250, 164, 4)">mdi-wallet</v-icon>
         <h4>0</h4>
          </div>      
          </div>
          </v-col>
     <v-col style="display: flex; flex-direction: column;"  class="cardd">
              <h5>School</h5>
          <div  class="budgetts" >
             <div style="width: 70%; text-align: left;">
           <h6>UGX: 1,570,000</h6>
           <h6>$370</h6>
           <div>
           <h6>UGX: 470,000</h6>
           <h6>$170</h6>
          </div>
          </div>
            <div>
         <v-icon color="rgb(250, 164, 4)">mdi-wallet</v-icon>
         <h4>0</h4>
          </div>      
          </div>
          </v-col>

        </v-row>
</div>
        <br/>
       <BottomNav/>
      </v-container>
    </v-main>
  </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import BottomNav from './BottomNav.vue';


export default {
  name: 'Dashboard',
  components: {
  BottomNav,
   apexchart: VueApexCharts,
  },
  data() {
    return {
       series: [44, 55, 11, 17, 35],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        colors:['#fff', '#f5d314', '#1480f5', '#14f557', '#f51484'],
        labels: ['.', '.', '.', '.', '.'],
         responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 220
                },
                legend: {
                  position: 'left',
                  display: 'none'
                }
              }
            }]
      },
    }
  }
}  
</script>

<style scoped>
.backg{
  background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1649737685/travelbudget/backg_x1wtg0.jpg');
  background-size: cover;
  color: #fff; 
  padding: 20px;
  height: 35vh;
}
.budgetts{
  display: flex; justify-content: space-between;
  border-radius: 10px;
  border: 2px #f5f5f5 solid;
  padding: 10px;
  margin-top: -100px;
}
.balance{
  background-color: #FFE135; 
  display: flex; 
  justify-content: space-between; 
   margin-top: -50px;
  border-top-left-radius: 20px; height: 150px;
   color: #000; 
   border-top-right-radius: 20px;
    padding: 20px;
}
.balance2{
   margin-top: -20px;
  border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   background-color: #f9f9f9;
   padding-top: 20px;
}
.cardd {
background-color: #fff;
 border-radius: 10px; padding: 10px; margin: 5px;
box-shadow: 3px 0px 3px #f5f5f5;
 display: flex; justify-content: space-between;
 height: 150px;
}
.cad {
background-color: #fad48e; border-radius: 10px; padding: 10px; margin: 5px;
display: flex; justify-content: space-between;
}
h4 {
color: rgb(250, 164, 4);
}
.iconn{
  color: rgb(250, 164, 4);
}

</style>

<template>
  <div class="ddiv">
  <div class="card">
    <h3>Make Your Inquiry</h3>
    <br/>
     <form>
       <br/>
 <form>
           <label>Full Name</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-account-circle</v-icon>
        </v-btn>
<input type="text" placeholder="Enter here your full name.." >
      </div>
<br/>
       <label>Email</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-account-circle</v-icon>
        </v-btn>
<input type="email" placeholder="Enter here your email.." >
      </div>
      <br/>
 <label>Massege</label>
      <div style="height: 200px;" class="form-fill">
        <v-btn icon>
        </v-btn>
<textarea type="text" placeholder="Enter here your massage.." >
</textarea>
      </div>
      <br/>
      <button style="background-color: black; width: 300px; color: #fff; border-radius: 10px; padding: 10px;">Send</button>
        </form>
       <br/>
       
     </form>
  </div>
  <br/><br/><br/><br/><br/><br/>
 </div>
</template>

<script>


export default {
  name: 'Savings',
  components: {
   
  },
}
</script>

<style lang="scss">
.ddiv {
 background-color: #f9f9f9;
 padding: 20px;
}
.card{
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
</style>

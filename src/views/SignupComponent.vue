<template>
<div style="margin-top: 0px; padding: 40px;">
<h2 style="text-align: center;">Sign up</h2>
<p style="text-align: center;" >SignUp Now To Get Your Self A Loan</p>

      <form @submit.prevent="handleSubmit">


      <label>Full Name</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-account-circle</v-icon>
        </v-btn>
<input type="text" v-model="full_name" placeholder="Enter here your full name.." />
      </div>


      
      <br/>
       <label>Phone Number</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-phone</v-icon>
        </v-btn>
<input type="number" v-model="phone_number" placeholder="Enter here your Phone Number" />
      </div>

          <br/>
       <label>Email</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-email</v-icon>
        </v-btn>
<input type="email" v-model="email" placeholder="Enter here your Email" />
      </div>


          <br/>
       <!-- <label>Refferal Code</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-pencil</v-icon>
        </v-btn>
<input type="number" placeholder="Enter here your Refferal Code" />
      </div> -->


          <br/>
       <label>Password</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-lock</v-icon>
        </v-btn>
<input type="password" v-model="password" placeholder="Enter here your Password" />
      </div>



      <br/>
       <button @click="submitForm" class="boton">SIGNUP</button>
      </form>
      </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SignupComponent',
  components: {

  },
  date() {
      return {
       full_name: '',
       phone_number: '',
       email: '',
       password: '',
      }
  },
  methods: {
     async handleSubmit(){
          const response = await axios.post('/register', {
           full_name: this.full_name,
              phone_number: this.phone_number,
              password: this.password,
              email: this.email,
          });
          console.log(response);
          this.$router.push('#login');
      }
  }


}
</script>

<style lang="scss">
.boton {
        background-color: #000; border-radius: 10px; padding: 10px; color: #fff; width: 100%;
}
.botton {
        background-color: #FFA500; border-radius: 50px; padding: 10px; color: #000; width: 70%; margin-left: 40px;
}
.form-fill{
  display:
   flex; border: 1px #808080 solid; border-radius: 10px; padding: 5px;
}
.form-icon {
  margin-right: 20px; color: #000; font-size: 22px; margin-left: 20px;
}
</style>

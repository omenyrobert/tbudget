<template>
  <div class="Home">
    <v-main>
      <div style="background-image: url('back.png'); background-size: 100%; padding: 20px; background-repeat- no-repeat; height: 50vh; margin-top: -50px;">
       <h3 style="color: #fff; font-size: 2rem; margin: 30px;">Get Loans From UGX. 15,000 to UGX. 15,000,000</h3>
       <hr style="background-color: #000; height: 1vw; margin: 0.5rem;"/>
       <p style="font-size: 22px;">Instantly On Your Smartphone</p>
      </div>
      <br/>
      <div style="margin-top: -30vw; padding: 40px;">
<h2 style="text-align: center;">Signin</h2>
<p style="text-align: center;" >SignIn Now To Get Your Self A Loan</p>

      <form @submit.prevent="handleLogin">


      <label>Email</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-email</v-icon>
        </v-btn>
<input type="email" v-model="email" placeholder="Enter here your email" />
      </div>


      
      <br/>
       <label>Password</label>
      <div class="form-fill">
        <v-btn icon>
<v-icon class="form-icon">mdi-lock</v-icon>
        </v-btn>
<input type="password" v-model="password" placeholder="Enter here your password" />
      </div>
      <br/>
      <button @click="submitForm" class="boton">SIGNIN</button>
      <br/>
      <div style="display: flex; margin-top: 5px;">
Have an Account? <p style="color: #FFA500;">SIGN UP NOW</p>
      </div>
      
      </form>
      </div>
  <div>
    <SignupComponent/>
  </div>
    </v-main>
  </div>
</template>

<script>
import axios from 'axios';
import SignupComponent from './SignupComponent.vue';

export default {
  name: 'Home',
  components: {
SignupComponent,
  },
  data() {
    return {
       email: '',
   password: '',

    }
  },
  methods: {
   async handleLogin() {
    const response = await axios.post('login', {
      email: this.email,
      password: this.password
    });
    localStorage.setItem('token', response.data.token);
    this.$router.push('/dashboard');
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

<template>
  <div class="Dashboard" style="background-color: #f9f9f9;">
    <v-main>
      <v-container style="margin-top: -50px;">
        <div  class="divv">
        <h2 style="margin-bottom: 10px; margin-left: 50px;">About Us</h2>
        <br/>
        <p>
          What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  components: {

  },
  computed: {
  }
}
</script>

<style lang="scss" >
.form-fill{
  display:
   flex; border: 1px #808080 solid; border-radius: 10px; padding: 5px;
}
.form-icon {
  margin-right: 20px; color: #000; font-size: 22px; margin-left: 20px;
}
.divv{
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
}

.pphoto {
  border: 5px #ffa500;
  border-style: dotted;
  width: 90%;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
}

</style>

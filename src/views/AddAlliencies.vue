<template>
  <div class="Dashboard" style="background-color: #f9f9f9;">
    <input v-model="s" style="border: 1px #000 solid;" type="number">{{total}}
  <input v-model="e" style="border: 1px #000 solid;" type="number">
  <pre>{{s}} + {{e}} = {{tot}}</pre>
  </div>
</template>

<script>

export default {
  name: 'AddAlliencies',
  components: {

  },
  data() {
    return {
       s: 0,
    e: 0
    }
  },
  computed: {
    tot() {
      return Number(this.s) + Number(this.e);
    },
     total() {
      return Number(this.s) * Number(this.e);
    },
  },
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

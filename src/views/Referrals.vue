<template>
  <div class="ddiv">

  <div class="card">
    <h3>My Refferals</h3>
    <br/>
    <div style="width: 100%; overflow-y: hidden; overflow-x: auto; margin: 10px; background-color: #fff; padding: 10px;">
          <table style="width: 600px;">
          <thead style="background-color: #fad48e;">
            <th style="padding: 10px;">User Name</th>
            <th>User Email</th>
            <th>User Telephone </th>
            <th>Date Joined</th>
          </thead>
          <tbody>
            <br/>
            <td colspan="5"><h4>No Records</h4></td>
          </tbody>

        </table>
        </div>
  </div>
 </div>
</template>

<script>


export default {
  name: 'LoanInstallments',
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

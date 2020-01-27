<template>
  <div>
    <div>
      <p>What do you want do to ?</p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <button type="button" class="btn btn-secondary btn-lg block" v-on:click="navToConf">Conf.</button>
        </div>
      </div>
      <div class="row">&nbsp;</div>
      <div class="row">
        <div class="col-12">
          <button
            type="button"
            class="btn btn-secondary btn-lg block"
            v-on:click="navToOverf"
          >Overflow</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  methods: {
    navToConf: function() {
      this.$router.push("/rooms");
    },
    navToOverf: function() {
      this.$router.push("/overflow");
    }
  }
};
</script>


<style  scoped>
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: #4caf50;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>




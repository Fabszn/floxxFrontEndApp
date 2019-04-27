<template>
  <div>
    <div>
      <p>Choose type of conf</p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <button type="button" class="btn btn-secondary btn-lg block" v-on:click="navToConf">Conf.</button>
        </div>
        <div class="col-6">
          <button type="button" class="btn btn-secondary btn-lg block" v-on:click="navToHol">HOL</button>
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
      this.$router.push("/confs");
    },
    navToHol: function() {
      this.$router.push("/hol");
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




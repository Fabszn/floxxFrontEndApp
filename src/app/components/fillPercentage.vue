<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-green" v-on:click="hit(10)">10%</button>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-green" v-on:click="hit(20)">20%</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-green" v-on:click="hit(30)">30%</button>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-green" v-on:click="hit(40)">40%</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-orange" v-on:click="hit(50)">50%</button>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-orange" v-on:click="hit(60)">60%</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-orange" v-on:click="hit(70)">70%</button>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-red" v-on:click="hit(80)">80%</button>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-red" v-on:click="hit(90)">90%</button>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-secondary btn-lg block-red" v-on:click="hit(100)">Full</button>
      </div>
    </div>
    <div class="row">
      <div class="col-5">&nbsp;</div>
      <div class="col-12">{{selection}}</div>
      <div class="col-5">&nbsp;</div>
    </div>
  </div>
</template>
<script>
module.exports = {
  props: ["slotId"],
  data: function() {
    console.log(this.slotId);
    return {
      id: this.slotId,
      selection: 0
    };
  },
  methods: {
    hit: function(perc) {
      this.selection = perc;
      console.log(perc);
    }
  }
};
</script>

<style  scoped>
.block-green {
  display: block;
  width: 100%;
  border: none;
  background-color: #4caf50;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 4px;
}

.block-orange {
  display: block;
  width: 100%;
  border: none;
  background-color: #ffa500;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 4px;
}

.block-red {
  display: block;
  width: 100%;
  border: none;
  background-color: red;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 4px;
}
</style>

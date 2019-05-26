<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <vue-circle
          ref="lastValue"
          v-bind:progress="0"
          :size="100"
          :reverse="false"
          line-cap="round"
          :fill="fill"
          empty-fill="rgba(0, 0, 0, .1)"
          :animation-start-value="0.0"
          :start-angle="380"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
          @vue-circle-progress="progress"
          @vue-circle-end="progress_end"
        ></vue-circle>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>

    <div class="row">&nbsp;</div>
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
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress";
export default {
  components: {
    VueCircle
  },
  data: function() {
    return {
      id: this.$route.params.slotid,
      fill: { gradient: ["green"] }
    };
  },
  methods: {
    progress_end: function() {},
    progress: function() {},
    hit: function(perc) {
      this.$http
        .post(BACKEND_URL + "api/hit", {
          slotId: JSON.stringify(this.$route.params.slotid),
          percentage: JSON.stringify(perc)
        })
        .then(p => {
          this.$refs.lastValue.updateProgress(perc);
        });
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

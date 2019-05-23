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
      <div class="col-12">
        <vue-circle
          ref="myUniqueID"
          v-bind:progress="selection"
          :size="100"
          :reverse="false"
          line-cap="round"
          :fill="fill"
          empty-fill="rgba(0, 0, 0, .1)"
          :animation-start-value="0.0"
          :start-angle="380"
          insert-mode="prepend"
          :thickness="5"
          :show-percent="true"
          @vue-circle-progress="progress"
          @vue-circle-end="progress_end"
        >
          <p>Maillot</p>
        </vue-circle>
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
  props: ["slotId"],
  data: function() {
    return {
      id: this.slotId,
      fill: { gradient: ["green"] },
      selection: 12
    };
  },
  methods: {
    progress_end: function() {},
    progress: function() {},
    hit: function(perc) {
      this.$http
        .post(BACKEND_URL + "api/hit", {
          slotId: JSON.stringify(this.slotId),
          percentage: JSON.stringify(perc)
        })
        .then(p => {
          console.log(perc);
          console.log(this.selection);
          this.$refs.myUniqueID.updateProgress(perc);
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

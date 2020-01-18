<template>
  <div class="container-fluid">
    <modal name="hello-world" @before-open="beforeOpen" :adaptive="true">
      <div class="talkdetails">hello, world! {{confTitle}}</div>
    </modal>
    <div class="d-flex justify-content-around separate-headfooter">
      <button v-on:click="refresh" class="btn btn-primary">Refresh</button>
    </div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter" v-on:click="show">
        <vue-circle
          ref="_maillot"
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
        >Maillot</vue-circle>
      </div>
    </div>
    <div class="d-flex justify-content-around">
      <div class="flex-column separate">
        <div class="space" v-on:click="show">
          <vue-circle
            ref="_241"
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
          >241</vue-circle>
        </div>
        <div class="space">
          <vue-circle
            ref="_242"
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
          >242</vue-circle>
        </div>
        <div class="space">
          <vue-circle
            ref="_243"
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
          >243</vue-circle>
        </div>
      </div>

      <div class="flex-column separate">
        <div class="space">
          <vue-circle
            ref="_251"
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
          >251</vue-circle>
        </div>
        <div class="space">
          <vue-circle
            ref="_252"
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
          >252</vue-circle>
        </div>
        <div class="space">
          <vue-circle
            ref="_253"
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
          >253</vue-circle>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div class="space-headerFooter">
        <vue-circle
          ref="_amphiB"
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
        >Amphi B.</vue-circle>
      </div>
    </div>
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress";
import _ from "lodash";
import shared from "../shared";

export default {
  components: {
    VueCircle
  },
  data: function() {
    return {
      hits: {},
      fill: { gradient: ["green"] },
      confTitle: ""
    };
  },
  created: function() {
    this.$http.get(BACKEND_URL + "api/attendees").then(p => {
      _.mapKeys(p.data, (value, key) => {
        this.hits = p.data;
      });
    });
  },
  methods: {
    progress_end: function() {},
    progress: function() {},
    refresh: function() {
      this.$http.get(BACKEND_URL + "api/attendees").then(p => {
        _.mapKeys(p.data, (value, key) => {
          //console.log("p.data" + p.data);
          shared.computeHit(value.percentage, key, this.$refs);
        });
      });
    },
    show: function() {
      this.$modal.show("hello-world", { foo: "Michel" });
    },
    hide: function() {
      this.$modal.hide("hello-world");
    },
    beforeOpen(event) {
      console.log(event.params.foo);
      this.confTitle = event.params.foo;
    }
  }
};
</script>

<style  scoped>
.talkdetails {
  color: black;
}
.space {
  margin: 20px;
}
.line {
  border: 1px solid gray;
  width: 100%;
}
</style>

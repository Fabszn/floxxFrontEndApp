<template>
  <div class="container-fluid">
    <vue-scroll
      ref="vs"
      :ops="ops"
      @refresh-start="handleRS"
      @load-before-deactivate="handleLBD"
      @refresh-before-deactivate="handleRBD"
      @load-start="handleLoadStart"
    >
      <div class="d-flex justify-content-around separate-headfooter">
        <div class="space-headerFooter">
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
          <div class="space">
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
    </vue-scroll>
  </div>
</template>
<script>
import shared from "../../shared";
import VueCircle from "vue2-circle-progress";
import vuescroll from "vuescroll";
import _ from "lodash";

export default {
  components: {
    VueCircle,
    vuescroll
  },
  data: function() {
    return {
      fill: { gradient: ["green"] },
      ops: {
        vuescroll: {
          mode: "slide",
          pullRefresh: {
            enable: true
          },
          pushLoad: {
            enable: true,
            auto: true,
            autoLoadDistance: 10
          }
        }
      }
    };
  },
  created: function() {
    this.$options.sockets.onmessage = msg => {
      if (!_.startsWith(msg.data, "Keep")) {
        var msgAsJson = JSON.parse(msg.data);
        shared.computeHit(
          msgAsJson.percentage,
          msgAsJson.hitSlotId,
          this.$refs
        );
      } else {
        console.log("Keep alive");
      }
    };

    this.$http
      .get(BACKEND_URL + "api/tracks", { headers: shared.tokenHandle() })
      .then(p => {
        _.mapKeys(p.data, (value, key) => {
          shared.computeHit(value.percentage, key, this.$refs);
        });
      });
  },
  methods: {
    handleRS: function(vsInstance, refreshDom, done) {
      this.$http
        .get(BACKEND_URL + "api/tracks", {
          headers: shared.tokenHandle()
        })
        .then(p => {
          _.mapKeys(p.data, (value, key) => {
            shared.computeHit(value.percentage, key, this.$refs);
          });

          done();
        });

      console.log("RS");
    },
    handleLBD: function(vsInstance, refreshDom, done) {
      console.log("BD");
      done();
    },
    handleRBD: function(vsInstance, refreshDom, done) {
      console.log("RBD");
      done();
    },
    handleLoadStart: function(vsInstance, refreshDom, done) {
      console.log("start");
      done();
    },
    progress_end: function() {},
    progress: function() {},
    refresh: function() {
      this.$http
        .get(BACKEND_URL + "api/tracks", {
          headers: shared.tokenHandle()
        })
        .then(p => {
          _.mapKeys(p.data, (value, key) => {
            shared.computeHit(value.percentage, key, this.$refs);
          });
        });
    }
  }
};
</script>

<style  scoped>
.space {
  margin: 5px;
}

.space-headerFooter {
  margin: 5px;
}

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

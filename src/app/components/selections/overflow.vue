<template>
  <div class="container-fluid">
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

    <div class="d-flex justify-content-around separate">
      <div class="space">
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

      <div class="space">
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
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress";
import _ from "lodash";
export default {
  components: {
    VueCircle
  },
  data: function() {
    return {
      fill: { gradient: ["green"] }
    };
  },
  created: function() {
    this.$http.get(BACKEND_URL + "api/tracks").then(p => {
      console.log(p.data);

      _.mapKeys(p.data, (value, key) => {
        var room = _.split(key, "_", 2)[1];

        if (room == "243") {
          this.$refs._243.updateProgress(_.toInteger(value.percentage));
        } else if (room == "Maillot") {
          this.$refs._maillot.updateProgress(_.toInteger(value.percentage));
        } else if (room == "Amphi bleu") {
          this.$refs._amphiB.updateProgress(_.toInteger(value.percentage));
        } else if (room == "242") {
          this.$refs._242.updateProgress(_.toInteger(value.percentage));
        } else if (room == "241") {
          this.$refs._241.updateProgress(_.toInteger(value.percentage));
        } else if (room == "251") {
          this.$refs._251.updateProgress(_.toInteger(value.percentage));
        } else if (room == "252") {
          this.$refs._252.updateProgress(_.toInteger(value.percentage));
        } else if (room == "253") {
          this.$refs._253.updateProgress(_.toInteger(value.percentage));
        }
      });
    });
  },
  methods: {
    progress_end: function() {},
    progress: function() {}
  }
};
</script>

<style  scoped>
.space {
  margin: 20px;
}

.separate {
  border: 1px dashed white;
  margin: 2px;
  border-radius: 10px;
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

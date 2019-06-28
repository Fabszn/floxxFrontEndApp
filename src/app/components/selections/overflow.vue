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

function chooseColor(percentage) {
  var p = _.toInteger(percentage);
  if (p <= 30) {
    return ["green"];
  } else if (p > 30 && p <= 70) {
    return ["orange"];
  } else if (p > 70 && p <= 100) {
    return ["red"];
  } else {
    return ["violet"];
  }
}

function computeHit(percentage, key, refComponent) {
  var room = _.split(key, "_", 2)[1];

  if (room == "243") {
    refComponent._243.updateProgress(_.toInteger(percentage));
    refComponent._243.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "Maillot") {
    refComponent._maillot.updateProgress(_.toInteger(percentage));
    refComponent._maillot.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "Amphi bleu") {
    refComponent._amphiB.updateProgress(_.toInteger(percentage));
    refComponent._amphiB.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "242") {
    refComponent._242.updateProgress(_.toInteger(percentage));
    refComponent._242.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "241") {
    refComponent._241.updateProgress(_.toInteger(percentage));
    refComponent._241.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "251") {
    refComponent._251.updateProgress(_.toInteger(percentage));
    refComponent._251.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "252") {
    refComponent._252.updateProgress(_.toInteger(percentage));
    refComponent._252.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "253") {
    refComponent._253.updateProgress(_.toInteger(percentage));
    refComponent._253.updateFill({ gradient: chooseColor(percentage) });
  }
}

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
    this.$options.sockets.onmessage = msg => {
      console.log(msg);
      if (!_.startsWith(msg.data, "Keep")) {
        var msgAsJson = JSON.parse(msg.data);

        computeHit(
          JSON.parse(msgAsJson.hit).percentage,
          JSON.parse(msgAsJson.hit).slotId,
          this.$refs
        );
      } else {
        console.log("Keep alive");
      }
    };

    this.$http.get(BACKEND_URL + "api/tracks").then(p => {
      _.mapKeys(p.data, (value, key) => {
        computeHit(value.percentage, key, this.$refs);
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

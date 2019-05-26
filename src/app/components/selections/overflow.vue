<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-around">
      <div class="flex-column separate">
        <div class="space">
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
        <div class="space">
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
        <div class="space">
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

      <div class="flex-column separate">
        <div class="space">
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
        <div class="space">
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
        <div class="space">
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
    </div>

    <div class="d-flex justify-content-around separate">
      <div class="space">
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

      <div class="space">
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
        >toto</vue-circle>
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
      fill: { gradient: ["green"] }
    };
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

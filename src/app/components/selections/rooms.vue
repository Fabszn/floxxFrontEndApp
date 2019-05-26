<template>
  <div class="container-fluid">
    <div class="row">
      <div class="d-flex justify-content-center">
        <dropdown
          v-bind:options="slots"
          v-on:selected="validateSelection"
          v-on:filter="getDropdownValues"
          :disabled="false"
          name="Room"
          :maxItem="10"
          placeholder="Please select a room/slot"
        ></dropdown>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div v-if="slotId != ''">
      <div class="row text-center">
        <div class="d-flex flex-wrap">{{title}}</div>
      </div>
      <div class="row space" wrap>
        <div class="d-flex flex-wrap">{{talkType}}</div>
      </div>
      <div class="row space">
        <div class="d-flex flex-wrap">
          <button v-on:click="selectSlot" class="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      slots: [],
      title: "",
      talkType: "",
      slotId: ""
    };
  },
  created() {
    this.$http.get(BACKEND_URL + "api/slots").then(p => {
      this.slots = p.data.slots;
    });
  },
  methods: {
    selectSlot: function() {
      console.log("select");
      this.$router.push("fill/" + this.slotId);
    },
    validateSelection: function(item) {
      this.$http.get(BACKEND_URL + "api/slots/" + item.id).then(p => {
        this.title = p.data.slot.talk.title;
        this.talkType = p.data.slot.talk.talkType;
        this.slotId = item.id;
      });
    },
    getDropdownValues: function(p) {}
  }
};
</script>

<style scoped>
.space {
  margin: 2px 2px 2px 2px;
}
</style>

<template>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <div>
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
    <div class="space">&nbsp;</div>

    <div v-if="slotId != ''" class="text-justify title separate">{{title}}</div>

    <div v-if="slotId != ''">{{talkType}}</div>
    <div class="space">&nbsp;</div>
    <div v-if="slotId != ''">
      <button v-on:click="selectSlot" class="btn btn-primary">Select</button>
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
</style>

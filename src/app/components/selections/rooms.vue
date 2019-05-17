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
    <div class="row">
      <div class="d-flex flex-wrap">{{title}}</div>
    </div>
    <div class="row">
      <div class="d-flex flex-wrap">{{talkType}}</div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      slots: [],
      title: "",
      talkType: ""
    };
  },
  created() {
    this.$http.get(process.env["SERVER_URL"] + "api/slots").then(p => {
      this.slots = p.data.slots;
    });
  },
  methods: {
    validateSelection: function(item) {
      console.log("validate" + item.id);
      this.$http
        .get(process.env["SERVER_URL"] + "api/slots/" + item.id)
        .then(p => {
          this.title = p.data.slot.talk.title;
          this.talkType = p.data.slot.talk.talkType;
        });
    },
    getDropdownValues: function(p) {}
  }
};
</script>

<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center separate-headfooter">
      <div>
        <button v-on:click="backMenu" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      &nbsp;
      &nbsp;
    </div>

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
  </div>
</template>

<script>
import shared from "../../shared";

export default {
  data: function() {
    return {
      slots: [],
      title: "",
      talkType: "",
      slotId: ""
    };
  },
  created() {
    var token = localStorage.getItem("token");
    this.$http
      .get(BACKEND_URL + "api/slots", {
        headers: shared.tokenHandle()
      })
      .then(p => {
        this.slots = p.data.slots;
      });
  },
  methods: {
    selectSlot: function() {
      console.log("select");
      this.$router.push("fill/" + this.slotId);
    },
    validateSelection: function(item) {
      var token = localStorage.getItem("token");
      this.$http
        .get(BACKEND_URL + "api/slots/" + item.id, {
          headers: shared.tokenHandle()
        })
        .then(p => {
          this.title = p.data.slot.talk.title;
          this.talkType = p.data.slot.talk.talkType;
          this.slotId = item.id;
        });
    },
    getDropdownValues: function(p) {},
    refresh: function() {
      console.log("refresh");
      var token = localStorage.getItem("token");
      this.$http
        .get(BACKEND_URL + "api/slots", {
          headers: shared.tokenHandle()
        })
        .then(p => {
          this.slots = p.data.slots;
        });
    },
    backMenu: function() {
      this.$router.push("/menu");
    }
  }
};
</script>

<style scoped>
</style>

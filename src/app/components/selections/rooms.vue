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
      <div class="space">&nbsp;</div>
      <div v-if="isTalk">
        <div v-if="slotId != ''" class="text-justify title separate">{{title}}</div>

        <div v-if="slotId != ''">{{talkType}}</div>

        <div class="space">&nbsp;</div>
        <div v-if="slotId != ''">{{room}}</div>
        <div class="space">&nbsp;</div>
        <div v-if="slotId != ''">
          <button v-on:click="selectSlot" class="btn btn-primary">Select</button>
        </div>
      </div>
      <div v-if="!isTalk">
        <div class="text-justify title separate">{{title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import shared from "../../shared";

export default {
  data: function() {
    return {
      title: "",
      talkType: "",
      room: "",
      slotId: "",
      isTalk: false
    };
  },
  created() {
    shared.securityAccess(this.$router, p => {
      this.$http
        .get(BACKEND_URL + "api/slots", {
          headers: shared.tokenHandle()
        })
        .then(
          p => {
            this.title = p.data.talk.title;
            this.talkType = p.data.talk.talkType;
            this.slotId = p.data.slotId;
            this.room = p.data.roomId;
            this.isTalk = true;
          },
          error => {
            if (error.status == 404) {
              this.isTalk = false;
              this.title = error.body;
            }
          }
        );
    });
  },
  methods: {
    selectSlot: function() {
      this.$router.push("fill/" + this.slotId);
    },
    validateSelection: function(item) {
      var token = sessionStorage.getItem("token");
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
      var token = sessionStorage.getItem("token");
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

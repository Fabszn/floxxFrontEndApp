<template>
  <div>
    <dropdown
      v-bind:options="valss"
      v-on:selected="validateSelection"
      v-on:filter="getDropdownValues"
      :disabled="false"
      name="Room"
      :maxItem="10"
      placeholder="Please select a room/slot"
    ></dropdown>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      valss: []
    };
  },
  created() {
    this.$http.get(process.env.SERVER_URL + "api/slots").then(p => {
      this.valss = p.data.slots;
    });
  },
  methods: {
    validateSelection: function() {
      console.log("validate");
    },
    getDropdownValues: function(p) {
      console.log("getValue " + p);
    }
  }
};
</script>

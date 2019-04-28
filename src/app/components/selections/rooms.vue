<template>
  <div>
    <Dropdown
      :options="[{ id: 1, name: '241: 9h45-12h'}, { id: 2, name: 'Maillo: 17h-18h'}, {id: 3, name: '251: 15h-18h'}]"
      v-on:selected="validateSelection"
      v-on:filter="getDropdownValues"
      :disabled="false"
      name="Room"
      :maxItem="10"
      placeholder="Please select a room/slot"
    ></Dropdown>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {};
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

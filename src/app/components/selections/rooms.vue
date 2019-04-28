<template>
  <div>
    <Dropdown
      :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}]"
      v-on:selected="validateSelection"
      v-on:filter="getDropdownValues"
      :disabled="false"
      name="zipcode"
      :maxItem="10"
      placeholder="Please select an option"
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

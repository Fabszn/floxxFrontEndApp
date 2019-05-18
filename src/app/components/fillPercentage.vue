<template>
  <div class="container-fluid">Fill percentage : {{id}}</div>
</template>
<script>
module.exports = {
  props: ["slotId"],
  data: function() {
    console.log(this.slotId);
    return {
      id: this.slotId
    };
  },
  methods: {}
};
</script>

<style>
</style>


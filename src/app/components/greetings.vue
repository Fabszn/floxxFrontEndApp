<template>
  <p>{{ greet }} World</p>
</template>

<script>
module.exports = {
  data: function() {
    return {
      greet: this.$http.get(process.env.SERVER_URL + "/hello").then(p => {
        console.log(p.data);
        app1.message = p.data.mes;
      })
    };
  }
};
</script>

<style scoped>
p {
  color: red;
  text-align: center;
}
</style>


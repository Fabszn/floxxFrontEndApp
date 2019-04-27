<template>
  <div class="container-fluid">
    <form id="signup-form" @submit.prevent="processForm">
      <div class="form-group">
        <label for="login">Email address</label>
        <input
          id="login"
          type="email"
          v-model="email"
          class="form-control"
          placeholder="Enter email"
        >
      </div>
      <div class="form-group">
        <label for="mdp">Password</label>
        <input
          id="mdp"
          type="password"
          class="form-control"
          v-model="password"
          placeholder="Enter password"
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    processForm: function() {
      console.log({ name: this.email, email: this.password });
      console.log("test processing");
      this.$router.push("/selectTypeConf");
    }
  }
};
</script>

<style>
</style>


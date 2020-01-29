<template>
  <div class="container-fluid">
    <div id="errorlogin" class="errorMsg" :hidden="loginFailedMsg">Authentification Failed</div>
    <form id="signup-form" @submit.prevent="processForm">
      <div class="form-group">
        <label for="login">Email address</label>
        <input
          id="login"
          type="email"
          v-model="email"
          class="form-control"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="mdp">Password</label>
        <input
          id="mdp"
          type="password"
          class="form-control"
          v-model="password"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit &nbsp;
        <font-awesome-icon icon="sign-in-alt" />
      </button>
    </form>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      email: "",
      password: "",
      loginFailedMsg: true
    };
  },
  methods: {
    processForm: function() {
      this.$http
        .post(
          BACKEND_URL + "api/login",
          JSON.stringify({
            login: this.email,
            mdp: this.password
          })
        )
        .then(
          r => {
            localStorage.setItem("token", r.body.token);
            this.$router.push("/selectTypeConf");
          },
          r => {
            this.loginFailedMsg = false;
          }
        );
    }
  }
};
</script>

<style>
.errorMsg {
  background-color: red;
  font-size: 16px;
  color: whitesmoke;
  text-align: center;
  margin: 17px 13px 14px 10px;
  padding: 10px 0px 10px 0px;
}
</style>


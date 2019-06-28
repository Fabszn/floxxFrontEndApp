<template>
  <div class="d-flex flex-column">
    <div>
      <router-view></router-view>
    </div>
    <div class="version">v.{{version}}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      version: FLOXX_VERSION
    };
  }
};
</script>
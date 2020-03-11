<template>
  <div>
    <ul>
      <li>nombre de hit en fonction du temps</li>
      <li>sur sélection d'un slots, affichage de la courbe de remplissage....</li>
      <li>...</li>
    </ul>
    <b-table
      head-variant="light"
      dark="true"
      details-td-class="cell"
      responsive="true"
      striped
      hover
      :items="items"
    ></b-table>
  </div>
</template>



<script>
import shared from "../../shared";
export default {
  data() {
    return {
      items: []
    };
  },
  created: function() {
    shared.securityAccess(this.$router, p => {
      this.$http
        .get(BACKEND_URL + "api/stats/slots", {
          headers: shared.tokenHandle()
        })
        .then(p => {
          this.items = p.data;
        });
    });
  }
};
</script>

<style scoped>
.cell {
  color: blanchedalmond;
}
</style>
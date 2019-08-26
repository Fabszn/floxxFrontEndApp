<template>
  <div class="d-flex flex-column">
    <div class="line">Hello worlf</div>
    <div class="line">Hello worlf</div>
    <div class="line">Hello worlf</div>
    <div class="line">Hello worlf</div>
    <div class="line">Hello worlf</div>
    <div class="line">Hello worlf</div>
    <div class="line">Hello worlf</div>
    <div class="line">{{test}}</div>
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress";
import _ from "lodash";

function chooseColor(percentage) {
  var p = _.toInteger(percentage);
  if (p <= 30) {
    return ["green"];
  } else if (p > 30 && p <= 70) {
    return ["orange"];
  } else if (p > 70 && p <= 100) {
    return ["red"];
  } else {
    return ["violet"];
  }
}

function computeHit(percentage, key, refComponent) {
  var room = _.split(key, "_", 2)[1];

  if (room == "243") {
    refComponent._243.updateProgress(_.toInteger(percentage));
    refComponent._243.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "Maillot") {
    refComponent._maillot.updateProgress(_.toInteger(percentage));
    refComponent._maillot.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "Amphi bleu") {
    refComponent._amphiB.updateProgress(_.toInteger(percentage));
    refComponent._amphiB.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "242") {
    refComponent._242.updateProgress(_.toInteger(percentage));
    refComponent._242.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "241") {
    refComponent._241.updateProgress(_.toInteger(percentage));
    refComponent._241.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "251") {
    refComponent._251.updateProgress(_.toInteger(percentage));
    refComponent._251.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "252") {
    refComponent._252.updateProgress(_.toInteger(percentage));
    refComponent._252.updateFill({ gradient: chooseColor(percentage) });
  } else if (room == "253") {
    refComponent._253.updateProgress(_.toInteger(percentage));
    refComponent._253.updateFill({ gradient: chooseColor(percentage) });
  }
}

export default {
  components: {
    VueCircle
  },
  data: function() {
    return {
      fill: { gradient: ["green"] },
      test: ""
    };
  },
  created: function() {
    /*this.$options.sockets.onmessage = msg => {
      console.log(msg);
      if (!_.startsWith(msg.data, "Keep")) {
        var msgAsJson = JSON.parse(msg.data);

        computeHit(
          JSON.parse(msgAsJson.hit).percentage,
          JSON.parse(msgAsJson.hit).slotId,
          this.$refs
        );
      } else {
        console.log("Keep alive");
      }
    };*/

    this.$http.get(BACKEND_URL + "api/slots").then(p => {
      this.$async.map(
        p.data.slots,
        (slots, cb) => {
          this.$http.get(BACKEND_URL + "api/slots/" + slots.id).then(
            resp => {
              cb(null, resp.body.slot);
            },
            resp => {
              cb(
                "Error while loading slot " +
                  resp.status +
                  " - " +
                  resp.statusText,
                null
              );
            }
          );
        },
        (e, result) => {
          if (e) {
            console.error(e);
          } else {
            this.test = result[0];
          }
        }
      );
    });
  },
  methods: {
    progress_end: function() {},
    progress: function() {}
  }
};
</script>

<style  scoped>
.space {
  margin: 20px;
}
.line {
  border: 1px solid gray;
  width: 100%;
}
</style>

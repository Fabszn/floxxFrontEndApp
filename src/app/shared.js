export default {
    colorByPercentage: function chooseColor(percentage) {
        console.log("Valmue " + percentage)
        var p = _.toInteger(percentage);
        if (p <= 40) {
            return ["green"];
        } else if (p > 40 && p <= 70) {
            return ["orange"];
        } else if (p > 70 && p <= 100) {
            return ["red"];
        } else {
            return ["violet"];
        }
    },

    tokenHandle: function th() {
        var token = localStorage.getItem("token");
        return {
            Authorization: "Bearer " + token,
            Accept: "application/json"
        }
    }
}
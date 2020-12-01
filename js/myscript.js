// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.

var app = new Vue ({
  el: "#app",
  data: {
    arrayDischi:[]
  },

  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(risposta => {
      this.arrayDischi = risposta.data.response;
      console.log(this.arrayDischi);
    })

  }

});

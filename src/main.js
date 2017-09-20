const cl = console.log; cl;
const Vue = require("vue");

const Wine = require("./lib/Wine");
const app = require("./lib/app.singleton");
const wines = require("../data/randomWines"); //cl(wines); 
global.app = app;
const wl = app.getWineList();
wines.forEach(w=>{
  wl.addWine(new Wine(w));
});

const AppUI = require("./vue/AppUI.vue");
// cl(app);

new Vue({
  el: '#app',
  render: (h) => h(AppUI)
});

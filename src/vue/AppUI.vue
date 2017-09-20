<script>
const cl = console.log; cl;
const app = require("../lib/app.singleton.js");

const WineDetail = require("./WineDetail.vue");

module.exports = {
   name: "app-ui"
  ,components: { WineDetail }
  ,data () {
    return {
       app
      ,wines: null
      ,wineDetail: null
      ,addwine: false
      ,lastSorted: null
    };
  }
  ,computed: {
    showList(){ return !this.wineDetail && !this.addwine; }
  }
  ,methods: {
    addWine(){
      this.addwine = true;
    }
    ,showDetail(wine){
      this.wineDetail = wine;
    }
    ,sortBy(prop){
      this.wineList.sortBy(prop);
      this.lastSorted = prop;
    }
  }
  ,beforeMount(){
    this.wineList = this.app.getWineList();
    this.wines = this.app.getWineList().getArray();
    this.sortBy("year");
  }
};
</script>

<template><span>
  <div class="container">
  <div class="row">

    <h1><i class="fa fa-glass" aria-hidden="true"></i> Wine App</h1>
    <button v-if="showList" 
      class="btn btn-lg btn-primary addWineBtn" @click="addWine()">
      Add wine</button>

    <div v-if="showList" class="panel panel-default">
      <div class="panel-heading">My Wines</div>
      <table class="table">
        <tbody>
          <tr title="click to sort">
            <th @click="sortBy('year')">Year 
              <i v-if="lastSorted==='year'" aria-hidden="true" class="fa fa-asterisk"></i>
            </th>
            <th @click="sortBy('title')">Title
              <i v-if="lastSorted==='title'" aria-hidden="true" class="fa fa-asterisk"></i>
            </th>
            <th @click="sortBy('vineyard')">Vineyard
              <i v-if="lastSorted==='vineyard'" aria-hidden="true" class="fa fa-asterisk"></i>
            </th>
            <th @click="sortBy('region')">Region
              <i v-if="lastSorted==='region'" aria-hidden="true" class="fa fa-asterisk"></i>
            </th>
            <th @click="sortBy('country')">Country
              <i v-if="lastSorted==='country'" aria-hidden="true" class="fa fa-asterisk"></i>
            </th>
          </tr>
          <tr v-for="w in wines" title="click for details"
            @click="showDetail(w)">
            <td>{{w.year}}</td>
            <td>{{w.title}}</td>
            <td>{{w.vineyard}}</td>
            <td>{{w.region}}</td>
            <td>{{w.country}}</td>
          </tr>
        </tbody>
      </table>
    </div> <!-- panel -->

    <wine-detail v-if="wineDetail" :wine="wineDetail"/>
    <wine-detail v-if="addwine" addwine="true"/>
    <!-- <wine-detail v-if="wineDetail" :wid="wineDetailId"/> -->
  </div> <!-- row -->
  </div> <!-- container -->
</span></template>

<style scoped>
h1 {
  text-align: center;
}
.addWineBtn {
  margin: 1rem 0;
}
tr {
  cursor: pointer;
}
th {
  min-width: 8rem;
}
</style>

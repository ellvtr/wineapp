<script>
const cl = console.log; cl;
const app = require("../lib/app.singleton.js");
const Wine = require("../lib/Wine");

module.exports = {
   name: "wine-detail"
  ,props: ["wine", "addwine"]
  ,data(){
    return {
       app: app
      ,input: {
         title: ""
        ,year: null
        ,region: ""
        ,country: ""
        ,vineyard: ""
        ,description: ""
        ,userComments: ""
      }
    };
  }
  ,methods: {
     close(){
      this.$parent.wineDetail = null;
      this.$parent.addwine = false;
    }
    ,rmWine(){
      this.app.getWineList().rmWine(this.wine.id);
      this.close();
    }
    ,addWine(){
      this.app.getWineList().addWine(new Wine(this.input));
      this.close();
      this.$parent.sortBy(this.$parent.lastSorted);
    }
  }
};
</script>

<template><span>

  <div class="col col-md-3"></div>
  <div class="col col-md-6">
  <button type="button" class="close large" @click="close()" title="Close" 
    aria-label="Back"><span aria-hidden="true">&times;</span>
  </button>

  <!-- Detail view only shows when in 'wine' mode: -->
  <div v-if="wine" class="wine-details">
    <h1>{{wine.title}}</h1>
    <p><label>Year:</label> {{wine.year}}</p>
    <p><label>Vineyard:</label> {{wine.vineyard}}</p>
    <p><label>Region:</label> {{wine.region}}</p>
    <p><label>Country:</label> {{wine.country}}</p>
    <p><label>Description:</label> <br/> {{wine.description}}</p>
    <label>Comments:</label>
    <textarea v-model="wine.userComments" class="form-control" rows="4"></textarea><br/>
  </div>

  <!-- Form only shows when in 'addwine' mode: -->
  <form v-if="addwine" class="add-wine-form">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Title"
        v-model.trim="input.title">
    </div>
    <div class="form-group">
      <label for="year">Year</label>
      <input type="number" class="form-control" id="year" placeholder="Year"
        v-model.number="input.year">
    </div>
    <div class="form-group">
      <label for="vineyard">Vineyard</label>
      <input type="text" class="form-control" id="vineyard" placeholder="Vineyard"
        v-model.trim="input.vineyard">
    </div>
    <div class="form-group">
      <label for="region">Region</label>
      <input type="text" class="form-control" id="region" placeholder="Region"
        v-model.trim="input.region">
    </div>
    <div class="form-group">
      <label for="country">Country</label>
      <input type="text" class="form-control" id="country" placeholder="Country"
        v-model.trim="input.country">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea v-model.trim="input.description" id="description" 
        placeholder="Description" class="form-control" rows="4"></textarea><br/>
    </div>
    <div class="form-group">
      <label for="userComments">User comments</label>
      <textarea v-model.trim="input.userComments" id="userComments" 
        placeholder="User comments" class="form-control" rows="4"></textarea><br/>
    </div>
  </form>

  <button class="btn btn-lg btn-standard" @click="close()">Back</button>
  <button class="btn btn-lg btn-success" 
    @click="addWine()" v-if="addwine">Add wine</button>
  <button class="btn btn-lg btn-danger" 
    data-toggle="modal" data-target="#rmModal" v-if="wine">Delete</button>

  </div> <!-- col -->
  <div class="col col-md-3"></div>

  <!-- Modal -->
  <div class="modal fade" id="rmModal" tabindex="-1" role="dialog" aria-labelledby="rmModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="rmModalLabel">Please confirm</h4>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete this wine?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" 
            data-dismiss="modal">No way!</button>
          <button type="button" class="btn btn-danger" 
            data-dismiss="modal" @click="rmWine()">Just do it!</button>
        </div>
      </div>
    </div>
  </div>

</span></template>

<style>
.large {
  font-size: 5rem;
}
.add-wine-form, .wine-details {
  clear: both;
}
</style>

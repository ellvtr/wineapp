const cl = console.log; cl;
const Wine = require("./Wine");
const sortBy = require('sort-array');

class WineList {
  constructor(options){
    this.options = options || {};

    this._array = [];
  }

  getWine(id){
    let match = null;
    this._array.forEach(w=>{
      w.id === id ? match = w : void 0;
    });
    return match;
  }

  getArray(){
    return this._array;
  }

  addWine(wine){
    if(!(wine instanceof Wine)){ 
      throw(new Error("addWine error: wrong argument type")); 
    }
    this._array.push(wine);
  }

  rmWine(id){
    let match = null, ix = null;
    this._array.forEach((w,i)=>{
      if(w.id === id){
        match = w; ix = i;
      }
    });
    if(!match){ return; }
    this._array.splice(ix,1);
  }

  updateWine(options){
    const op = options || {};
    const wine = this.getWine(op.id);
    wine.update(options);
  }

  sortBy(prop){
    sortBy(this._array, prop);
  }

};

module.exports = WineList;

const WineList = require("./WineList");

class App {
  constructor(options){
    this.options = options || {};
    
    this._wineList = new WineList();
  }

  getWineList(){
    return this._wineList;
  }

};

module.exports = App;

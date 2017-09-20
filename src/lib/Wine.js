const uid = require("./uid");

class Wine {
  constructor(options){
    const op = this.options = options || {};

    this.id = op.id || uid();
    this.title = op.title || "Some Title";
    this.vineyard  = op.vineyard || "Some Yard";
    this.year = op.year || Math.round(Math.random()*20 + 1997);
    this.region = op.region || "";
    this.country = op.country || "";
    this.description = op.description || "Some random stuff. Some random stuff.";
    this.userComments = op.userComments || "";
  }

  update(options){
    const op = options || {};
    for(const key in op){
      this[key] ? this[key] = op[key] : void 0;
    }
  }

}; // class

module.exports = Wine;

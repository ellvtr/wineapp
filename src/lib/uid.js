let c = 0;
module.exports = ()=>{
  c += 1;
  return "uid_" + c + "_" + new Date().getTime();
};

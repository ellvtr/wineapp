const cl = console.log; cl;
const _rand = require('lodash.random');
const wines = [];

const titles = [
   "Soother"
  ,"Monte Cristo"
  ,"Baron De Rothberg"
  ,"Jeann D'Arc"
  ,"Smoother"
  ,"Night Cap"
  ,"Sundowner"
  ,"Appassimento"
  ,"Bear Creek"
  ,"Fish Creek"
  ,"Wild Creek"
];

const yards = [
   "Lindemann"
  ,"Spier"
  ,"Monsieur"
  ,"Old Creek"
  ,"Chateau Something"
  ,"Mary's Vinyard"
  ,"Old Farm"
  ,"Chateau None"
  ,"Chateau Null"
  ,"Castilla Something"
  ,"Castilla Null"
  ,"De Boers"
];

const countries = [
   "South Africa"
  ,"Australia"
  ,"France"
  ,"Chile"
  ,"Argentina"
  ,"Germany"
  ,"Italy"
  ,"Spain"
  ,"USA"
];

const regions = [
   "Western Cape"
  ,"Eastern Cape"
  ,"Alsace"
  ,"Bordeaux"
  ,"Champagne"
  ,"Normandie"
  ,"Victoria"
  ,"New South Wales"
];

const cmnts = [
   "Lorem ipsum dolor sit amet"
  ,"consectetur adipiscing elit"
  ,"Integer nec odio"
  ,"Praesent libero"
  ,"Sed cursus ante dapibus diam"
  ,"Sed dignissim lacinia nunc"
  ,"Duis sagittis ipsum"
  ,"Curabitur sodales ligula in libero"
  ,"per inceptos himenaeos"
];

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
  Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
  Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
  Praesent mauris. Fusce nec tellus sed augue semper porta. 
  Mauris massa. Vestibulum lacinia arcu eget nulla. 
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
  per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. `;

const get = arr => {
  return arr[ _rand(0, arr.length-1) ];
};

const times = 20;
for(let i=0; i<times; i++){
  // cl(i);
  wines.push({
     title: get(titles)
    ,vineyard: get(yards)
    ,region: get(regions)
    ,country: get(countries)
    ,description
    ,userComments: get(cmnts)
  });
};

module.exports = wines;

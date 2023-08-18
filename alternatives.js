// This is an alternative way of exporting modules.
/*
module.exports.age = [ 27, 26, 31, 30];

const details = {
  name : 'Tayo',
  occupation : 'Lawyer'
};

module.exports.Info = details;
*/
const lod = require('lodash');

const items = [1, [2, [3]]]
const new_items = lod.flattenDeep(items)

console.log(new_items)
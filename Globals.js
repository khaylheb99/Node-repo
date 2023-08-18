const lod = require('lodash');

const items = [1, [2, [3]]]
const new_items = lod.flattenDeep(items)

console.log(new_items)
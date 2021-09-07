const _ = require("lodash");
const variousBrownBears = require("./bears");


const randomBear = _.sample(variousBrownBears);
console.log(randomBear);
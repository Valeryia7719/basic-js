const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || sampleActivity>MODERN_ACTIVITY || sampleActivity<=0 || isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/0.693);
};

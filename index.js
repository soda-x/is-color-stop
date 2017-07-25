'use strict';

const isRGB = require('./lib/isRGB');
const isRGBA = require('./lib/isRGBA');
const isHSL = require('./lib/isHSL');
const isHSLA = require('./lib/isHSLA');
const isHex = require('./lib/isHex');
const isCSSColorName = require('./lib/isCSSColorName');
const isTransparent = require('./lib/isTransparent');
const isCSSLengthUnit = require('./lib/isCSSLengthUnit');
const isStop = require('./lib/isStop');

function isColor(colorStr) {
  const color =
    isRGB(colorStr) ||
    isRGBA(colorStr) ||
    isHSL(colorStr) ||
    isHSLA(colorStr) ||
    isHex(colorStr) ||
    isCSSColorName(colorStr) ||
    isTransparent(colorStr);

  return color;
}


module.exports = function isColorStop(str1, str2) {
  let colorStr;
  let stopStr;
  if (str2) {
    colorStr = str1;
    stopStr = str2;
  } else {
    const colorStopRex = /^\s{0,}(\S+)\s{0,}(\S*)$/g;
    const mix = colorStopRex.exec(str1);
    colorStr = mix[1];
    stopStr = mix[2];
  }

  return isColor(colorStr) && isStop(stopStr);
};
module.exports.isColor = isColor;
module.exports.isRGB = isRGB;
module.exports.isRGBA = isRGBA;
module.exports.isHSL = isHSL;
module.exports.isHSLA = isHSLA;
module.exports.isHex = isHex;
module.exports.isCSSColorName = isCSSColorName;
module.exports.isTransparent = isTransparent;
module.exports.isCSSLengthUnit = isCSSLengthUnit;

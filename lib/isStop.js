'use strict';

const isCSSLengthUnit = require('./isCSSLengthUnit');
const unit = require('../util/unit');

function isStop(str) {
  let stop = !str;

  if (!stop) {
    const node = unit(str);
    if (node) {
      if (node.number === 0 || (!isNaN(node.number) && isCSSLengthUnit(node.unit))) {
        stop = true;
      }
    }
  }

  return stop;
}

module.exports = isStop;

/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
'use strict';

const methods = iface => {
  const arr = [];
  for (const key in iface) {
    const func = iface[key];
    if (typeof func === 'function') {
      arr.push([key, func.length]);
    }
  }
  return arr;
};

module.exports = { methods };

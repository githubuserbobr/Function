'use strict';
/* eslint-disable no-unused-vars */
const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  const res = ip.split('.').reduce(fn, 0);
  return res;
};

module.exports = { ipToInt };

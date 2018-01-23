'use strict';

let cmd = module.exports = {};

cmd.loop = (n, cb) => {
  if (n > 0 && !n || !cb) return null;
  if (typeof n !== 'number' || typeof cb !== 'function') return null;
  for (n; n > 0; n--) cb();
};
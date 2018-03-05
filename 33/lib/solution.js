'use strict';

module.exports = (num, pow) => !num? null : !pow? null : typeof num !== 'number'? null : typeof pow !== 'number'? null: Math.pow(num, pow).toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
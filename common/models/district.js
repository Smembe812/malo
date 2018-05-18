'use strict';

module.exports = function(District) {
  District.validatesUniquenessOf("name");
};

'use strict';

(function () {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getMaximumNumber(array) {
    var number = array[0];

    for (var i = 0; i < array.length; i++) {
      if (number < array[i]) {
        number = array[i];
      }
    }

    return number;
  }

  window.commonMudule = {
    getMaximumNumber: getMaximumNumber,
    getRandomArbitrary: getRandomArbitrary
  }
})();

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

  function getRandomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function filterItemFromArray(array, filteredItem) {
    var filteredArray = array.slice();

    return filteredArray.filter(
        function (item) {
          return (item !== filteredItem);
        }
    );
  }

  window.commonMudule = {
    getMaximumNumber: getMaximumNumber,
    getRandomArbitrary: getRandomArbitrary,
    getRandomArrayItem: getRandomArrayItem,
    filterItemFromArray: filterItemFromArray
  };
})();

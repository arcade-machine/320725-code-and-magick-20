'use strict';

(function () {
  var WIZARDS_MOCK_DATA = {
    WIZARDS_AMOUNT: 4,
    WIZARDS_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    WIZARDS_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

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

  function getRandomItemsFromArray(array, amountOfItems) {
    var shuffleArray = array.sort(
        function () {
          return 0.5 - Math.random();
        }
    );

    return shuffleArray.slice(0, amountOfItems);
  }

  window.commonMudule = {
    getMaximumNumber: getMaximumNumber,
    getRandomArbitrary: getRandomArbitrary,
    getRandomArrayItem: getRandomArrayItem,
    filterItemFromArray: filterItemFromArray,
    getRandomItemsFromArray: getRandomItemsFromArray,
    WIZARDS_MOCK_DATA: WIZARDS_MOCK_DATA
  };
})();

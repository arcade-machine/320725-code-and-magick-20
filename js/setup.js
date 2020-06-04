'use strict';

var WIZARDS_AMOUNT = 4;
var wizards = [];

var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateWizard() {
  var wizard = {};
  wizard.name = getRandomArrayItem(wizardsName) + ' ' + getRandomArrayItem(wizardsSurnames);
  wizard.colorCoat = getRandomArrayItem(coatColors);
  wizard.eyeColor = getRandomArrayItem(eyesColor);
  wizards.push(wizard);
}

for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  generateWizard();
}

document.querySelector('.setup').classList.remove('hidden');

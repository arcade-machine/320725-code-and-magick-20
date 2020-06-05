'use strict';

var WIZARDS_AMOUNT = 4;
var wizards = [];

var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardTemplate = document.querySelector('#similar-wizard-template');
var similarWizardsList = document.querySelector('.setup-similar-list');

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

var wizardDocumentFragment = new DocumentFragment();
function renderSimilarWizards(wizard) {
  var wizardTemplateForRender = wizardTemplate.content.cloneNode(true);
  var wizardName = wizardTemplateForRender.querySelector('.setup-similar-label');
  var wizardCoat = wizardTemplateForRender.querySelector('.wizard-coat');
  var wizardEyes = wizardTemplateForRender.querySelector('.wizard-eyes');

  wizardName.innerHTML = wizard.name;
  wizardCoat.style.fill = wizard.colorCoat;
  wizardEyes.style.fill = wizard.eyeColor;

  wizardDocumentFragment.appendChild(wizardTemplateForRender);
}

wizards.forEach(
    function (wizard) {
      renderSimilarWizards(wizard);
    }
);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
similarWizardsList.appendChild(wizardDocumentFragment);

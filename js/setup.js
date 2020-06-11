'use strict';

var WIZARDS_AMOUNT = 4;
var wizards = [];

var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardTemplate = document.querySelector('#similar-wizard-template');
var similarWizardsList = document.querySelector('.setup-similar-list');

var avatarBlock = document.querySelector('.setup-open');
var avatarIcon = avatarBlock.querySelector('.setup-open-icon');

var setupPopup = document.querySelector('.setup');
var setupWizardForm = setupPopup.querySelector('.setup-wizard-form');
var setupWizardFormSubmit = setupPopup.querySelector('.setup-submit');
var setupSimilar = setupPopup.querySelector('.setup-similar');
var setupNameInput = setupPopup.querySelector('.setup-user-name');
var closePopupButton = setupPopup.querySelector('.setup-close');

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

function openPopup() {
  setupPopup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');

  closePopupButton.addEventListener('click', closePopup);
  setupWizardForm.addEventListener('submit', onSubmitForm);
  document.addEventListener('keydown', closePopupOnUserInput);
}

function closePopup() {
  setupPopup.classList.add('hidden');

  closePopupButton.removeEventListener('click', closePopup);
  setupWizardForm.removeEventListener('submit', onSubmitForm);
  document.removeEventListener('keydown', closePopupOnUserInput);
}

function closePopupOnUserInput(evt) {
  if (
    evt.key === 'Escape' && document.activeElement !== setupNameInput ||
    evt.key === 'Enter' && document.activeElement === closePopupButton
  ) {
    closePopup();
  }
}

function onSubmitForm(evt) {
  if (document.activeElement !== setupWizardFormSubmit) {
    evt.preventDefault();
  }
}

avatarBlock.addEventListener('click', openPopup);
avatarIcon.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

similarWizardsList.appendChild(wizardDocumentFragment);

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

  var wizards = [];

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

  var setupPlayer = setupPopup.querySelector('.setup-player');
  var wizardAppearance = setupPlayer.querySelector('.wizard');
  var wizardCoat = wizardAppearance.querySelector('.wizard-coat');
  var wizardEyes = wizardAppearance.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

  function generateWizard() {
    var wizard = {};
    wizard.name =
      window.commonMudule.getRandomArrayItem(
          WIZARDS_MOCK_DATA.WIZARDS_NAMES
      )
      + ' '
      + window.commonMudule.getRandomArrayItem(
          WIZARDS_MOCK_DATA.WIZARDS_SURNAMES
      );
    wizard.colorCoat = window.commonMudule.getRandomArrayItem(
        WIZARDS_MOCK_DATA.COAT_COLORS
    );
    wizard.eyeColor = window.commonMudule.getRandomArrayItem(
        WIZARDS_MOCK_DATA.EYES_COLOR
    );
    wizards.push(wizard);
  }

  for (var i = 0; i < WIZARDS_MOCK_DATA.WIZARDS_AMOUNT; i++) {
    generateWizard();
  }

  var wizardDocumentFragment = new DocumentFragment();
  function renderSimilarWizards(wizard) {
    var wizardTemplateForRender = wizardTemplate.content.cloneNode(true);
    var wizardTemplateName = wizardTemplateForRender.querySelector('.setup-similar-label');
    var wizardTemplateCoat = wizardTemplateForRender.querySelector('.wizard-coat');
    var wizardTemplateEyes = wizardTemplateForRender.querySelector('.wizard-eyes');

    wizardTemplateName.innerHTML = wizard.name;
    wizardTemplateCoat.style.fill = wizard.colorCoat;
    wizardTemplateEyes.style.fill = wizard.eyeColor;

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

    setupWizardCustomListeners();
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

  function setupColorOfElement(element, colorsArray, paintedProperty, formInput) {
    var currentFill = element.style[paintedProperty];
    var currentColorOptions = window.commonMudule.filterItemFromArray(colorsArray, currentFill);
    var randomColor = window.commonMudule.getRandomArrayItem(currentColorOptions);

    element.style[paintedProperty] = randomColor;
    formInput.value = randomColor;
  }

  avatarBlock.addEventListener('click', openPopup);
  avatarIcon.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  function setupWizardCustomListeners() {
    wizardCoat.addEventListener('click', function () {
      setupColorOfElement(wizardCoat, WIZARDS_MOCK_DATA.COAT_COLORS, 'fill', wizardCoatInput);
    });

    wizardEyes.addEventListener('click', function () {
      setupColorOfElement(wizardEyes, WIZARDS_MOCK_DATA.EYES_COLOR, 'fill', wizardEyesInput);
    });

    wizardFireball.addEventListener('click', function () {
      setupColorOfElement(wizardFireball, WIZARDS_MOCK_DATA.FIREBALL_COLORS, 'background-color', wizardFireballInput);
    });
  }

  similarWizardsList.appendChild(wizardDocumentFragment);
})();

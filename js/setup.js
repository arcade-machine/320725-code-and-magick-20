'use strict';

(function () {
  var wizards = [];

  var wizardTemplate = document.querySelector('#similar-wizard-template');
  var similarWizardsList = document.querySelector('.setup-similar-list');

  var avatarBlock = document.querySelector('.setup-open');
  var avatarIcon = avatarBlock.querySelector('.setup-open-icon');

  var wizardDocumentFragment = new DocumentFragment();

  function generateWizard() {
    var wizard = {};
    wizard.name =
      window.commonMudule.getRandomArrayItem(
          window.commonMudule.WIZARDS_MOCK_DATA.WIZARDS_NAMES
      )
      + ' '
      + window.commonMudule.getRandomArrayItem(
          window.commonMudule.WIZARDS_MOCK_DATA.WIZARDS_SURNAMES
      );
    wizard.colorCoat = window.commonMudule.getRandomArrayItem(
        window.commonMudule.WIZARDS_MOCK_DATA.COAT_COLORS
    );
    wizard.eyeColor = window.commonMudule.getRandomArrayItem(
        window.commonMudule.WIZARDS_MOCK_DATA.EYES_COLOR
    );
    wizards.push(wizard);
  }

  for (var i = 0; i < window.commonMudule.WIZARDS_MOCK_DATA.WIZARDS_AMOUNT; i++) {
    generateWizard();
  }

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

  avatarBlock.addEventListener('click', window.dialogModule.openPopup);
  avatarIcon.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      window.dialogModule.openPopup();
    }
  });

  similarWizardsList.appendChild(wizardDocumentFragment);
})();

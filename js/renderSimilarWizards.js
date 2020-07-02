'use strict';

(function () {
  var setupPopup = document.querySelector('.setup');
  var setupPlayer = setupPopup.querySelector('.setup-player');
  var wizardAppearance = setupPlayer.querySelector('.wizard');
  var wizardCoat = wizardAppearance.querySelector('.wizard-coat');
  var wizardEyes = wizardAppearance.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
  var wizardEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

  var currentCoatColor = wizardCoat.style.fill;
  var currentEyesColor = wizardEyes.style.fill || 'black';

  var wizards = [];

  function rankWizards(wizard) {
    var rank = 0;

    if (wizard.colorCoat === currentCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === currentEyesColor) {
      rank += 1;
    }

    return rank;
  }

  function setupColorOfElement(element, colorsArray, paintedProperty, formInput) {
    var currentFill = element.style[paintedProperty];
    var currentColorOptions = window.commonMudule.filterItemFromArray(colorsArray, currentFill);
    var randomColor = window.commonMudule.getRandomArrayItem(currentColorOptions);

    if (element === wizardCoat) {
      currentCoatColor = randomColor;
    } else if (element === wizardEyes) {
      currentEyesColor = randomColor;
    }

    element.style[paintedProperty] = randomColor;
    formInput.value = randomColor;
  }

  function setupWizardCustomListeners() {
    wizardCoat.addEventListener('click', function () {
      setupColorOfElement(
          wizardCoat,
          window.commonMudule.WIZARDS_MOCK_DATA.COAT_COLORS,
          'fill',
          wizardCoatInput);
    });

    wizardEyes.addEventListener('click', function () {
      setupColorOfElement(
          wizardEyes,
          window.commonMudule.WIZARDS_MOCK_DATA.EYES_COLOR,
          'fill',
          wizardEyesInput);

      console.log(wizards);

      wizards = window.setupModule.wizards.sort(
        function (first, second) {
          if (rankWizards(first) > rankWizards(second)) {
            return 1;
          } else if (rankWizards(first) < rankWizards(second)) {
            return -1;
          } else {
            return 0;
          }
        }
      );

      console.log(wizards);
    });

    wizardFireball.addEventListener('click', function () {
      setupColorOfElement(
          wizardFireball,
          window.commonMudule.WIZARDS_MOCK_DATA.FIREBALL_COLORS,
          'background-color',
          wizardFireballInput);
    });
  }

  window.renderSimilarWizardsModule = {
    setupWizardCustomListeners: setupWizardCustomListeners
  }
})();

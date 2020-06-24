'use strict';

(function () {
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

  var uploadBlock = setupPopup.querySelector('.upload');

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
      window.dialogModule.closePopup();
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
    });

    wizardFireball.addEventListener('click', function () {
      setupColorOfElement(
          wizardFireball,
          window.commonMudule.WIZARDS_MOCK_DATA.FIREBALL_COLORS,
          'background-color',
          wizardFireballInput);
    });
  }

  uploadBlock.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startingCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    function onMouseMove(mouseEvt) {
      mouseEvt.preventDefault();

      var shift = {
        x: startingCoordinates.x - mouseEvt.clientX,
        y: startingCoordinates.y - mouseEvt.clientY
      };

      startingCoordinates = {
        x: mouseEvt.clientX,
        y: mouseEvt.clientY
      };

      setupPopup.style.top = (setupPopup.offsetTop - shift.y) + 'px';
      setupPopup.style.left = (setupPopup.offsetLeft - shift.x) + 'px';
    }

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.dialogModule = {
    openPopup: openPopup,
    closePopup: closePopup
  };
})();

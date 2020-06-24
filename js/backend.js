'use strict';

(function () {
  var wizardsURL = 'https://javascript.pages.academy/code-and-magick/data';
  var postWizardURL = 'https://javascript.pages.academy/code-and-magick';

  function load(url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s

    xhr.open('GET', wizardsURL);
    xhr.send();
  }

  function save(data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', postWizardURL);
    xhr.send(data);
  }

  window.backendModule = {
    load: load,
    save: save
  };
})();

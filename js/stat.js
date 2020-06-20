'use strict';

(function () {
  var commonValues = {
    TEXT_HEIGHT: 10,
    MAIN_COLOR: '#000'
  };


  var cloudMeasures = {
    CLOUD_WIDTH: 420,
    CLOUD_HEIGHT: 270,
    CLOUD_POSITION_X: 100,
    CLOUD_POSITION_Y: 10,
    CLOUD_BORDER_GAP: 20
  };

  var graphMeasures = {
    COLUMN_GAP: 50,
    GRAPH_WIDTH: 40,
    MAX_GRAPH_HEIGHT: 150,
    COLUMN_WIDTH: function () {
      return this.COLUMN_GAP + this.GRAPH_WIDTH;
    }
  };

  function renderCloud(ctx, posX, posY, color) {
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, cloudMeasures.CLOUD_WIDTH, cloudMeasures.CLOUD_HEIGHT);
  }

  function getBackgroundForGraph() {
    return 'rgba(0, 0, 255, ' + window.commonMudule.getRandomArbitrary(0.1, 1) + ')';
  }

  function renderPlayerStatistic(ctx, name, column, time, maximumScore) {
    ctx.fillStyle = commonValues.MAIN_COLOR;
    ctx.fillText(time,
      cloudMeasures.CLOUD_POSITION_X + graphMeasures.COLUMN_GAP + graphMeasures.COLUMN_WIDTH() * column,
      cloudMeasures.CLOUD_POSITION_X + graphMeasures.MAX_GRAPH_HEIGHT - commonValues.TEXT_HEIGHT - time / maximumScore * graphMeasures.MAX_GRAPH_HEIGHT);
    ctx.fillText(name,
      cloudMeasures.CLOUD_POSITION_X + graphMeasures.COLUMN_GAP + graphMeasures.COLUMN_WIDTH() * column,
      cloudMeasures.CLOUD_HEIGHT);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getBackgroundForGraph();
    }

    ctx.fillRect(
      cloudMeasures.CLOUD_POSITION_X + graphMeasures.COLUMN_GAP + graphMeasures.COLUMN_WIDTH() * column,
      cloudMeasures.CLOUD_POSITION_X + graphMeasures.MAX_GRAPH_HEIGHT - time / maximumScore * graphMeasures.MAX_GRAPH_HEIGHT,
      graphMeasures.GRAPH_WIDTH,
      time / maximumScore * graphMeasures.MAX_GRAPH_HEIGHT);
  }

  window.renderStatistics = function (canvas, playersNames, timeToCompleteLvl) {
    var biggestScore = Math.round(
      window.commonMudule.getMaximumNumber(timeToCompleteLvl)
    );

    renderCloud(canvas,
      cloudMeasures.CLOUD_POSITION_X + 10,
      cloudMeasures.CLOUD_POSITION_Y + 10,
      'rgba(0, 0, 0, 0.7)');
    renderCloud(canvas,
      cloudMeasures.CLOUD_POSITION_X,
      cloudMeasures.CLOUD_POSITION_Y,
      '#fff');

    canvas.fillStyle = commonValues.MAIN_COLOR;
    canvas.font = '16px PT mono';
    canvas.fillText('Ура вы победили!',
      cloudMeasures.CLOUD_POSITION_X + cloudMeasures.CLOUD_BORDER_GAP,
      cloudMeasures.CLOUD_POSITION_Y + cloudMeasures.CLOUD_BORDER_GAP + commonValues.TEXT_HEIGHT);
    canvas.fillText('Список результатов:',
      cloudMeasures.CLOUD_POSITION_X + cloudMeasures.CLOUD_BORDER_GAP,
      cloudMeasures.CLOUD_POSITION_Y + cloudMeasures.CLOUD_BORDER_GAP + commonValues.TEXT_HEIGHT * 3);

    playersNames.forEach(
      function (player, index) {
        renderPlayerStatistic(canvas,
          player,
          index,
          Math.round(timeToCompleteLvl[index]),
          biggestScore);
      }
    );
  };
})();

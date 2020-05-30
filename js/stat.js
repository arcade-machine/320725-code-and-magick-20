'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_POSITION_X = 100;
var CLOUD_POSITION_Y = 10;

var TEXT_HEIGHT = 10;

var COLUMN_GAP = 50;
var GRAPH_WIDTH = 40;
var MAX_GRAPH_HEIGHT = 150;
var COLUMN_WIDTH = COLUMN_GAP + GRAPH_WIDTH;


function renderCloud(ctx, posX, posY, color) {
  ctx.fillStyle = color;
  ctx.fillRect(posX, posY, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function getBackgroundForGraph() {
  return 'rgba(0, 0, 255, ' + getRandomArbitrary(0.1, 1) + ')';
}

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

function renderPlayerStatistic(ctx, name, column, time, maximumScore) {
  ctx.fillStyle = '#000';
  ctx.fillText(time,
    CLOUD_POSITION_X + COLUMN_GAP + COLUMN_WIDTH * column,
    CLOUD_POSITION_X + MAX_GRAPH_HEIGHT - TEXT_HEIGHT - time / maximumScore * MAX_GRAPH_HEIGHT);
  ctx.fillText(name,
    CLOUD_POSITION_X + COLUMN_GAP + COLUMN_WIDTH * column,
    CLOUD_HEIGHT);

  name === 'Вы'
    ? ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    : ctx.fillStyle = getBackgroundForGraph();

  ctx.fillRect(
    CLOUD_POSITION_X + COLUMN_GAP + COLUMN_WIDTH * column,
    CLOUD_POSITION_X + MAX_GRAPH_HEIGHT - time / maximumScore * MAX_GRAPH_HEIGHT,
    GRAPH_WIDTH,
    time / maximumScore * MAX_GRAPH_HEIGHT);
}

function renderStatistics(canvas,
                          playersNames,
                          timeToCompleteLvl) {
  var biggestScore = Math.round(getMaximumNumber(timeToCompleteLvl));

  renderCloud(canvas,
    110,
    20,
    'rgba(0, 0, 0, 0.7)');
  renderCloud(canvas,
    100,
    10,
    '#fff');


  canvas.fillStyle = '#000';
  canvas.font = '16px PT mono';
  canvas.fillText('Ура вы победили!', 120, 40);
  canvas.fillText('Список результатов:', 120, 60);

  playersNames.forEach(
    function (player, index) {
      renderPlayerStatistic(canvas,
        player,
        index,
        Math.round(
          timeToCompleteLvl[index]
        ),
        biggestScore);
    }
  );
}

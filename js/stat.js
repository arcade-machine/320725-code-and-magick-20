var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_POSITION_X = 100;
var CLOUD_POSITION_Y = 10;

var COLUMN_GAP = 50;
var GRAPH_WIDTH = 40;
var MAX_GRAPH_HEIGH = 150;
var COLUMN_WIDTH = COLUMN_GAP + GRAPH_WIDTH;


function renderCloud(ctx, posX, posY, color) {
  ctx.fillStyle = color;
  ctx.fillRect(posX, posY, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function getBackgroundForGraph() {
  return 'rgba(0, 0, 255, ' + getRandomArbitrary(0.1, 1) +')';
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function renderPlayerStatistic(ctx, name, column) {
  ctx.fillStyle = '#000';
  ctx.fillText('4025', CLOUD_POSITION_X + COLUMN_GAP + COLUMN_WIDTH * column, 90);
  ctx.fillText(name, CLOUD_POSITION_X + COLUMN_GAP + COLUMN_WIDTH * column, CLOUD_HEIGHT);

  name === 'Вы'
    ? ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    : ctx.fillStyle = getBackgroundForGraph();

  ctx.fillRect(CLOUD_POSITION_X + COLUMN_GAP + COLUMN_WIDTH * column, 100, GRAPH_WIDTH, MAX_GRAPH_HEIGH);
}

function renderStatistics(canvas, playersNames, timeToCompleteLvl) {
  renderCloud(canvas, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(canvas, 100, 10, '#fff');

  canvas.fillStyle = '#000';
  canvas.font = '16px PT mono';
  canvas.fillText('Ура вы победили!', 120, 40);
  canvas.fillText('Список результатов:', 120, 60);

  playersNames.forEach(
    (player, index) => {
      renderPlayerStatistic(canvas, player, index);
    }
  );
}

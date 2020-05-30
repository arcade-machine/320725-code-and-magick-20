var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;

function renderCloud(ctx, posX, posY, color) {
  ctx.fillStyle = color;
  ctx.fillRect(posX, posY, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function renderPlayerStatistic(ctx, name) {
  ctx.fillStyle = '#000';
  ctx.fillText('4025', 150, 90);
  ctx.fillText(name, 150, 270);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(150, 100, 40, 150);
}

function renderStatistics(canvas, playersNames, timeToCompleteLvl) {
  renderCloud(canvas, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(canvas, 100, 10, '#fff');

  canvas.fillStyle = '#000';
  canvas.font = '16px PT mono';
  canvas.fillText('Ура вы победили!', 120, 40);
  canvas.fillText('Список результатов:', 120, 60);

  var players = ['Вы', 'You', 'Keepo', 'Kappa'];
  renderPlayerStatistic(canvas, players[0]);
}

function Driver(car, x, y) {
  this.car = document.querySelector('.car');
  this.x = 0;
  this.y = 0;
}

var body = document.querySelector('body');

var game = new Driver();

var keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'];
var rotateclass = ['car normal', 'car down', 'car left', 'car up'];

Driver.prototype.turnCar = function (event) {
  for (var i = 0; keys.length > i; i++) {
    if (event.key === keys[i]) {
      game.car.className = rotateclass[i];
    }
  }
};

Driver.prototype.renderGame = function () {
  game.car.style.left = game.x;
  game.car.style.top = game.y;
  body.appendChild(game.car);
};

Driver.prototype.startCar = function (event) {
  if (event.code === 'Space') {
    setInterval(function () {
      document.body.innerHTML = '';
      var left = parseInt(game.x || 10);
      game.x = (left + 3) + 'px';
      game.renderGame();
    }, 16);
  }
};

document.addEventListener('keydown', function (event) {
  game.turnCar(event);
  game.startCar(event);
});

document.addEventListener('DOMContentLoaded', function () {
  game.renderGame();
});

function Driver(car, x, y, facing) {
  this.car = document.querySelector('.car');
  this.x = 0;
  this.y = 0;
  this.facing = 'car normal';
}

var body = document.querySelector('body');

var game = new Driver();

var keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'];
var rotateclass = ['car normal', 'car down', 'car left', 'car up'];

var counter = 0;

var int;

Driver.prototype.turnCar = function (event) {
  for (var i = 0; keys.length > i; i++) {
    if (event.key === keys[i]) {
      game.car.className = rotateclass[i];
      game.facing = rotateclass[i];
    }
  }
};

Driver.prototype.renderGame = function () {
  game.car.style.left = game.x;
  game.car.style.top = game.y;
  game.car.className = game.facing;
  body.appendChild(game.car);
};

Driver.prototype.move = function (event) {
  if (event.code === 'Space') {
    document.body.innerHTML = '';
    clearInterval(int);
    if (counter % 2 === 0 || counter === 0) {
      counter++;
      int = setInterval(function () {
        if (game.facing === 'car normal') {
          var left = parseInt(game.x || 10);
          game.x = (left + 3) + 'px';
          game.renderGame();
        } else if (game.facing === 'car left') {
          var position = parseInt(game.x || 10);
          game.x = (position - 3) + 'px';
          game.renderGame();
        } else if (game.facing === 'car down') {
          position = parseInt(game.y || 10);
          game.y = (position + 3) + 'px';
          game.renderGame();
        } else if (game.facing === 'car up') {
          position = parseInt(game.y || 10);
          game.y = (position - 3) + 'px';
          game.renderGame();
        }
      }, 16);
    } else {
      game.renderGame();
      counter++;
    }
  }
};

document.addEventListener('keydown', function () {
  game.turnCar(event);
  game.move(event);
});

document.addEventListener('DOMContentLoaded', function () {
  game.renderGame();
});

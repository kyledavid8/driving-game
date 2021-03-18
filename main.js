function Driver(car) {
  this.car = document.querySelector('.car');
}

var game = new Driver();

var keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'];
var rotateclass = ['car normal', 'car down', 'car left', 'car up'];
document.addEventListener('keydown', function (event) {
  for (var i = 0; keys.length > i; i++) {
    if (event.key === keys[i]) {
      game.car.className = rotateclass[i];
    }
  }
});

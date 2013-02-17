var sel = require('sel');
sel.plugin(
  require('sel-style'),
  require('sel-arrange')
);

module.exports = function (config, actors) {
  return new Render(config, actors);
};

var Render = function (config, actors) {
  var self = this;
  this.cell = config.cell;

  this.board = sel('#' + config.id).
    size({
      width: (config.width * this.cell).toString() + 'px',
      height: (config.height * this.cell).toString() + 'px'
    }).
    color({ bg: config.bg });

  var frame = function () {
    actors.forEach(function (actor) {
      actor.members.forEach(function (member) {
        member.el.pos({
          x: ((actor.x + member.x) * self.cell).toString() + 'px',
          y: ((actor.y + member.y) * self.cell).toString() + 'px'
        })
      });
    });
  };

  setInterval(frame, 1000 / config.fps);
};

Render.prototype.tile = (function () {
  var _id = 0;

  var id = function () {
    var current = _id;
    _id++;
    return current;
  };

  return function (color) {
    return sel.div('tile' + id()).
      move({to: this.board, relative: true}).
      size({ 
        width: this.cell.toString() + 'px',
        height: this.cell.toString() + 'px'
      }).
      color({ bg: color });
  };
})();

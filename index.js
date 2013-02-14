var sel = require('sel').plugin(require('sel-style'));

module.exports = render;

var render = function (config) {
  return new Render(config);
};

var Render = function (config) {
  this.board = sel(config.id).
    size((config.width * config.cell).toString() + 'px',
         (config.height * config.cell).toString() + 'px').
    color({ bg: config.bg });
};

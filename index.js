var sel = require('sel').plugin(require('sel-style'));

module.exports = function (config) {
  return new Render(config);
};

var Render = function (config) {
  this.board = sel('#' + config.id).
    size({
      width: (config.width * config.cell).toString() + 'px',
      height: (config.height * config.cell).toString() + 'px'
    }).
    color({ bg: config.bg });
};

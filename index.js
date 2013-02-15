var sel = require('sel').plugin(require('sel-style'));

module.exports = function (config) {
  return new Render(config);
};

var Render = function (config) {
  sel('#' + config.id).
    size({
      width: (config.width * config.cell).toString() + 'px',
      height: (config.height * config.cell).toString() + 'px'
    }).
    color({ bg: config.bg });

  setInterval(config.frame, 1000 / config.fps);
};

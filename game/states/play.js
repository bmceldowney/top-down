
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
      this.player = this.game.add.sprite(300, 300, 'mummy');

      this.player.animations.add('walkUp', [0, 1, 2], 6, true);
      this.player.animations.add('walkRight', [3, 4, 5], 6, true);
      this.player.animations.add('walkDown', [6, 7, 8], 6, true);
      this.player.animations.add('walkLeft', [9, 10, 11], 6, true);

    },
    update: function() {

    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };
  
  module.exports = Play;
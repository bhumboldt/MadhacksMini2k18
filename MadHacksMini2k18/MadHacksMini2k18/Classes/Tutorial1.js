var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MadHacks;
(function (MadHacks) {
    var Tutorial1 = (function (_super) {
        __extends(Tutorial1, _super);
        function Tutorial1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.level = [
                'xxxxxxxxxxxxxxxxxxxx',
                'x                  x',
                'x                  x',
                'x                  x',
                'x                  x',
                'x                  x',
                'x                  x',
                'x                  x',
                'x p       t        x',
                'xxxxxxxxxxxxxxxxxxex'
            ];
            _this.tiles = [];
            _this.traps = [];
            _this.ghosts = [];
            _this.timer = 1000;
            _this.canPress = true;
            return _this;
        }
        Tutorial1.prototype.loadLevel = function () {
            for (var i = 0; i < this.level.length; i++) {
                for (var j = 0; j < this.level[i].length; j++) {
                    if (this.level[i][j] === 'x') {
                        var tile = new MadHacks.Tile(this.game, j * 32, i * 32);
                        this.tiles.push(tile);
                    }
                    if (this.level[i][j] === 'p') {
                        this.player = new MadHacks.Player(this.game, j * 32, i * 32);
                        this.player.body.collideWorldBounds = true;
                    }
                    if (this.level[i][j] === 'e') {
                        this.exit = new MadHacks.Exit(this.game, j * 32, i * 32);
                    }
                    if (this.level[i][j] === 't') {
                        var trap = new MadHacks.Trap(this.game, j * 32, i * 32);
                        this.traps.push(trap);
                    }
                }
            }
        };
        Tutorial1.prototype.preload = function () {
        };
        Tutorial1.prototype.update = function () {
            if (!this.canPress) {
                this.timer--;
            }
            if (this.timer == 0) {
                this.canPress = true;
                this.timer = 100;
            }
            for (var i = 0; i < this.tiles.length; i++) {
                this.game.physics.arcade.collide(this.player, this.tiles[i], this.player.collisionHandler, null, this);
                for (var j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.tiles[i], this.ghosts[j].collisionHandler, null, this);
                }
            }
            for (var i = 0; i < this.traps.length; i++) {
                this.game.physics.arcade.collide(this.player, this.traps[i], this.player.trapCollisionHandler, null, this);
                for (var j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.traps[i], this.ghosts[j].trapCollisionHandler, null, this);
                }
            }
            if (this.canPress && this.game.input.keyboard.isDown(Phaser.Keyboard.Z)) {
                this.canPress = false;
                this.player.actions.push(new MadHacks.PlayerActions(this.player.oldAction, this.player.frames));
                this.player.frames = 0;
                this.addGhost();
            }
        };
        // Create
        Tutorial1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'Background');
            this.loadLevel();
        };
        // Adds a ghost to the level
        Tutorial1.prototype.addGhost = function () {
            this.ghosts.push(new MadHacks.Ghost(this.game, 100, 100, this.player.actions));
        };
        return Tutorial1;
    }(Phaser.State));
    MadHacks.Tutorial1 = Tutorial1;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Tutorial1.js.map
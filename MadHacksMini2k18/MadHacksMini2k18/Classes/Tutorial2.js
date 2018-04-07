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
    var Tutorial2 = /** @class */ (function (_super) {
        __extends(Tutorial2, _super);
        function Tutorial2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.level = [
                'xxxxxxxxxxxxxxxexxxx',
                'x                  x',
                'x                  x',
                'x t                x',
                'x             c   xx',
                'x        c         x',
                'x             c   xx',
                'x   c              x',
                'x p          t     x',
                'xxxxxxxxxxxxxxxxxtxx'
            ];
            _this.tiles = [];
            _this.traps = [];
            _this.collectibles = [];
            _this.score = 0;
            return _this;
        }
        Tutorial2.prototype.loadLevel = function () {
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
                    if (this.level[i][j] === 'c') {
                        var collectible = new MadHacks.Collectible(this.game, j * 32, i * 32);
                        this.collectibles.push(collectible);
                    }
                }
            }
        };
        Tutorial2.prototype.preload = function () {
        };
        Tutorial2.prototype.update = function () {
            for (var i = 0; i < this.tiles.length; i++) {
                this.game.physics.arcade.collide(this.player, this.tiles[i], this.player.collisionHandler, null, this);
            }
            for (var i = 0; i < this.traps.length; i++) {
                this.game.physics.arcade.collide(this.player, this.traps[i], this.trapCollisionHandler, null, this);
            }
            for (var i = 0; i < this.collectibles.length; i++) {
                this.game.physics.arcade.overlap(this.player, this.collectibles[i], this.collectibleCollisionHandler, null, this);
            }
            if (this.game.physics.arcade.overlap(this.player, this.exit, this.exitCollisionHandler, null, this)) {
            }
        };
        Tutorial2.prototype.collectibleCollisionHandler = function (obj1, obj2) {
            obj2.destroy(true);
            this.score++;
            this.scoreText.text = 'Score: ' + this.score;
        };
        Tutorial2.prototype.trapCollisionHandler = function (obj1, obj2) {
            obj1.isDead = true;
            this.score = 0;
            this.scoreText.text = 'Score: ' + this.score;
        };
        Tutorial2.prototype.exitCollisionHandler = function (obj1, obj2) {
            this.game.state.start('Tutorial2');
        };
        // Create
        Tutorial2.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'Background');
            this.loadLevel();
            this.scoreText = this.game.add.text(10, 10, 'Score: ' + this.score, {
                font: '15px Arial'
            });
        };
        Tutorial2.prototype.restart = function () {
            this.score = 0;
        };
        return Tutorial2;
    }(Phaser.State));
    MadHacks.Tutorial2 = Tutorial2;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Tutorial2.js.map
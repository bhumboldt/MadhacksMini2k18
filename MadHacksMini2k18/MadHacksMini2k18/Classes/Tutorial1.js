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
                'x        c         x',
                'x                  x',
                'x                  x',
                'x p       t        x',
                'xxxxxxxxxxxxxxxxxxex'
            ];
            _this.tiles = [];
            _this.traps = [];
            _this.ghosts = [];
            _this.timer = 25;
            _this.canPress = true;
            _this.collectibles = [];
            _this.score = 0;
            _this.ghostTexts = [];
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
                    if (this.level[i][j] === 'c') {
                        var collectible = new MadHacks.Collectible(this.game, j * 32, i * 32);
                        this.collectibles.push(collectible);
                    }
                }
            }
        };
        Tutorial1.prototype.preload = function () {
        };
        Tutorial1.prototype.update = function () {
            for (var i = 0; i < this.ghostTexts.length; i++) {
                this.ghostTexts[i].x = Math.floor(this.ghosts[i].x + this.ghosts[i].width / 2);
                this.ghostTexts[i].y = Math.floor(this.ghosts[i].y + this.ghosts[i].height / 2);
            }
            if (!this.canPress) {
                this.timer--;
            }
            if (this.timer == 0) {
                this.canPress = true;
                this.timer = 25;
            }
            for (var i = 0; i < this.tiles.length; i++) {
                this.game.physics.arcade.collide(this.player, this.tiles[i], this.player.collisionHandler, null, this);
                for (var j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.tiles[i], this.ghosts[j].collisionHandler, null, this);
                }
            }
            for (var i = 0; i < this.traps.length; i++) {
                this.game.physics.arcade.collide(this.player, this.traps[i], this.trapCollisionHandler, null, this);
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
            for (var i = 0; i < this.collectibles.length; i++) {
                this.game.physics.arcade.overlap(this.player, this.collectibles[i], this.collectibleCollisionHandler, null, this);
            }
            if (this.game.physics.arcade.overlap(this.player, this.exit, this.exitCollisionHandler, null, this)) {
            }
            for (var i = 0; i < this.ghosts.length; i++) {
                this.game.physics.arcade.collide(this.player, this.ghosts[i], this.ghostCollisionHandler, null, this);
            }
        };
        Tutorial1.prototype.collectibleCollisionHandler = function (obj1, obj2) {
            obj2.destroy(true);
            this.score++;
            this.scoreText.text = 'Score: ' + this.score;
        };
        Tutorial1.prototype.ghostCollisionHandler = function (obj1, obj2) {
            obj2.body.velocity.x = 0;
        };
        Tutorial1.prototype.trapCollisionHandler = function (obj1, obj2) {
            obj1.isDead = true;
            this.score = 0;
            this.scoreText.text = 'Score: ' + this.score;
        };
        Tutorial1.prototype.exitCollisionHandler = function (obj1, obj2) {
            this.game.state.start('Tutorial2');
        };
        // Create
        Tutorial1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'Background');
            this.loadLevel();
            this.scoreText = this.game.add.text(10, 10, 'Score: ' + this.score, {
                font: '15px Arial'
            });
        };
        Tutorial1.prototype.restart = function () {
            this.score = 0;
        };
        // Adds a ghost to the level
        Tutorial1.prototype.addGhost = function () {
            var ghost = new MadHacks.Ghost(this.game, this.player.originalX, this.player.originalY, this.player.actions);
            this.ghosts.push(ghost);
            var ghostText = this.game.add.text(Math.floor(ghost.x + ghost.width / 2), Math.floor(ghost.y + ghost.height / 2), '' + this.ghosts.length);
            ghostText.anchor.set(0.5);
            this.ghostTexts.push(ghostText);
            this.player.actions = this.player.actions.splice(0, this.player.actions.length);
            this.player.originalY = this.player.y;
            this.player.originalX = this.player.x;
        };
        return Tutorial1;
    }(Phaser.State));
    MadHacks.Tutorial1 = Tutorial1;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Tutorial1.js.map
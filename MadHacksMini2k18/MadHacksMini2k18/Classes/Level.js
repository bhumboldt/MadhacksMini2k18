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
    var Level = /** @class */ (function (_super) {
        __extends(Level, _super);
        function Level() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.level = [
                'xxxxxxxxxxxxxxxxxxxx',
                'w                  w',
                'w                  w',
                'w                  w',
                'w                  w',
                'w        c         w',
                'w         w        w',
                'w s       w        w',
                'w p       w        w',
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
            _this.walls = [];
            _this.ghostSpawnX = 0;
            _this.ghostSpawnY = 0;
            return _this;
        }
        Level.prototype.loadLevel = function () {
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
                    if (this.level[i][j] === 's') {
                        this.ghostSpawnX = j * 32;
                        this.ghostSpawnY = i * 32;
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
                    if (this.level[i][j] === 'w') {
                        var wall = new MadHacks.Wall(this.game, j * 32, i * 32);
                        this.walls.push(wall);
                    }
                }
            }
        };
        Level.prototype.preload = function () {
        };
        Level.prototype.update = function () {
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
            // Tile interactions
            for (var i = 0; i < this.tiles.length; i++) {
                this.game.physics.arcade.collide(this.player, this.tiles[i], this.player.collisionHandler, null, this);
                for (var j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.tiles[i], this.ghosts[j].collisionHandler, null, this);
                }
            }
            // Trap interaction
            for (var i = 0; i < this.traps.length; i++) {
                this.game.physics.arcade.collide(this.player, this.traps[i], this.trapCollisionHandler, null, this);
                for (var j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.traps[i], this.ghosts[j].trapCollisionHandler, null, this);
                }
            }
            for (var i = 0; i < this.collectibles.length; i++) {
                this.game.physics.arcade.overlap(this.player, this.collectibles[i], this.collectibleCollisionHandler, null, this);
            }
            if (this.game.physics.arcade.overlap(this.player, this.exit, this.exitCollisionHandler, null, this)) {
            }
            for (var i = 0; i < this.ghosts.length; i++) {
                this.game.physics.arcade.collide(this.player, this.ghosts[i], this.ghostCollisionHandler, null, this);
                for (var j = 0; j < this.ghosts.length; j++) {
                    if (j !== i) {
                        this.game.physics.arcade.collide(this.ghosts[i], this.ghosts[j], this.ghostghostCollisionHandler, null, this);
                    }
                }
            }
            for (var i = 0; i < this.walls.length; i++) {
                this.game.physics.arcade.collide(this.player, this.walls[i], this.wallCollisionHandler, null, this);
                for (var j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.walls[i], this.wallGhostCollisionHandler, null, this);
                }
            }
            // Spawn a new ghost
            if (this.canPress && this.game.input.keyboard.isDown(Phaser.Keyboard.Z)) {
                this.canPress = false;
                this.player.actions.push(new MadHacks.PlayerActions(this.player.oldAction, this.player.frames));
                this.player.frames = 0;
                this.addGhost();
            }
        };
        Level.prototype.wallGhostCollisionHandler = function (obj1, obj2) {
        };
        Level.prototype.wallCollisionHandler = function (obj1, obj2) {
        };
        Level.prototype.collectibleCollisionHandler = function (obj1, obj2) {
            obj2.destroy(true);
            this.score++;
            this.scoreText.text = 'Score: ' + this.score;
        };
        Level.prototype.ghostCollisionHandler = function (obj1, obj2) {
            obj1.canJump = true;
            obj2.canJump = true;
            obj2.body.velocity.x = 0;
        };
        Level.prototype.ghostghostCollisionHandler = function (obj1, obj2) {
            obj1.canJump = true;
            obj2.canJump = true;
            obj1.body.velocity.x = 0;
            obj2.body.velocity.x = 0;
        };
        Level.prototype.trapCollisionHandler = function (obj1, obj2) {
            obj1.isDead = true;
            this.score = 0;
            this.scoreText.text = 'Score: ' + this.score;
        };
        Level.prototype.exitCollisionHandler = function (obj1, obj2) {
        };
        // Create
        Level.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'Background');
            this.loadLevel();
            this.scoreText = this.game.add.text(10, 10, 'Score: ' + this.score, {
                font: '15px Arial'
            });
            this.game.add.text(100, 100, 'Press \'z\' to spawn a ghost that will mirror your past actions.\nThis can be used to get over obstacles.', {
                font: '15px Arial'
            });
        };
        Level.prototype.restart = function () {
            this.score = 0;
        };
        // Adds a ghost to the level
        Level.prototype.addGhost = function () {
            var ghost = new MadHacks.Ghost(this.game, this.ghostSpawnX, this.ghostSpawnY, this.player.actions);
            this.ghosts.push(ghost);
            var ghostText = this.game.add.text(Math.floor(ghost.x + ghost.width / 2), Math.floor(ghost.y + ghost.height / 2), '' + this.ghosts.length);
            ghostText.anchor.set(0.5);
            this.ghostTexts.push(ghostText);
            this.player.actions = this.player.actions.splice(0, this.player.actions.length);
        };
        return Level;
    }(Phaser.State));
    MadHacks.Level = Level;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Level.js.map
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
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            var _this = _super.call(this, game, x, y, 'Player', 0) || this;
            _this.isDead = true;
            _this.isGhost = false;
            _this.originalX = 0;
            _this.originalY = 0;
            _this.game.physics.arcade.enableBody(_this);
            _this.anchor.setTo(0.5, 0);
            game.add.existing(_this);
            _this.canJump = true;
            _this.jumpTimer = 0;
            _this.pWait = true;
            _this.isDead = false;
            _this.frames = 0;
            _this.oldAction = "WAIT";
            _this.currentAction = "WAIT";
            _this.actions = new Array();
            return _this;
        }
        Player.prototype.preload = function () {
        };
        Player.prototype.update = function () {
            //console.log(this.currentAction);
            if (this.isDead) {
                this.game.state.restart(true, false);
            }
            // Get current action
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
                this.currentAction = "LEFT";
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
                this.currentAction = "RIGHT";
            else
                this.currentAction = "WAIT";
            // If player was and is waiting
            if (this.oldAction === this.currentAction) {
                this.frames++;
            }
            else {
                //console.log("Added action");
                this.actions.push(new MadHacks.PlayerActions(this.oldAction, this.frames));
                this.frames = 0;
            }
            // Movement for the player
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.oldAction = "LEFT";
                this.body.velocity.x = -150;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.oldAction = "RIGHT";
                this.body.velocity.x = 150;
            }
            else {
                this.oldAction = "WAIT";
                this.body.velocity.x = 0;
            }
            // Jumping
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                if (this.canJump) {
                    this.body.velocity.y = -250;
                    this.canJump = false;
                    this.actions.push(new MadHacks.PlayerActions(this.oldAction, this.frames));
                    // Pull out of if statement
                    this.actions.push(new MadHacks.PlayerActions("JUMP", this.frames));
                    this.frames = 0;
                }
            }
        };
        Player.prototype.create = function () {
            // this.game.input.onDown.addOnce()
        };
        Player.prototype.collisionHandler = function (obj1, obj2) {
            if (obj2.y - (obj1.y + obj1.height) < 1 && obj2.y - (obj1.y + obj1.height) >= 0) {
                obj1.body.velocity.y = 0;
                obj1.canJump = true;
            }
        };
        Player.prototype.trapCollisionHandler = function (obj1, obj2) {
            for (var i = 0; i < obj1.actions.length; i++) {
                console.log(obj1.actions[i].actions + " " + obj1.actions[i].frames);
            }
        };
        return Player;
    }(Phaser.Sprite));
    MadHacks.Player = Player;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Player.js.map
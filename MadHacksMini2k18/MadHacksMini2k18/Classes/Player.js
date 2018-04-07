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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            var _this = _super.call(this, game, x, y, 'Player', 0) || this;
            _this.isDead = true;
            _this.isGhost = false;
            _this.game.physics.arcade.enableBody(_this);
            _this.anchor.setTo(0.5, 0);
            game.add.existing(_this);
            _this.isTouchingGround = true;
            _this.pWait = true;
            _this.isDead = false;
            _this.frames = 0;
            _this.oldAction = "WAIT";
            _this.currentAction = "WAIT";
<<<<<<< HEAD
            _this.actions = new Array();
=======
>>>>>>> 08de73585ed54cb61368cb19e17e2d0fb12cca1a
            return _this;
        }
        Player.prototype.preload = function () {
        };
        Player.prototype.update = function () {
<<<<<<< HEAD
            //console.log(this.currentAction);
            if (this.isDead) {
                this.game.state.restart(true, false);
=======
            if (this.isDead) {
                this.game.state.restart(true, false);
            }
            // If player was and is waiting
            if (this.pWait && this.currentAction === "WAIT") {
                this.frames++;
            }
            else if (this.pRight && this.currentAction === "RIGHT") {
                this.frames++;
>>>>>>> 08de73585ed54cb61368cb19e17e2d0fb12cca1a
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
<<<<<<< HEAD
=======
            // Add jump to the action list
            if (this.pJump) {
                this.actions.push(new MadHacks.PlayerActions("JUMP", this.frames));
            }
>>>>>>> 08de73585ed54cb61368cb19e17e2d0fb12cca1a
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
                if (this.isTouchingGround) {
                    this.body.velocity.y = -250;
                    this.isTouchingGround = false;
                    this.actions.push(new MadHacks.PlayerActions(this.oldAction, this.frames));
                    this.actions.push(new MadHacks.PlayerActions("JUMP", this.frames));
                    this.frames = 0;
                }
            }
            // Logic to add to player actions
        };
        Player.prototype.create = function () {
            // this.game.input.onDown.addOnce()
        };
        Player.prototype.collisionHandler = function (obj1, obj2) {
            obj1.body.velocity.y = 0;
            obj1.isTouchingGround = true;
        };
<<<<<<< HEAD
        Player.prototype.trapCollisionHandler = function (obj1, obj2) {
            obj1.isDead = true;
            for (var i = 0; i < obj1.actions.length; i++) {
                console.log(obj1.actions[i].actions + " " + obj1.actions[i].frames);
            }
        };
=======
>>>>>>> 08de73585ed54cb61368cb19e17e2d0fb12cca1a
        return Player;
    }(Phaser.Sprite));
    MadHacks.Player = Player;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Player.js.map
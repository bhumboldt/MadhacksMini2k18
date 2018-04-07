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
            _this.game.physics.arcade.enableBody(_this);
            _this.anchor.setTo(0.5, 0);
            game.add.existing(_this);
            _this.isTouchingGround = true;
            _this.pWait = true;
            _this.frames = 0;
            _this.currentAction = "WAIT";
            return _this;
        }
        Player.prototype.preload = function () {
        };
        Player.prototype.update = function () {
            // If player was and is waiting
            if (this.pWait && this.currentAction === "WAIT") {
                this.frames++;
            }
            else if (this.pRight && this.currentAction === "RIGHT") {
                this.frames++;
            }
            else if (this.pLeft && this.currentAction === "LEFT") {
                this.frames++;
            }
            else {
                this.actions.push(new MadHacks.PlayerActions(this.currentAction, this.frames));
                this.frames = 0;
            }
            // Add jump to the action list
            if (this.pJump) {
                this.actions.push(new MadHacks.PlayerActions("JUMP", this.frames));
            }
            // Movement for the player
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.pLeft = true;
                this.pRight = false;
                this.pWait = false;
                this.currentAction = "LEFT";
                this.body.velocity.x = -150;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.pLeft = false;
                this.pRight = true;
                this.pWait = false;
                this.currentAction = "RIGHT";
                this.body.velocity.x = 150;
            }
            else {
                this.pLeft = false;
                this.pRight = false;
                this.pWait = true;
                this.currentAction = "WAIT";
                this.body.velocity.x = 0;
            }
            // Jumping
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                if (this.isTouchingGround) {
                    this.body.velocity.y = -250;
                    this.isTouchingGround = false;
                }
            }
            // Logic to add to player actions
        };
        Player.prototype.create = function () {
        };
        Player.prototype.collisionHandler = function (obj1, obj2) {
            obj1.body.velocity.y = 0;
            obj1.isTouchingGround = true;
        };
        return Player;
    }(Phaser.Sprite));
    MadHacks.Player = Player;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Player.js.map
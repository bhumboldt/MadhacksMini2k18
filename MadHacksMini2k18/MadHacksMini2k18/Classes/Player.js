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
            _this.game.physics.arcade.enableBody(_this);
            _this.anchor.setTo(0.5, 0);
            game.add.existing(_this);
            _this.isTouchingGround = true;
            _this.isDead = false;
            return _this;
        }
        Player.prototype.preload = function () {
        };
        Player.prototype.update = function () {
            if (this.isDead) {
                this.game.state.restart(true, false);
            }
            // Movement for the player
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -150;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 150;
            }
            else {
                this.body.velocity.x = 0;
            }
            // Jumping
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                if (this.isTouchingGround) {
                    this.body.velocity.y = -250;
                    this.isTouchingGround = false;
                }
            }
        };
        Player.prototype.create = function () {
        };
        Player.prototype.collisionHandler = function (obj1, obj2) {
            obj1.body.velocity.y = 0;
            obj1.isTouchingGround = true;
        };
        Player.prototype.trapCollisionHandler = function (obj1, obj2) {
            obj1.isDead = true;
        };
        Player.prototype.collectibleCollisionHandler = function (obj1, obj2) {
            obj2.destroy(true);
        };
        return Player;
    }(Phaser.Sprite));
    MadHacks.Player = Player;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Player.js.map
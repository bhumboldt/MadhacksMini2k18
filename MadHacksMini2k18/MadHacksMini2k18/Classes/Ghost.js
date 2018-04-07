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
    var Ghost = /** @class */ (function (_super) {
        __extends(Ghost, _super);
        function Ghost(game, x, y, actions) {
            var _this = _super.call(this, game, x, y, 'Player', 0) || this;
            _this.game.physics.arcade.enableBody(_this);
            game.add.existing(_this);
            _this.isTouchingGround = true;
            _this.actions = JSON.parse(JSON.stringify(actions));
            for (var i = 0; i < actions.length; i++) {
                console.log(actions[i].actions + " " + actions[i].frames);
            }
            var curAction = actions.shift();
            _this.action = curAction.actions;
            _this.frames = curAction.frames;
            _this.canJump = true;
            return _this;
        }
        Ghost.prototype.preload = function () {
        };
        Ghost.prototype.update = function () {
            console.log("Ghost action " + this.action + "can jump " + this.canJump);
            if (!this.freeze) {
                if (this.action === "LEFT") {
                    this.body.velocity.x = -150;
                }
                else if (this.action === "RIGHT") {
                    this.body.velocity.x = 150;
                }
                else {
                    this.body.velocity.x = 0;
                }
                // Jumping
                if (this.action === "JUMP") {
                    if (this.canJump) {
                        this.body.velocity.y = -250;
                        this.canJump = false;
                    }
                    this.frames = 0;
                }
                this.frames--;
                if (this.frames <= 0) {
                    if (this.actions.length > 0) {
                        var curAction = this.actions.shift();
                        this.action = curAction.actions;
                        this.frames = curAction.frames;
                    }
                    else {
                        this.freeze = true;
                    }
                }
            }
            else {
                this.body.velocity.x = 0;
            }
        };
        Ghost.prototype.collisionHandler = function (obj1, obj2) {
            obj1.body.velocity.y = 0;
            obj1.isTouchingGround = true;
        };
        Ghost.prototype.trapCollisionHandler = function (obj1, obj2) {
            obj1.isDead = true;
            obj1.destroy();
            for (var i = 0; i < obj1.actions.length; i++) {
            }
        };
        return Ghost;
    }(Phaser.Sprite));
    MadHacks.Ghost = Ghost;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Ghost.js.map
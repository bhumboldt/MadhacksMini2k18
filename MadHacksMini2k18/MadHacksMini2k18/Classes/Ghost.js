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
            console.log("ACTIONS PASSED IN: \n");
            for (var i = 0; i < actions.length; i++) {
                console.log(actions[i].actions + " " + actions[i].frames);
            }
            var curAction = actions.shift();
            _this.action = curAction.actions;
            _this.frames = curAction.frames;
            console.log("CURRENT ACTOIN: " + _this.action);
            console.log("CURRENT FRAMES: " + _this.frames);
            return _this;
        }
        Ghost.prototype.preload = function () {
        };
        Ghost.prototype.update = function () {
            if (this.isDead) {
                this.destroy();
            }
            console.log("Ghost action: " + this.action);
            if (!this.freeze) {
                if (this.action === "LEFT") {
                    this.body.velocity.x = -150;
                    console.log('LEFTTT');
                }
                else if (this.action === "RIGHT") {
                    this.body.velocity.x = 150;
                    console.log("RIGHTTTT");
                }
                else {
                    this.body.velocity.x = 0;
                    console.log("WAIIITTTT");
                }
                // Jumping
                if (this.action === "JUMP") {
                    if (this.isTouchingGround) {
                        this.body.velocity.y = -250;
                        this.isTouchingGround = false;
                    }
                }
                this.frames--;
                if (this.frames <= 0) {
                    if (this.actions.length > 0) {
                        var curAction = this.actions.shift();
                        this.action = curAction.actions;
                        this.frames = curAction.frames;
                        console.log("CURRENT ACTOIN: " + this.action);
                        console.log("CURRENT FRAMES: " + this.frames);
                    }
                    else {
                        this.freeze = true;
                    }
                }
            }
        };
        Ghost.prototype.collisionHandler = function (obj1, obj2) {
            obj1.body.velocity.y = 0;
            obj1.isTouchingGround = true;
        };
        Ghost.prototype.trapCollisionHandler = function (obj1, obj2) {
            obj1.isDead = true;
            for (var i = 0; i < obj1.actions.length; i++) {
                //console.log(obj1.actions[i].actions + " " + obj1.actions[i].frames);
            }
        };
        return Ghost;
    }(Phaser.Sprite));
    MadHacks.Ghost = Ghost;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Ghost.js.map
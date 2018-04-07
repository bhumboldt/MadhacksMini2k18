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
    var Ghost = (function (_super) {
        __extends(Ghost, _super);
        function Ghost(game, x, y) {
            var _this = _super.call(this, game, x, y, 'Player', 0) || this;
            _this.game.physics.arcade.enableBody(_this);
            _this.anchor.setTo(0.5, 0);
            game.add.existing(_this);
            _this.isTouchingGround = true;
            return _this;
        }
        Ghost.prototype.preload = function () {
        };
        return Ghost;
    }(Phaser.Sprite));
    MadHacks.Ghost = Ghost;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Ghost.js.map
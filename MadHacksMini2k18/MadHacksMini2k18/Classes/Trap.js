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
    var Trap = (function (_super) {
        __extends(Trap, _super);
        function Trap(game, x, y) {
            var _this = _super.call(this, game, x, y, 'Trap', 0) || this;
            _this.game.physics.arcade.enableBody(_this);
            _this.body.allowGravity = false;
            _this.body.immovable = true;
            game.add.existing(_this);
            return _this;
        }
        return Trap;
    }(Phaser.Sprite));
    MadHacks.Trap = Trap;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Trap.js.map
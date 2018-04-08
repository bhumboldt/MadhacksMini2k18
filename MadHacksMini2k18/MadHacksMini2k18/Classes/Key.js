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
    var Key = /** @class */ (function (_super) {
        __extends(Key, _super);
        function Key(game, x, y, id) {
            var _this = _super.call(this, game, x, y, 'Key', 0) || this;
            _this.game.physics.arcade.enableBody(_this);
            _this.body.allowGravity = false;
            _this.body.immovable = true;
            _this.id = id;
            game.add.existing(_this);
            return _this;
        }
        return Key;
    }(Phaser.Sprite));
    MadHacks.Key = Key;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Key.js.map
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
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this, 640, 640, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Boot', MadHacks.Boot, false);
            _this.state.add('Preloader', MadHacks.Preloader, false);
            _this.state.add('MainMenu', MadHacks.MainMenu, false);
            _this.state.add('Level', MadHacks.Level, false);
            _this.state.start('Boot');
            return _this;
        }
        return Game;
    }(Phaser.Game));
    MadHacks.Game = Game;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Game.js.map
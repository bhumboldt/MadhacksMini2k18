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
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.init = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            // Add global gravity
            this.game.physics.arcade.gravity.y = 500;
            // Desktop setup
            this.scale.pageAlignHorizontally = true;
        };
        Boot.prototype.preload = function () {
            // Preload image bar
        };
        Boot.prototype.create = function () {
            this.game.state.start('Preloader');
        };
        return Boot;
    }(Phaser.State));
    MadHacks.Boot = Boot;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Boot.js.map
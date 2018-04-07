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
    var Tutorial1 = /** @class */ (function (_super) {
        __extends(Tutorial1, _super);
        function Tutorial1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tutorial1.prototype.preload = function () {
            this.game.load.image('background', 'Assets/LevelBackground.png');
        };
        Tutorial1.prototype.update = function () {
        };
        // Create
        Tutorial1.prototype.create = function () {
            console.log('suck me');
            this.background = this.add.sprite(0, 0, 'background');
            // Place player at location
            //this.player = new Player(this.game, 130, 284);
        };
        return Tutorial1;
    }(Phaser.State));
    MadHacks.Tutorial1 = Tutorial1;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Tutorial1.js.map
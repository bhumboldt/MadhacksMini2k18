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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.level = [
                'xxxxxxxxxxxxxxxxxxxx',
                'x                  x',
                'x                  x',
                'x                  x',
                'x                  x',
                'x                  x',
                'x                  x',
                'x                  x',
                'x p                x',
                'xxxxxxxxxxxxxxxxxxxx'
            ];
            return _this;
        }
        Tutorial1.prototype.loadLevel = function () {
            for (var i = 0; i < this.level.length; i++) {
                for (var j = 0; j < this.level[i].length; j++) {
                    if (this.level[i][j] === 'x') {
                        this.game.add.sprite(j * 32, i * 32, 'Tile');
                    }
                    if (this.level[i][j] === 'p') {
                        this.player = new MadHacks.Player(this.game, j * 32, i * 32);
                        this.player.body.collideWorldBounds = true;
                    }
                }
            }
        };
        Tutorial1.prototype.preload = function () {
        };
        Tutorial1.prototype.update = function () {
        };
        // Create
        Tutorial1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'Background');
            this.loadLevel();
        };
        return Tutorial1;
    }(Phaser.State));
    MadHacks.Tutorial1 = Tutorial1;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Tutorial1.js.map
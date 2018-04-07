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
    var Tutorial1 = (function (_super) {
        __extends(Tutorial1, _super);
        function Tutorial1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tutorial1.prototype.preload = function () {
        };
        Tutorial1.prototype.update = function () {
        };
        // Create
        Tutorial1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'Background');
            // Place player at location
            this.player = new MadHacks.Player(this.game, 50, 50);
            this.player.body.collideWorldBounds = true;
            //this.player.body.bounce.y = 0.8;
        };
        return Tutorial1;
    }(Phaser.State));
    MadHacks.Tutorial1 = Tutorial1;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Tutorial1.js.map
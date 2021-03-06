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
    var MainMenu = /** @class */ (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'MainMenuBackground');
            console.log('main menu!');
            this.game.add.image(190, 5, 'Logo');
            var button = this.game.add.button((this.game.world.width - 128) / 2, (this.game.world.height - 32) / 2, 'Button', this.startGame, this);
            this.game.add.text(button.x + 20, button.y + 20, 'START');
        };
        MainMenu.prototype.startGame = function (obj) {
            this.game.state.start('Level', true, false);
        };
        return MainMenu;
    }(Phaser.State));
    MadHacks.MainMenu = MainMenu;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=MainMenu.js.map
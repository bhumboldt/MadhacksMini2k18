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
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
            this.load.setPreloadSprite(this.add.sprite(320, 160, 'preloadBar'));
            // Preload all of our shit
            this.load.image('MainMenuBackground', 'Assets/MainMenuBackground.png');
            this.load.image('Background', 'Assets/LevelBackground.png');
            this.load.image('Player', 'Assets/Player.png');
            this.load.image('Tile', 'Assets/Tile.png');
            this.load.image('Exit', 'Assets/Exit.png');
            this.load.image('Trap', 'Assets/Trap.png');
            this.load.image('Lock', 'Assets/Lock.png');
            this.load.image('Key', 'Assets/Key.png');
            this.load.image('Collectible', 'Assets/Collectible.png');
            this.load.image('Wall', 'Assets/Tile.png');
            this.load.image('Button', 'Assets/Button.png');
            this.load.image('Logo', 'Assets/Logo.png');
        };
        Preloader.prototype.create = function () {
            this.game.state.start('MainMenu');
        };
        return Preloader;
    }(Phaser.State));
    MadHacks.Preloader = Preloader;
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=Preloader.js.map
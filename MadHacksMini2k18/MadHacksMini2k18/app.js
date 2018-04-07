var MadHacksMini2k18 = /** @class */ (function () {
    function MadHacksMini2k18() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    MadHacksMini2k18.prototype.preload = function () {
        this.game.load.image('logo', 'phaser2.png');
    };
    MadHacksMini2k18.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    return MadHacksMini2k18;
}());
window.onload = function () {
    var game = new MadHacksMini2k18();
};
//# sourceMappingURL=app.js.map
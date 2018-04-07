var MadHacks;
(function (MadHacks) {
    var MadHacksMini2k18 = (function () {
        function MadHacksMini2k18() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        }
        MadHacksMini2k18.prototype.preload = function () {
            this.game.load.image('logo', 'phaser2.png');
        };
        MadHacksMini2k18.prototype.create = function () {
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
            this.game.state.add('Tutorial1', MadHacks.Tutorial1, false);
            this.game.state.start('Tutorial1');
        };
        return MadHacksMini2k18;
    }());
    MadHacks.MadHacksMini2k18 = MadHacksMini2k18;
    window.onload = function () {
        var game = new MadHacksMini2k18();
    };
})(MadHacks || (MadHacks = {}));
//# sourceMappingURL=app.js.map
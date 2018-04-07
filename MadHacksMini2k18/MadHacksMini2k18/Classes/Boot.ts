module MadHacks {
    export class Boot extends Phaser.State {
        init() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            // Add global gravity
            this.game.physics.arcade.gravity.y = 500;

            // Desktop setup
            this.scale.pageAlignHorizontally = true;
        }

        preload() {
            // Preload image bar
        }

        create() {
            this.game.state.start('Preloader');
        }
    }
}
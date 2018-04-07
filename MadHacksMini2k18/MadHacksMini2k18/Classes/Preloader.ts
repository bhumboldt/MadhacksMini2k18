module MadHacks {
    export class Preloader extends Phaser.State {
        preload() {
            // Preload all of our shit
            this.load.image('MainMenuBackground', 'Assets/MainMenuBackground.png');
        }

        create() {
            this.game.state.start('MainMenu');
        }
    }
}

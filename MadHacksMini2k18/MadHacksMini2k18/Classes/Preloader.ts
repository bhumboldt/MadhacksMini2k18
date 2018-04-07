module MadHacks {
    export class Preloader extends Phaser.State {
        preload() {
            // Preload all of our shit
			this.load.image('MainMenuBackground', 'Assets/MainMenuBackground.png');
			this.load.image('Background', 'Assets/LevelBackground.png');
			this.load.image('Player', 'Assets/Player.png');
        }

        create() {
            this.game.state.start('MainMenu');
        }
    }
}

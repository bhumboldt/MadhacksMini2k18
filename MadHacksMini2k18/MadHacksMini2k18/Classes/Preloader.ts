module MadHacks {
    export class Preloader extends Phaser.State {
        preload() {
            // Preload all of our shit
			this.load.image('MainMenuBackground', 'Assets/MainMenuBackground.png');
			this.load.image('Background', 'Assets/LevelBackground.png');
            this.load.image('Player', 'Assets/Player.png');
            this.load.image('Tile', 'Assets/Tile.png');
            this.load.image('Exit', 'Assets/Exit.png');
            this.load.image('Trap', 'Assets/Trap.png');
        }

        create() {
            this.game.state.start('MainMenu');
        }
    }
}

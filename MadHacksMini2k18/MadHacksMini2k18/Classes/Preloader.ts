module MadHacks {
    export class Preloader extends Phaser.State {
        preload() {
            this.load.setPreloadSprite(this.add.sprite(320, 160, 'preloadBar'));

            // Preload all of our shit
			this.load.image('MainMenuBackground', 'Assets/MainMenuBackground.png');
			this.load.image('Background', 'Assets/LevelBackground.png');
            this.load.image('Player', 'Assets/Player.png');
            this.load.image('Tile', 'Assets/Tile.png');
            this.load.image('Exit', 'Assets/Exit.png');
            this.load.image('Trap', 'Assets/Trap.png');
            this.load.image('Collectible', 'Assets/Collectible.png');
            this.load.image('Wall', 'Assets/Tile.png');
            this.load.image('Button', 'Assets/Button.png');
            this.load.image('Logo', 'Assets/Logo.png');
        }

        create() {
            this.game.state.start('MainMenu');
        }
    }
}

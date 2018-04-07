module MadHacks {

	export class Tutorial1 extends Phaser.State {

		preload() {
			this.game.load.image('background', 'Assets/LevelBackground.png');
		}

		update() {

		}

		// Properties
		background: Phaser.Sprite;
		music: Phaser.Sound;
		player: MadHacks.Player;

		// Create
		create() {
			console.log('suck me');

			this.background = this.add.sprite(0, 0, 'background');

			// Place player at location
			//this.player = new Player(this.game, 130, 284);

		}
	}
}
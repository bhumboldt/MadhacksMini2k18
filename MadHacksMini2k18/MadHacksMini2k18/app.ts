module MadHacks {

	export class MadHacksMini2k18 {

		constructor() {
			this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
		}

		game: Phaser.Game;

		preload() {
			this.game.load.image('logo', 'phaser2.png');
			
		}

		create() {
			var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
			logo.anchor.setTo(0.5, 0.5);

			this.game.state.add('Tutorial1', MadHacks.Tutorial1, false);

			this.game.state.start('Tutorial1');
		}

	}

	window.onload = () => {

		var game = new MadHacksMini2k18();

	};

}
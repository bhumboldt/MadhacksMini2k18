module MadHacks {

	export class Player extends Phaser.Sprite{
		sprite: string;
		isTouchingGround: boolean;

		preload() {

		}

		constructor(game: Phaser.Game, x: number, y: number) {

			super(game, x, y, 'player', 0);
			this.game.physics.arcade.enableBody(this);
			this.anchor.setTo(0.5, 0);
			game.add.existing(this);

		}
		update() {

			// Movement for the player
			if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
				this.body.velocity.x = -150;
			}

			else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
				this.body.velocity.x = 150;
			}

			else {
				this.body.velocity.x = 0;
			}

			// Jumping
			//if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			//	if (!this.isTouchingGround) {
			//		this.body.velocity.y = -150;
			//	} 
			//}

		}

		create() {

		}
	}

}
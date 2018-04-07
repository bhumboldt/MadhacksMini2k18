module MadHacks {

	export class Player extends Phaser.Sprite{
		sprite: string;
        isTouchingGround: boolean;
        isDead = true;

		preload() {

		}

		constructor(game: Phaser.Game, x: number, y: number) {

			super(game, x, y, 'Player', 0);
			this.game.physics.arcade.enableBody(this);
			this.anchor.setTo(0.5, 0);
            game.add.existing(this);
            this.isTouchingGround = true;
            this.isDead = false;
		}
        update() {
            if (this.isDead) {
                this.game.state.restart(true, false);
            }

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
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
				if (this.isTouchingGround) {
                    this.body.velocity.y = -250;
                    this.isTouchingGround = false;
				} 
			}

		}

		create() {

        }

        collisionHandler(obj1: Player, obj2) {
            obj1.body.velocity.y = 0;
            obj1.isTouchingGround = true;

        }

        trapCollisionHandler(obj1: Player, obj2: Trap) {
            obj1.isDead = true;
        }
	}

}
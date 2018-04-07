module MadHacks {

	export class Tile extends Phaser.Sprite {

		constructor(game: Phaser.Game, x: number, y: number) {

			super(game, x, y, 'Tile', 0);
            this.game.physics.arcade.enableBody(this);
            this.body.allowGravity = false;
            this.body.immovable = true;
			game.add.existing(this);
		}
	}
}
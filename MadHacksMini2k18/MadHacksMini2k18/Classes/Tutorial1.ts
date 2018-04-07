module MadHacks {

	export class Tutorial1 extends Phaser.State {

		preload() {
			
		}

		// Properties
		background: Phaser.Sprite;
		music: Phaser.Sound;
		player: MadHacks.Player;
        tile: MadHacks.Tile;

		// Create
        create() {
			this.background = this.add.sprite(0, 0, 'Background');

			// Place player at location
            this.player = new Player(this.game, 50, 50);
            this.tile = new Tile(this.game, 100, 100);
            this.player.body.collideWorldBounds = true;
            //this.player.body.bounce.y = 0.8;

        }

        update() {
            this.game.physics.arcade.collide(this.player, this.tile, this.player.collisionHandler, null, this);
        }
	}
}
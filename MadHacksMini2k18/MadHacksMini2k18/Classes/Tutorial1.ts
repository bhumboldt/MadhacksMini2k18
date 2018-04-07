﻿module MadHacks {

	export class Tutorial1 extends Phaser.State {

		preload() {
			
		}

		update() {

		}

		// Properties
		background: Phaser.Sprite;
		music: Phaser.Sound;
		player: MadHacks.Player;

		// Create
        create() {
			this.background = this.add.sprite(0, 0, 'Background');

			// Place player at location
            this.player = new Player(this.game, 50, 50);
            this.player.body.collideWorldBounds = true;
            //this.player.body.bounce.y = 0.8;

		}
	}
}
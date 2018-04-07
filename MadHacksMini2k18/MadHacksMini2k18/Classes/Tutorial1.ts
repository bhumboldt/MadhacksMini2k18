module MadHacks {

	export class Tutorial1 extends Phaser.State {
        level = [
            'xxxxxxxxxxxxxxxxxxxx',
            'x                  x',
            'x                  x',
            'x                  x',
            'x                  x',
            'x                  x',
            'x                  x',
            'x                  x',
            'x p                x',
            'xxxxxxxxxxxxxxxxxxxx'
        ]

        loadLevel() {
            for (let i = 0; i < this.level.length; i++) {
                for (let j = 0; j < this.level[i].length; j++) {
                    if (this.level[i][j] === 'x') {
                        this.game.add.sprite(j * 32, i * 32, 'Tile');
                    }

                    if (this.level[i][j] === 'p') {
                        this.player = new Player(this.game, j * 32, i * 32);
                        this.player.body.collideWorldBounds = true;
                    }
                }
            }
        }

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

            this.loadLevel();

		}
	}
}
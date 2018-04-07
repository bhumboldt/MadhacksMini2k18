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
            'x p       t        x',
            'xxxxxxxxxxxxxxxxxxex'
        ]
        tiles = [];
        exit: MadHacks.Exit;
        traps = [];

        loadLevel() {
            for (let i = 0; i < this.level.length; i++) {
                for (let j = 0; j < this.level[i].length; j++) {
                    if (this.level[i][j] === 'x') {
                        let tile = new Tile(this.game, j * 32, i * 32);
                        this.tiles.push(tile);
                    }

                    if (this.level[i][j] === 'p') {
                        this.player = new Player(this.game, j * 32, i * 32);
                        this.player.body.collideWorldBounds = true;
                    }

                    if (this.level[i][j] === 'e') {
                        this.exit = new Exit(this.game, j * 32, i * 32);
                    }

                    if (this.level[i][j] === 't') {
                        let trap = new Trap(this.game, j * 32, i * 32);
                        this.traps.push(trap);
                    }
                }
            }
        }

		preload() {
			
		}

        update() {
            for (let i = 0; i < this.tiles.length; i++) {

                this.game.physics.arcade.collide(this.player, this.tiles[i], this.player.collisionHandler, null, this);
            }

            for (let i = 0; i < this.traps.length; i++) {
                this.game.physics.arcade.collide(this.player, this.traps[i], this.player.trapCollisionHandler, null, this);
            }
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
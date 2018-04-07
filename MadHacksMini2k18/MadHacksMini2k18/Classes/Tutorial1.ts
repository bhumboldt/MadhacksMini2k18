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
        ghosts = [];
        timer = 1000;
        canPress = true;
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
            if (!this.canPress) {
                this.timer--;
            }

            if (this.timer == 0) {
                this.canPress = true;
                this.timer = 100;
            }

            for (let i = 0; i < this.tiles.length; i++) {

                this.game.physics.arcade.collide(this.player, this.tiles[i], this.player.collisionHandler, null, this);
                for (let j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.tiles[i], this.ghosts[j].collisionHandler, null, this);
                }
            }

            for (let i = 0; i < this.traps.length; i++) {
                this.game.physics.arcade.collide(this.player, this.traps[i], this.player.trapCollisionHandler, null, this);
                for (let j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.traps[i], this.ghosts[j].trapCollisionHandler, null, this);
                }
            }

            if (this.canPress && this.game.input.keyboard.isDown(Phaser.Keyboard.Z)) {
                this.canPress = false;
                this.player.actions.push(new PlayerActions(this.player.oldAction, this.player.frames));
                this.player.frames = 0;
                this.addGhost();
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

        // Adds a ghost to the level
        addGhost() {
            this.ghosts.push(new Ghost(this.game, 100, 100, this.player.actions));
        }
	}
}
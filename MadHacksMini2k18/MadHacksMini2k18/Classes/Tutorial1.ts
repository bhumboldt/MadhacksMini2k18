module MadHacks {

	export class Tutorial1 extends Phaser.State {
        level = [
            'xxxxxxxxxxxxxxxxxxxx',
            'x                  x',
            'x                  x',
            'x                  x',
            'x                  x',
            'x        c         x',
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
        collectibles = [];
        score = 0;
        scoreText: Phaser.Text;
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

                    if (this.level[i][j] === 'c') {
                        let collectible = new Collectible(this.game, j * 32, i * 32);
                        this.collectibles.push(collectible);
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
                this.game.physics.arcade.collide(this.player, this.traps[i], this.trapCollisionHandler, null, this);
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

            for (let i = 0; i < this.collectibles.length; i++) {
                this.game.physics.arcade.overlap(this.player, this.collectibles[i], this.collectibleCollisionHandler, null, this);
            }

            if (this.game.physics.arcade.overlap(this.player, this.exit, this.exitCollisionHandler, null, this)) {

            }

            for (let i = 0; i < this.ghosts.length; i++) {
                this.game.physics.arcade.collide(this.player, this.ghosts[i], this.ghostCollisionHandler, null, this);
            }
        }

        collectibleCollisionHandler(obj1: Player, obj2: Collectible) {
            obj2.destroy(true);
            this.score++;
            this.scoreText.text = 'Score: ' + this.score;
        }

        ghostCollisionHandler(obj1: Player, obj2: Ghost) {

        }

        trapCollisionHandler(obj1: Player, obj2: Trap) {
            obj1.isDead = true;
            this.score = 0;
            this.scoreText.text = 'Score: ' + this.score;
        }

        exitCollisionHandler(obj1: Player, obj2: Exit) {
            this.game.state.start('Tutorial2');
        }

		// Properties
		background: Phaser.Sprite;
		music: Phaser.Sound;
		player: MadHacks.Player;

		// Create
        create() {
            this.background = this.add.sprite(0, 0, 'Background');
            this.loadLevel();
            this.scoreText = this.game.add.text(10, 10, 'Score: ' + this.score, {
                font: '15px Arial'
            });
        }

        restart() {
            this.score = 0;
        }

        // Adds a ghost to the level
        addGhost() {
            this.ghosts.push(new Ghost(this.game, 100, 100, this.player.actions));
        }
	}
}
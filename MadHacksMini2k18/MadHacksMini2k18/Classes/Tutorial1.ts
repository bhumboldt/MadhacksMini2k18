module MadHacks {

	export class Tutorial1 extends Phaser.State {
        level = [
            'xxxxxxxxxxxxxxxxxxxx',
            'w                  w',
            'w                  w',
            'w                  w',
            'w                  w',
            'w        c         w',
            'w                  w',
            'w                  w',
            'w p       t        w',
            'xxxxxxxxxxxxxxxxxxex'
        ]
        tiles = [];
        exit: MadHacks.Exit;
        traps = [];
        ghosts = [];
        timer = 25;
        canPress = true;
        collectibles = [];
        score = 0;
        scoreText: Phaser.Text;
        ghostTexts = [];
        walls = [];

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

                    if (this.level[i][j] === 'w') {
                        let wall = new Wall(this.game, j * 32, i * 32);
                        this.walls.push(wall);
                    }
                }
            }
        }

		preload() {
			
		}

        update() {
            for (let i = 0; i < this.ghostTexts.length; i++) {
                this.ghostTexts[i].x = Math.floor(this.ghosts[i].x + this.ghosts[i].width / 2);
                this.ghostTexts[i].y = Math.floor(this.ghosts[i].y + this.ghosts[i].height / 2);
            }

            if (!this.canPress) {
                this.timer--;
            }

            if (this.timer == 0) {
                this.canPress = true;
                this.timer = 25;
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

            for (let i = 0; i < this.walls.length; i++) {
                this.game.physics.arcade.collide(this.player, this.walls[i], this.wallCollisionHandler, null, this);
                for (let j = 0; j < this.ghosts.length; j++) {
                    this.game.physics.arcade.collide(this.ghosts[j], this.walls[i], this.wallGhostCollisionHandler, null, this);
                }
            }
        }

        wallGhostCollisionHandler(obj1: Ghost, obj2: Wall) {

        }

        wallCollisionHandler(obj1: Player, obj2: Wall) {

        }

        collectibleCollisionHandler(obj1: Player, obj2: Collectible) {
            obj2.destroy(true);
            this.score++;
            this.scoreText.text = 'Score: ' + this.score;
        }

        ghostCollisionHandler(obj1: Player, obj2: Ghost) {
            obj1.canJump = true;
            obj2.body.velocity.x = 0;
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
            let ghost = new Ghost(this.game, this.player.originalX, this.player.originalY, this.player.actions);
            this.ghosts.push(ghost);
            let ghostText = this.game.add.text(Math.floor(ghost.x + ghost.width / 2), Math.floor(ghost.y + ghost.height / 2), '' + this.ghosts.length);
            ghostText.anchor.set(0.5);
            this.ghostTexts.push(ghostText);
            this.player.actions = this.player.actions.splice(0, this.player.actions.length);
            this.player.originalY = this.player.y;
            this.player.originalX = this.player.x;
        }
	}
}
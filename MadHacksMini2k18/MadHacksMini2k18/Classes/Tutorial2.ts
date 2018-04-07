module MadHacks {
    export class Tutorial2 extends Phaser.State {
        level = [
            'xxxxxxxxxxxxxxxexxxx',
            'x                  x',
            'x                  x',
            'x t                x',
            'x             c   xx',
            'x        c         x',
            'x             c   xx',
            'x   c              x',
            'x p          t     x',
            'xxxxxxxxxxxxxxxxxtxx'
        ]

        tiles = [];
        exit: MadHacks.Exit;
        traps = [];
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
            for (let i = 0; i < this.tiles.length; i++) {

                this.game.physics.arcade.collide(this.player, this.tiles[i], this.player.collisionHandler, null, this);
            }

            for (let i = 0; i < this.traps.length; i++) {
                this.game.physics.arcade.collide(this.player, this.traps[i], this.trapCollisionHandler, null, this);
            }

            for (let i = 0; i < this.collectibles.length; i++) {
                this.game.physics.arcade.overlap(this.player, this.collectibles[i], this.collectibleCollisionHandler, null, this);
            }

            if (this.game.physics.arcade.overlap(this.player, this.exit, this.exitCollisionHandler, null, this)) {

            }
        }

        collectibleCollisionHandler(obj1: Player, obj2: Collectible) {
            obj2.destroy(true);
            this.score++;
            this.scoreText.text = 'Score: ' + this.score;
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
    }
}
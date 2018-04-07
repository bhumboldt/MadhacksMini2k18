module MadHacks {

    export class Ghost extends Phaser.Sprite {
        sprite: string;
        isTouchingGround: boolean;

        preload() {

        }

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'Player', 0);
            this.game.physics.arcade.enableBody(this);
            this.anchor.setTo(0.5, 0);
            game.add.existing(this);
            this.isTouchingGround = true;
        }



    }
}
module MadHacks {
    export class Collectible extends Phaser.Sprite {
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'Collectible', 0);

            this.game.physics.arcade.enableBody(this);
            this.body.allowGravity = false;
            this.body.immovable = true;
            game.add.existing(this);
        }
    }
}
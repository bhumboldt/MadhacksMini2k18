module MadHacks {
    export class Wall extends Phaser.Sprite {
        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'Wall');

            this.game.physics.arcade.enableBody(this);
            this.body.allowGravity = false;
            this.body.immovable = true;
            game.add.existing(this);
        }
    }
}
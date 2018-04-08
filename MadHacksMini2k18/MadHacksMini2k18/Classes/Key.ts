module MadHacks {
    export class Key extends Phaser.Sprite {
        id: number;
        constructor(game: Phaser.Game, x: number, y: number, id: number) {
            super(game, x, y, 'Key', 0);

            this.game.physics.arcade.enableBody(this);
            this.body.allowGravity = false;
            this.body.immovable = true;
            this.id = id;
            game.add.existing(this);
        }
    }
}
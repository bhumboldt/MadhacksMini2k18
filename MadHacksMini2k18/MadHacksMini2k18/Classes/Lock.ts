module MadHacks {

    export class Lock extends Phaser.Sprite {
        id: number;
        constructor(game: Phaser.Game, x: number, y: number, id: number) {
            super(game, x, y, 'Lock', 0);
            this.id = id;
            this.game.physics.arcade.enableBody(this);
            this.body.allowGravity = false;
            this.body.immovable = true;
            game.add.existing(this);
        }
    }
}
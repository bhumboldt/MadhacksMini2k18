module MadHacks {
    export class MainMenu extends Phaser.State {
        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        create() {
            this.background = this.add.sprite(0, 0, 'MainMenuBackground');
            console.log('main menu!');

            this.input.onDown.addOnce(this.startGame, this);
        }

        startGame() {
            this.game.state.start('Level', true, false);
        }
    }
}
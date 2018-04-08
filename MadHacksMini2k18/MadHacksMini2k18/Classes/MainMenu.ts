module MadHacks {
    export class MainMenu extends Phaser.State {
        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        create() {
            this.background = this.add.sprite(0, 0, 'MainMenuBackground');
            console.log('main menu!');
            this.game.add.image(190, 5, 'Logo');
            let button = this.game.add.button((this.game.world.width - 128) / 2, (this.game.world.height - 32) / 2, 'Button', this.startGame, this);
            this.game.add.text(button.x + 20, button.y + 20, 'START');
        }

        startGame(obj) {
            this.game.state.start('Level', true, false);
        }
    }
}
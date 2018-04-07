module MadHacks {
    export class Game extends Phaser.Game {
        constructor() {
            super(640, 320, Phaser.AUTO, 'content', null);

            this.state.add('Boot', MadHacks.Boot, false);
            this.state.add('Preloader', MadHacks.Preloader, false);
            this.state.add('MainMenu', MadHacks.MainMenu, false);
            this.state.add('Tutorial1', MadHacks.Tutorial1, false);
            this.state.add('Tutorial2', MadHacks.Tutorial2, false);
            this.state.start('Boot');
        }
    }
}


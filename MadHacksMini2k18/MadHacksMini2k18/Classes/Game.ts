﻿module MadHacks {
    export class Game extends Phaser.Game {
        constructor() {
            super(640, 640, Phaser.AUTO, 'content', null);

            this.state.add('Boot', MadHacks.Boot, false);
            this.state.add('Preloader', MadHacks.Preloader, false);
            this.state.add('MainMenu', MadHacks.MainMenu, false);
            this.state.add('Level', MadHacks.Level, false);
            this.state.start('Boot');
        }
    }
}


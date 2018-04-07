module MadHacks {

    export class Ghost extends Phaser.Sprite {
        sprite: string;
        isTouchingGround: boolean;
        isDead: boolean;
        frames: number;
        freeze: boolean;
        action: string;
        actions: PlayerActions[];
        preload() {

        }

        constructor(game: Phaser.Game, x: number, y: number, actions: PlayerActions[]) {

            super(game, x, y, 'Player', 0);
            this.game.physics.arcade.enableBody(this);
            this.anchor.setTo(0.5, 0);
            game.add.existing(this);
            this.isTouchingGround = true;
            this.actions = actions;
            let curAction = actions.shift();
            this.action = curAction.actions;
            this.frames = curAction.frames;
            console.log("ACTIONS PASSED IN: \n");
            for (let i = 0; i < actions.length; i++) {
                console.log(actions[i].actions + " " + actions[i].frames);
            }
        }

        update() {
            if (this.isDead) {
                this.destroy();
            }
            console.log("Ghost action: " + this.action);

            if (!this.freeze) {
                if (this.action = "LEFT") {
                    this.body.velocity.x = -150;
                }

                else if (this.action = "RIGHT") {
                    this.body.velocity.x = 150;
                }

                else {
                    this.body.velocity.x = 0;
                }

                // Jumping
                //if (this.action = "JUMP") {
                //    if (this.isTouchingGround) {
                //        this.body.velocity.y = -250;
                //        this.isTouchingGround = false;
                //    }
                //}

                this.frames--;
                if (this.frames == 0) {
                    if (this.actions.length > 0) {
                        let curAction = this.actions.shift();
                        this.action = curAction.actions;
                        this.frames = curAction.frames;
                    } else {
                        this.freeze = true;
                    }
                }
            }
        }

        collisionHandler(obj1: Ghost, obj2) {
            obj1.body.velocity.y = 0;
            obj1.isTouchingGround = true;
        }

        trapCollisionHandler(obj1: Ghost, obj2: Trap) {
            obj1.isDead = true;
            for (let i = 0; i < obj1.actions.length; i++) {
                //console.log(obj1.actions[i].actions + " " + obj1.actions[i].frames);
            }
        }
    }
}
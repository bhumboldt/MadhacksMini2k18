﻿module MadHacks {

    export class Ghost extends Phaser.Sprite {
        sprite: string;
        isTouchingGround: boolean;
        canJump: boolean;
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
            game.add.existing(this);
            this.isTouchingGround = true;
            this.actions = JSON.parse(JSON.stringify(actions));
            for (let i = 0; i < actions.length; i++) {
                console.log(actions[i].actions + " " + actions[i].frames);
            }
            let curAction = actions.shift();
            this.action = curAction.actions;
            this.frames = curAction.frames;  
            this.canJump = true;
        }

        update() {
            console.log("Ghost action " + this.action + "can jump " + this.canJump);
            if (!this.freeze) {
                if (this.action === "LEFT") {
                    this.body.velocity.x = -150;
                }

                else if (this.action === "RIGHT") {
                    this.body.velocity.x = 150;
                }

                else {
                    this.body.velocity.x = 0;
                }

                // Jumping
                if (this.action === "JUMP") {
                    if (this.canJump) {
                        this.body.velocity.y = -325;
                        this.canJump = false;
                    }
                    this.frames = 0;
                }

                this.frames--;
                if (this.frames <= 0) {
                    if (this.actions.length > 0) {
                        let curAction = this.actions.shift();
                        this.action = curAction.actions;
                        this.frames = curAction.frames;
                    } else {
                        this.freeze = true;
                    }
                }
            } else {
                this.body.velocity.x = 0;
            }
        }

        collisionHandler(obj1: Ghost, obj2) {
            if (obj2.y - (obj1.y + obj1.height) < 1 && obj2.y - (obj1.y + obj1.height) >= 0) {
                obj1.canJump = true;
            } else if (obj1.body.velocity.y === 0) {
                obj1.canJump = true;
            }
        }

        trapCollisionHandler(obj1: Ghost, obj2: Trap) {
            obj1.isDead = true;
            obj1.destroy();
            for (let i = 0; i < obj1.actions.length; i++) {
            }
        }
    }
}
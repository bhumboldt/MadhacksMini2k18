﻿module MadHacks {

	export class Player extends Phaser.Sprite{
		sprite: string;
        canJump: boolean;
        jumpTimer: number;
        pLeft: boolean;
        isDead = true;
        isGhost = false;
        pRight: boolean;
        pWait: boolean;
        pJump: boolean;
        actions: PlayerActions[];
        frames: number;
        oldAction: string;
        currentAction: string;
        originalX = 0;
        originalY = 0;
		preload() {

		}

		constructor(game: Phaser.Game, x: number, y: number) {

			super(game, x, y, 'Player', 0);
			this.game.physics.arcade.enableBody(this);
			this.anchor.setTo(0.5, 0);
            game.add.existing(this);
            this.canJump = true;
            this.jumpTimer = 0;
            this.pWait = true;
            this.isDead = false;
            this.frames = 0;
            this.oldAction = "WAIT";
            this.currentAction = "WAIT";
            this.actions = new Array<PlayerActions>();
            this.originalX = this.x;
            this.originalY = this.y;
        }

        update() {
            //console.log(this.currentAction);
            if (this.isDead) {
                this.game.state.restart(true, false);
            }
            //if (this.body.velocity.y === 0) {
            //    if (this.jumpTimer === 0) {
            //        this.canJump = true;
            //    } else {
            //        this.jumpTimer = 0;
            //        console.log("reduce timer");
            //    }
            //}
            // Get current action
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) this.currentAction = "LEFT";
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) this.currentAction = "RIGHT";
            else this.currentAction = "WAIT";

            // If player was and is waiting
            if (this.oldAction === this.currentAction) {
                this.frames++;
            }

            // Add the action to the list of actions once the action changes
            else {
                //console.log("Added action");
                this.actions.push(new PlayerActions(this.oldAction, this.frames));
                this.frames = 0;
            }

			// Movement for the player
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.oldAction = "LEFT";
				this.body.velocity.x = -150;
			}

            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.oldAction = "RIGHT"
				this.body.velocity.x = 150;
			}

            else {
                this.oldAction = "WAIT";
				this.body.velocity.x = 0;
			}

			// Jumping
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                console.log("is jumping " + this.body.velocity.y);
                if (this.canJump) {
                    console.log("jumping");
                    this.body.velocity.y = -250;
                    this.jumpTimer = 1;
                    this.canJump = false;
                    this.actions.push(new PlayerActions(this.oldAction, this.frames));
                    this.actions.push(new PlayerActions("JUMP", this.frames));
                    this.frames = 0;
				} 
			}
		}

		create() {
           // this.game.input.onDown.addOnce()
        }

        collisionHandler(obj1: Player, obj2) {
            obj1.body.velocity.y = 0;
            obj1.canJump = true;
        }

        trapCollisionHandler(obj1: Player, obj2: Trap) {
            for (let i = 0; i < obj1.actions.length; i++) {
                console.log(obj1.actions[i].actions + " " + obj1.actions[i].frames);
            }
        }
	}

}
﻿module MadHacks {

	export class Player extends Phaser.Sprite{
		sprite: string;
        isTouchingGround: boolean;
        pLeft: boolean;
        isDead = true;
        pRight: boolean;
        pWait: boolean;
        pJump: boolean;
        actions: PlayerActions[];
        frames: number;
        currentAction: string;
		preload() {

		}

		constructor(game: Phaser.Game, x: number, y: number) {

			super(game, x, y, 'Player', 0);
			this.game.physics.arcade.enableBody(this);
			this.anchor.setTo(0.5, 0);
            game.add.existing(this);
            this.isTouchingGround = true;
            this.pWait = true;
            this.isDead = false;
            this.frames = 0;
            this.currentAction ="WAIT";
		}
        update() {
            if (this.isDead) {
                this.game.state.restart(true, false);
            }

            // If player was and is waiting
            if (this.pWait && this.currentAction === "WAIT") {
                this.frames++;
            }

            // If player was and is moving right
            else if (this.pRight && this.currentAction === "RIGHT") {
                this.frames++;
            }

            // If player was and is moving left
            else if (this.pLeft && this.currentAction === "LEFT") {
                this.frames++;
            }

            // Add the action to the list of actions once the action changes
            else {
                this.actions.push(new PlayerActions(this.currentAction, this.frames));
                this.frames = 0;
            }

            // Add jump to the action list
            if (this.pJump) {
                this.actions.push(new PlayerActions("JUMP", this.frames));
                
            }

			// Movement for the player
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.pLeft = true;
                this.pRight = false;
                this.pWait = false;
                this.currentAction = "LEFT";
				this.body.velocity.x = -150;
			}

            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.pLeft = false;
                this.pRight = true;
                this.pWait = false;
                this.currentAction = "RIGHT";
				this.body.velocity.x = 150;
			}

            else {
                this.pLeft = false;
                this.pRight = false;
                this.pWait = true;
                this.currentAction = "WAIT";
				this.body.velocity.x = 0;
			}

			// Jumping
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
				if (this.isTouchingGround) {
                    this.body.velocity.y = -250;
                    this.isTouchingGround = false;
				} 
			}


            // Logic to add to player actions



		}

		create() {

        }

        collisionHandler(obj1: Player, obj2) {
            obj1.body.velocity.y = 0;
            obj1.isTouchingGround = true;

        }

        trapCollisionHandler(obj1: Player, obj2: Trap) {
            obj1.isDead = true;
        }

        collectibleCollisionHandler(obj1: Player, obj2: Collectible) {
            obj2.destroy(true);
        }
	}

}
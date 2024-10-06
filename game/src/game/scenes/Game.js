// import { Scene } from 'phaser';
// import { EventBus } from '../EventBus';
// import Phaser from 'phaser';

// export class Game extends Scene {

//     constructor() {
//         super('Game');
//         this.player;
//         this.stars;
//         this.bombs;
//         this.platforms;
//         this.cursors;
//         this.score = 0;
//         this.gameOver = false;
//         this.scoreText;
//     }

//     preload() {
//         this.load.setPath('assets');

//         this.load.image('star', 'star.png');
//         this.load.image('bg', 'skyhills.png');
//         this.load.image('graybg', 'Gray.png');
//         this.load.image('background', 'bg.png');
//         this.load.image('sky', 'sky.png');
//         this.load.image('logo', 'logo.png');
//         this.load.image('ground', 'platform.png');
//         this.load.image('star', 'star.png');
//         this.load.image('bomb', 'bomb.png');
//         this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 });
//         this.load.spritesheet('block', 'Terrain.png', { frameWidth: 50, frameHeight: 50 });
//     }

//     create() {
//         //  A simple background for our game
//         // this.add.image(512, 384, 'bg').setScale(4);

//         //  The platforms group contains the ground and the 2 ledges we can jump on
//         this.platforms = this.physics.add.staticGroup();

//         //  Here we create the ground.
//         //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
//         this.platforms.create(-1000, 650, 'ground').setScale(7).refreshBody();

//         //  Now let's create some ledges
//         // this.add.image(0, 0, 'ground').setOrigin(0, 0).setScale(2).refreshBody();
//         this.platforms.create(512, 768, 'ground').setScale(3).refreshBody();
//         this.platforms.create(1800, 650, 'ground').setScale(5).refreshBody();
//         this.platforms.create(850, 300, 'ground');
//         this.platforms.create(50, 150, 'ground');

//         // The player and its settings
//         this.player = this.physics.add.sprite(100, 450, 'dude').setScale(2);

//         //  Player physics properties. Give the little guy a slight bounce.
//         this.player.setBounce(0.2);
//         this.player.setCollideWorldBounds(true);

//         //  Our player animations, turning, walking left and walking right.
//         this.anims.create({
//             key: 'left',
//             frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'turn',
//             frames: [{ key: 'dude', frame: 4 }],
//             frameRate: 20
//         });

//         this.anims.create({
//             key: 'right',
//             frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         //  Input Events
//         this.cursors = this.input.keyboard.createCursorKeys();

//         //  Some stars to collect
//         this.stars = this.physics.add.group({
//             key: 'star',
//             repeat: 1,
//             setXY: { x: 200, y: 0, stepX: 300 }
//         });

//         this.stars.children.iterate(function (child) {
//             child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
//         });

//         //Add obstacles
//         this.bombs = this.physics.add.group();

//         //  The score
//         this.scoreText = this.add.text(850, 20, 'score: 0', { fontSize: '32px', fill: '#000' });

//         //  Collide the player and the stars with the platforms
//         this.physics.add.collider(this.player, this.platforms);
//         this.physics.add.collider(this.stars, this.platforms);
//         this.physics.add.collider(this.bombs, this.platforms);

//         //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
//         this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

//         this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);


//         // this.add.image(512, 384, 'background');
//         // this.add.image(512, 350, 'logo').setDepth(100);
//         // this.add.text(512, 490, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
//         //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
//         //     stroke: '#000000', strokeThickness: 8,
//         //     align: 'center'
//         // }).setOrigin(0.5).setDepth(100);

//         EventBus.emit('current-scene-ready', this);

//     }

//     //disable physics body - make invisible/inactive
//     collectStar(player, star) {
//         star.disableBody(true, true);

//         //update score after collision  
//         this.score += 1;
//         this.scoreText.setText('Score: ' + this.score);

//         //check how many stars left
//         // if none, create more stars
//         if (this.stars.countActive(true) === 0) {
//             //  A new batch of stars to collect
//             this.stars.children.iterate(function (child) {

//                 // set at default x (spec in earlier) & diff Y postion 0
//                 child.enableBody(true, child.x, 0, true, true);

//             });

//             //pick random X - place opposit side of player
//             var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

//             var bomb = this.bombs.create(x, 16, 'bomb');
//             bomb.setBounce(0.2);
//             bomb.setCollideWorldBounds(true);
//             bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
//             bomb.allowGravity = false;

//         }
//     }

//     //stop game & turn player red
//     hitBomb(player) {
//         this.physics.pause();

//         player.setTint(0xff0000);

//         player.anims.play('turn');

//         this.gameOver = true;
//         //game just pauses, no game over screen overlay 
//     }

//     update() {
//         if (this.gameOver) {
//             return;
//             //route to lesson
//         }
//         // left is down - being pressed
//         if (this.cursors.left.isDown) {
//             this.player.setVelocityX(-500);

//             this.player.anims.play('left', true);
//         }
//         else if (this.cursors.right.isDown) {
//             this.player.setVelocityX(500);

//             this.player.anims.play('right', true);
//         }
//         else {
//             //no key pressed
//             this.player.setVelocityX(0);

//             this.player.anims.play('turn');
//         }
//         // jumping - only when touching ground, not in mid-air (unlike flappy)
//         if (this.cursors.up.isDown)// && this.player.body.touching.down)
//         {
//             this.player.setVelocityY(-330);
//         }
//     }
// }


import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import Phaser from 'phaser';

export class Game extends Scene {

    constructor() {
        super('Game');
        // this.player;
        // this.stars;
        // this.platforms;
        // this.cursors;
        this.score = 0;
        this.gameOver = false;
        // this.scoreText;
        // this.bigStar; // The main target star
        // this.smallStar; // The dangerous star
        // this.correctText;
    }

    preload() {
        this.load.setPath('assets');

        this.load.image('star', 'star.png');
        this.load.image('bg', 'skyhills.png');
        this.load.image('graybg', 'Gray.png');
        this.load.image('background', 'bg.png');
        this.load.image('sky', 'sky.png');
        this.load.image('logo', 'logo.png');
        this.load.image('ground', 'platform.png');
        this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('block', 'Terrain.png', { frameWidth: 50, frameHeight: 50 });
    }

    create() {
        this.platforms = this.physics.add.staticGroup();

        // Creating the ground
        this.platforms.create(-1000, 650, 'ground').setScale(7).refreshBody();
        this.platforms.create(512, 768, 'ground').setScale(3).refreshBody();
        this.platforms.create(1800, 650, 'ground').setScale(5).refreshBody();
        this.platforms.create(850, 300, 'ground');
        this.platforms.create(50, 150, 'ground');

        // The player and its settings
        this.player = this.physics.add.sprite(100, 450, 'dude').setScale(2);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        // Player animations
        this.anims.create({
            key: 'left', frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),frameRate: 10, repeat: -1
        });

        this.anims.create({
            key: 'turn',frames: [{ key: 'dude', frame: 4 }],frameRate: 20
        });

        this.anims.create({
            key: 'right',frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),frameRate: 10,repeat: -1
        });

        // Input Events
        this.cursors = this.input.keyboard.createCursorKeys();

        // Create the stars group and add two stars: one big and one small
        this.stars = this.physics.add.group();

        // Create the main (bigger) target star
        this.bigStar = this.stars.create(200, 0, 'star');
        this.bigStar.setScale(2);  // Scale the big star
        this.bigStar.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));

            // Create correct answer text
            // this.correctText = this.add.text(850, 50, 'Correct Answer: 0', { fontSize: '32px', fill: '#000' });

        // Create the dangerous (smaller) star
        this.smallStar = this.stars.create(500, 0, 'star');
        this.smallStar.setScale(0.8);  // Scale the small star
        this.smallStar.setTint(0xff0000);  // Color the small star red
        this.smallStar.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));

        // The score
        this.scoreText = this.add.text(850, 20, 'score: 0', { fontSize: '32px', fill: '#000' });

        // Collide the player and the stars with the platforms
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);

        // Check for overlap between player and the big star (collect it)
        this.physics.add.overlap(this.player, this.bigStar, this.collectStar, null, this);

        // Check for overlap between player and the small star (game over)
        this.physics.add.overlap(this.player, this.smallStar, this.hitSmallStar, null, this);

        EventBus.emit('current-scene-ready', this);
    }

    // When the player collects the big star
    collectStar(player, star) {
        star.disableBody(true, true);

        // Update score after collecting the big star
        this.score += 1;
        this.scoreText.setText('Score: ' + this.score);

        // Respawn both stars at random positions
        this.respawnStars();
    }

    // Respawn the stars at random positions
    respawnStars() {
        // Enable the big star
        this.bigStar.enableBody(true, Phaser.Math.Between(100, 700), 0, true, true);
        // Enable the small star
        this.smallStar.enableBody(true, Phaser.Math.Between(100, 700), 0, true, true);
    }

    // When the player hits the small star (game over)
    hitSmallStar(player) {
        this.physics.pause();
        player.setTint(0xff0000);  // Turn player red
        player.anims.play('turn');
        this.gameOver = true;
    }

    update() {
        if (this.gameOver) {
            return;
        }
        // Player movement logic
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-500);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(500);
            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }

        // Jumping logic
        if (this.cursors.up.isDown) {// && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }
}


import { Scene } from 'phaser';
import { EventBus } from '../EventBus';
import Phaser from 'phaser';

export class Game extends Scene {

    constructor() {
        super('Game');
        // this.player;
        // this.stars;
        // this.bombs;
        // this.platforms;
        // this.cursors;
        this.score = 0;
        this.gameOver = false;
        // this.scoreText;
        // this.questionText;
        // this.answers;
        this.increment = 0;
        this.map = new Map();
        // this.QA;
        this.index = 0;

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
        this.load.image('star', 'star.png');
        this.load.image('bomb', 'bomb.png');
        this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('block', 'Terrain.png', { frameWidth: 48, frameHeight: 48 });
    }

    create() {
        //  A simple background for our game
        this.add.image(512, 384, 'bg').setScale(4).setAlpha(0.9);

        //  Here we create the ground.
        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        //  Now let's create some ledges
        var height = 1024;
        var width = 768;
        var blockSize = 48;
        for (let i = 1; i <= 24; i += 3) {
            this.platforms.create(blockSize * i, width - blockSize / 2, 'block').setFrame(4).setScale(3).refreshBody();
            // console.log('X1:', blockSize * i,'Y1:', width - blockSize / 2);
        }
        for (let i = 1; i <= 9; i += 3) {
            this.platforms.create(blockSize * i + 20, width / 2 - blockSize, 'block').setFrame(4).setScale(3).refreshBody();
            // console.log('X2:', blockSize*i+20,'Y2:', width/3);
            //212,256
        }
        for (let i = 1; i <= 6; i += 3) {
            this.platforms.create(width + i * blockSize, height / 2 - blockSize, 'block').setFrame(4).setScale(3).refreshBody();
            // console.log('X3:', width+i*blockSize,'Y3:', height/2-blockSize);
            //816,464
        }

        // The player and its settings
        this.player = this.physics.add.sprite(100, 450, 'dude').setScale(2);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        //  Our player animations, turning, walking left and walking right.
        this.anims.create({ key: 'left', frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }), frameRate: 10, repeat: -1 });
        this.anims.create({ key: 'turn', frames: [{ key: 'dude', frame: 4 }], frameRate: 20 });
        this.anims.create({ key: 'right', frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }), frameRate: 10, repeat: -1 });

        //  Input Events
        this.cursors = this.input.keyboard.createCursorKeys();

        //  Some stars to collect 
        this.stars = this.physics.add.group();
        var s1 = this.stars.create(212, 110, 'star');
        var s2 = this.stars.create(600, 580, 'star');
        var s3 = this.stars.create(816, 280, 'star');

        // The stars bounce
        // this.stars.children.iterate(function (child) {
        //     child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
        // });

        // List of questions and answers
        this.QA = [
            {
                question: 'Print "Hello" in Java',
                answers: [
                    { text: 'System.out.print("Hello");', correct: true },
                    { text: 'System.print("Hello");', correct: false },
                    { text: 'print("Hello");', correct: false },
                ],
            },
            {
                question: 'Select the primitive data type',
                answers: [
                    { text: 'int', correct: true },
                    { text: 'String', correct: false },
                    { text: 'decimal', correct: false },
                ],
            },
            {
                question: 'Declare array size size 5',
                answers: [
                    { text: 'int[] numbers = new int[5];', correct: true },
                    { text: 'int[5] numbers;', correct: false },
                    { text: 'array int numbers = 5;', correct: false },
                ],
            },
        ];

        // The Question
        this.questionText = this.add.text(width / 2 - this.QA[0 + this.index].question.length * 5, 80, this.QA[0].question, { fontSize: '40px', fill: '#000' });
        var pad = 140;
        // The Answers 
        this.answers = this.physics.add.group();
        var t1 = this.add.text(212 - this.QA[0 + this.index].answers[0].text.length * 5, 110 - pad, this.QA[0 + this.index].answers[0].text, { fontSize: '25px', fill: '#000' });
        var t2 = this.add.text(600 - this.QA[0 + this.index].answers[1].text.length * 5, 580 - pad, this.QA[0 + this.index].answers[1].text, { fontSize: '25px', fill: '#000' });
        var t3 = this.add.text(816 - this.QA[0 + this.index].answers[2].text.length * 5, 280 - pad, this.QA[0 + this.index].answers[2].text, { fontSize: '25px', fill: '#000' });

        this.answers.add(t1);
        this.answers.add(t2);
        this.answers.add(t3);

        this.map.set(s1, t1);
        this.map.set(s2, t2);
        this.map.set(s3, t3);

        //Add obstacles
        this.bombs = this.physics.add.group();

        //  The score
        this.scoreText = this.add.text(850, 20, 'score: 0', { fontSize: '32px', fill: '#000' });

        //  Collide the player and the stars with the platforms
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.answers, this.platforms);
        this.physics.add.collider(this.stars, this.answers);

        // Check if player overlap with correct answer, if he does call the collectStar function
        // if not, call hitBomb function
        this.physics.add.overlap(this.player, s1, this.collectStar, null, this);
        this.physics.add.overlap(this.player, s2, this.hitBomb, null, this);
        this.physics.add.overlap(this.player, s3, this.hitBomb, null, this);

        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);

        EventBus.emit('current-scene-ready', this);
    }

    // player collects star 
    collectStar(player, star) {
        // delete star
        star.disableBody(true, true);
        // delete text
        var text = this.map.get(star);
        if (this.map.get(star)) {
            text.setVisible(false); //hides but still exists in game ;-;
        }

        //update score after collision  
        this.score += 1;
        this.scoreText.setText('Score: ' + this.score);

        // Delete remaining stars
        this.stars.children.iterate(function (child) {
            child.disableBody(true, true);
        });
        // Delete remaining text
        this.answers.children.iterate(function (child) {
            child.setVisible(false);
        });

        this.index++;

        if (this.index >= this.QA.length) {
            // Handle end of questions
            console.log("Game Over! No more questions.");
            return;
            // EDIT X: route to game over screen
        }
        else {
            // Load the next question and answers
            this.loadQA();

            var pad = 150;
            // Create new stars in the same previous positions
            var s1 = this.stars.create(212 + pad, 110, 'star');
            var s2 = this.stars.create(600 + pad, 580, 'star');
            var s3 = this.stars.create(816 + pad, 280, 'star');

            this.physics.add.overlap(this.player, s1, this.collectStar, null, this);
            this.physics.add.overlap(this.player, s2, this.hitBomb, null, this);
            this.physics.add.overlap(this.player, s3, this.hitBomb, null, this);

            // Map the new stars to the corresponding text
            this.map.set(this.stars.getChildren()[0], this.answers.getChildren()[0]);
            this.map.set(this.stars.getChildren()[1], this.answers.getChildren()[1]);
            this.map.set(this.stars.getChildren()[2], this.answers.getChildren()[2]);

            // Generate the text answers for the next question in the same position as before
            var t1 = this.add.text(212 - this.QA[this.index].answers[0].text.length * 5+ pad, 110, this.QA[this.index].answers[0].text, { fontSize: '25px', fill: '#000' });
            var t2 = this.add.text(600 - this.QA[this.index].answers[1].text.length * 5+ pad, 580, this.QA[this.index].answers[1].text, { fontSize: '25px', fill: '#000' });
            var t3 = this.add.text(816 - this.QA[this.index].answers[2].text.length * 5+ pad - 50, 280, this.QA[this.index].answers[2].text, { fontSize: '25px', fill: '#000' });

            this.answers.add(t1);
            this.answers.add(t2);
            this.answers.add(t3);

            // Map the new stars to the corresponding text
            this.map.set(s1, t1);
            this.map.set(s2, t2);
            this.map.set(s3, t3);
        }
    }

    loadQA() {
        console.log('Loading next question and answers');

        // var height = 1024;
        var width = 768;
        // Clear previous text
        this.questionText.setVisible(false);

        // Set new question text
        this.questionText = this.add.text(width / 2 - this.QA[this.index].question.length * 5, 80, this.QA[this.index].question, { fontSize: '40px', fill: '#000' });

        // Clear previous answers
        this.answers.getChildren().forEach(answer => {
            answer.setVisible(false);
        });


    }

    //stop game & turn player red
    hitBomb(player) {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        this.gameOver = true;
        //game just pauses, no game over screen overlay 
    }

    update() {
        if (this.gameOver) {
            return;
            //route to lesson
        }
        // left is down - being pressed
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-500);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(500);

            this.player.anims.play('right', true);
        }
        else {
            //no key pressed
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }
        // jumping - only when touching ground, not in mid-air (unlike flappy)
        if (this.cursors.up.isDown)// && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }
}


import { Game as MainGame } from './scenes/Game';
import { AUTO, Game } from 'phaser';
import  Phaser  from 'phaser';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: AUTO,
    width: 1024,
    height: 768,
    physics: {
        default: "arcade", //physics system - (3) Arcade, Impact, Matter
        arcade: {
            gravity: { y: 500 },
            debug: false,
        },
    },
    parent: 'game-container',
    backgroundColor: '#ffffff',
    scene: [
        MainGame
    ],
    scale: {
        mode: Phaser.Scale.FIT,  // Ensures the game scales to fit the screen
        autoCenter: Phaser.Scale.CENTER_BOTH,  // Centers the game both vertically and horizontally
    }
};

const StartGame = (parent) => {
    return new Game({ ...config, parent });
}

export default StartGame;


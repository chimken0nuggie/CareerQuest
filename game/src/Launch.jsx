import { useRef } from 'react';
// import Phaser from 'phaser';
import { PhaserGame } from './game/PhaserGame';

function Launch ()
{
    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();

    return (
        <div id="launch">
            <PhaserGame ref={phaserRef} />
        </div>
    )
}

export default Launch

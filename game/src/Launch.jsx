import { useRef } from 'react';
import Button from "./miniComponents/Button";
import { Link } from 'react-router-dom';
import { PhaserGame } from './game/PhaserGame';

function Launch() {
    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();

    return (
        <div id="launch">
            <PhaserGame ref={phaserRef} />
            <Link to="/Lesson" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button title='Tutorial' />
            </Link>
        </div>
    )
}

export default Launch


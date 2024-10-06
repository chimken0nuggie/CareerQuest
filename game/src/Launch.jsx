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


// import { useRef, useState } from 'react';
// import { PhaserGame } from './game/PhaserGame';
// import AppHeader from './miniComponents/AppHeader';
// import Overlay from './miniComponents/Overlay';

// function Launch() {
//     //  References to the PhaserGame component (game and scene are exposed)
//     const phaserRef = useRef();
//     const [overlay, setOverlay] = useState(true);

//     return (
//         <div id="launch">
//             {/* <AppHeader/> */}
//             <PhaserGame ref={phaserRef} setOverlay={setOverlay} overlay={overlay}/>
//             {overlay && (
//                 <div className="overlay" onClick={() => setOverlay(false)}></div>
//             )}
//             {overlay && <Overlay/>}
//         </div>
//     )
// }

// export default Launch


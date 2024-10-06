import React from 'react';

export default function Button({title}) {
    return (
        <div className='aButton' style={{ textAlign: 'center', fontSize: '25px', 
                    margin: '10px', padding: '10px', width: '200px',
                    borderStyle: 'solid', borderWidth: '2px', borderRadius: '10px'}}>
            {title}</div>
    );
}
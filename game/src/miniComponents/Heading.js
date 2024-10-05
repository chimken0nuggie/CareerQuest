import React from 'react';

export default function Heading({title}) {
    return (
        <div style={{ textAlign: 'center', color: 'dimgray', fontSize: '30px', fontWeight: 'bold', 
                    margin: '10px' }}>
            {title}</div>
    );
}
import React from 'react';

export default function Heading({title}) {
    return (
        <div style={{ textAlign: 'center', color: 'black', fontSize: '30px', fontWeight: 'bold', 
                    margin: '10px' }}>
            {title}</div>
    );
}
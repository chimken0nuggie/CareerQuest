import React from 'react';
import PaidIcon from '@mui/icons-material/Paid';

export default function Tokens() {
    return (
        <div style={{backgroundColor: 'ghostwhite', display: 'flex', flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    padding: '10px', height: '20px', borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px'
        }}>
            <PaidIcon/>
            <p style={{marginLeft: '5px', fontSize:'20px'}}>132</p>
        </div>
    );
}
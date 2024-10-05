import React from 'react';
import ProjectName from "./ProjectName";
import Tokens from "./Tokens";

export default function AppHeader() {
    return (
        <div style={{width: '95%', margin: '5px',
            display: 'flex', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center'
        }}>
            <ProjectName/>
            <Tokens/>
        </div>
    );
}
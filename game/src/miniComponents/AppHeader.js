import React from 'react';
import ProjectName from "./ProjectName";
import Tokens from "./Tokens";
import FaceIcon from '@mui/icons-material/Face';
import { Link } from 'react-router-dom';

export default function AppHeader() {
    return (
        <div style={{width: '95%', margin: '5px',
            display: 'flex', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center'
        }}>
            <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
                <ProjectName/>
            </Link>
            <div style={{display:'flex', flexDirection:'row', gap: '25px',
                        justifyContent:'flex-end', alignItems:'center'
            }}>
                <Tokens style={{transform: 'scale(1.5)'}}/>
                <FaceIcon style={{transform: 'scale(1.5)'}}/>
            </div>
            
        </div>
    );
}
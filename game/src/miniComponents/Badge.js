import React from 'react'

export default function Badge({title, description}){
    return(
        <div>
            <button className='badgeButton' style={{width:'115px', height: '115px',
                                                    backgroundColor:'ghostwhite', borderRadius: '10px',
                                                    borderStyle:'solid', borderColor:'black'
            }}>
                <span className="badgeTitle" style={{fontWeight: 'bolder', fontSize: 'medium'}}>{title}</span>
                <hr></hr>
                <p style={{marginBottom: '0px'}}>{description}</p>
            </button>
        </div>
    )
}
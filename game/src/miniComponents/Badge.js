import React from 'react'

export default function Badge({title, description}){
    return(
        <div>
            <button className='badgeButton' style={{width:'150px',
                                                    backgroundColor:'ghostwhite', borderRadius: '10px',
                                                    borderStyle:'solid', borderColor:'black', padding: '15px'
            }}>
                <span className="badgeTitle" style={{fontWeight: 'bolder', fontSize: '20px'}}>{title}</span>
                <hr></hr>
                <p style={{marginBottom: '0px', fontSize:'18px'}}>{description}</p>
            </button>
        </div>
    )
}
import React from 'react';

const CareerItem = ({title, des}) => {
    return (
        <div className="button" style={{width: '200px', height: 'auto', 
                    padding: "10px", margin: '10px 20px',
                    display: 'flex', flexDirection: 'column', 
                    alignItems: 'center', borderRadius: '10px', 
                    borderStyle: 'solid', borderWidth: '2px'}}>
            <div style={{ fontSize: '30px', color: 'dimgray', fontWeight: 'bold', fontVariant: 'small-caps' }}>
                {title}
            </div>
            <div style={{backgroundColor:'dimgray', width: '80%', height: '100px', margin: '5px'}}></div>
            <div style={{ fontSize: '18px', color: 'dimgray', width: '80%',
                            textAlign: 'left'}}>
                {des}
            </div>
        </div>
    );
  };

export default CareerItem;
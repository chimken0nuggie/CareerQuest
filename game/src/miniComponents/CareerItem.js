import React from 'react';
import software from "../images/boy-software.png"
import doctor from "../images/girl-doctor.png"
import teacher from "../images/girl-teacher.png"
import lawyer from "../images/boy-lawyer.png"

const CareerItem = ({title, des}) => {

    const careers = {
        Software: "../images/boy-software.png",
        Doctor: "../images/girl-doctor.png",
        Teacher: "../images/girl-teacher.png",
        Lawyer: "../images/boy-lawyer.png"
      };

      const { param } = title;

      const profession = careers[title];


    return (
        <div className="button" style={{width: '200px', height: 'auto', 
                    padding: "15px", margin: '10px 20px',
                    display: 'flex', flexDirection: 'column', 
                    alignItems: 'center', borderRadius: '10px', 
                    borderStyle: 'solid', borderWidth: '2px'}}>
            <div style={{ fontSize: '30px', fontWeight: 'bold'}}>
                {title}
            </div>
            <div style={{backgroundColor:'dimgray', width: '80%', height: '100px', margin: '5px'}}></div>
            <p>{title}</p>
            <p>{profession}</p>
            <img src={{profession}}  alt="image" style={{display:'block', width: '100px'}}/>
            <div style={{ fontSize: '18px', width: '80%',
                            textAlign: 'left'}}>
                {des}
            </div>
        </div>
    );
  };

export default CareerItem;
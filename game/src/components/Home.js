import "../App.css";
import AppHeader from "../miniComponents/AppHeader";
import Badge from "../miniComponents/Badge";
import Heading from "../miniComponents/Heading";
import ProgressBar from "../miniComponents/ProgressBar";
import { Link } from 'react-router-dom';
import Overlay from "../miniComponents/Overlay";
import { useState } from "react";
import software from "../images/boy-software.png"
import doctor from "../images/girl-doctor.png"
import teacher from "../images/girl-teacher.png"
import lawyer from "../images/boy-lawyer.png"

export default function Home() {

    const [overlay, setOverlay] = useState(false);
    return(
        <div className='PageContent' style={{width: '100%', height: '15vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
                                            gap:'20px'
        }}>
            <AppHeader></AppHeader>
            <div className='Content' style={{display: 'flex', flexDirection: 'column'}}>
                <Heading title="Players Stats"/>
                <div className='CharacterAndPlayerInfo' style={{width: '100%', height: 'auto', margin: '20px 40px', 
                            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', 
                            alignItems: 'center', justifyContent: 'space-evenly', gap: '10px'}}>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <img src={software}  alt="software" style={{display:'block', width: '320px'}}/>
                        <h2 style={{color: 'dimgray', margin: '0px', fontSize:'30px', alignContent:'center'}}>
                                TAYLOR
                        </h2>
                    </div>
                    
                    <div className="Player Info" style={{display: 'flex', flexDirection: 'column', gap:'15px'}}>
                        <div className='PlayerStats' style={{backgroundColor:'ghostwhite', borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px',
                                    boxSizing: 'border-box', padding: '10px'}}>
                            <h2 style={{color: 'dimgray', margin: '0px', fontSize:'30px'}}>
                                LEVEL 1
                            </h2>
                            <ProgressBar percentCompleted={50}/>
                            <h3 style={{color: 'dimgray', fontSize: '20px', margin: '0px', marginBottom: '0px'}}>
                                500/1000 XP
                            </h3>
                        </div>
                        <div className="BadgesSection" style={{display: 'flex', flexDirection:'column', gap: '10px'}}>
                            <h2 style={{color: 'dimgray', margin: '0px', fontSize:'30px' }}>BADGES</h2>
                            <div className="BadgesList" style={{width:'100%', display:'flex', flexDirection: 'row',
                                                                flexWrap: 'wrap', gap: '10px', alignItems: 'center'
                            }}>
                                <Badge title='Step by Step' description='Started first career'/>
                                <Badge title='First Payday' description='Got paid $10 from the boss'/>
                                <Badge title='Hard Worker' description='Completed 5 tasks'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='CareerSection' style={{display: 'flex', flexDirection: 'column'}}>
                <Heading title="Careers"/>
                <p style={{margin: '0px', fontSize:'20px'}}>Pick your career path!</p>
                <div className='CareerList' style={{width: '100%', marginTop: '20px', marginBottom:'50px',
                        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                        justifyContent: 'space-evenly', alignItems:'flex-start'}}>
                    <Link to="/greeting" style={{textDecoration:'none', color:'inherit'}}>
                        <div className='CareerButton'>
                            <div className='CareerButtonTitle'>Software</div>
                            <img src={software}  alt="image" className='CareerButtonImg'/>
                            <div className='CareerButtonDes'>
                                Solve real-world problems to improve people's lives.
                            </div>
                        </div>
                    </Link>
                    <div className='CareerButton'>
                        <div className='CareerButtonTitle'>Doctor</div>
                        <img src={doctor}  alt="image" className='CareerButtonImg'/>
                        <div className='CareerButtonDes'>
                            Help clients stay healthy and feel better when they are sick.
                        </div>
                    </div>
                    <div className='CareerButton'>
                        <div className='CareerButtonTitle'>Teacher</div>
                        <img src={teacher}  alt="image" className='CareerButtonImg'/>
                        <div className='CareerButtonDes'>
                            Educate and support students so they can change the world.
                        </div>
                    </div>
                    <div className='CareerButton'>
                        <div className='CareerButtonTitle'>Lawyer</div>
                        <img src={lawyer}  alt="image" className='CareerButtonImg'/>
                        <div className='CareerButtonDes'>
                            Help clients solve their issues and protect their rights.
                        </div>
                    </div>
                </div>
            </div>
            {overlay && (
                <div className="overlay" onClick={() => setOverlay(false)}></div>
            )}
            {overlay && <Overlay/>}
        </div>
    );
};
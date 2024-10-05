import AppHeader from "../miniComponents/AppHeader";
import Badge from "../miniComponents/Badge";
import CareerItem from "../miniComponents/CareerItem";
import Heading from "../miniComponents/Heading";
import ProgressBar from "../miniComponents/ProgressBar";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Home() {

    return(
        <div className='PageContent' style={{width: '100%', height: '15vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <AppHeader></AppHeader>
            <div className='Content' style={{display: 'flex', flexDirection: 'column'}}>
                <Heading title="Name"/>
                <div className='CharacterAndPlayerInfo' style={{width: '100%', height: 'auto', margin: '20px 40px', 
                            display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                            alignItems: 'center', justifyContent: 'space-evenly', gap: '10px'}}>
                    <div className='Character' style={{backgroundColor: 'dimgray', width: '300px', height: "300px"}}></div>
                    <div className="Player Info" style={{display: 'flex', flexDirection: 'column', gap:'15px'}}>
                        <div className='PlayerStats' style={{backgroundColor:'ghostwhite', borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px',
                                    boxSizing: 'border-box', padding: '10px'}}>
                            <h2 style={{color: 'dimgray', margin: '0px' }}>
                                LEVEL 1
                            </h2>
                            <ProgressBar percentCompleted={50}/>
                            <h3 style={{color: 'dimgray', fontSize: '15px', margin: '0px', marginBottom: '0px'}}>
                                500/1000 XP
                            </h3>
                        </div>
                        <div className="BadgesSection" style={{display: 'flex', flexDirection:'column', gap: '10px'}}>
                            <h2 style={{color: 'dimgray', margin: '0px' }}>BADGES</h2>
                            <div className="BadgesList" style={{width:'100%', display:'flex', flexDirection: 'row',
                                                                flexWrap: 'wrap', gap: '10px', alignItems: 'center'
                            }}>
                                <Badge title='Step by Step' description='Started first career'/>
                                <Badge title='First Payday' description='Got paid $10 from the boss'/>
                                <Badge title='Hard Worker' description='Completed 5 tasks'/>
                                <ChevronRightIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='CareerSection' style={{display: 'flex', flexDirection: 'column'}}>
                <Heading title="Careers"/>
                <p style={{margin: '0px'}}>Pick your career path!</p>
                <div className='CareerList' style={{width: '100%', marginTop: '20px', marginBottom:'50px',
                        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                        justifyContent: 'space-evenly', alignItems:'flex-start'}}>
                    <CareerItem title="Software" des="Solve real-world problems to improve people's lives."/>
                    <CareerItem title="Doctor" des="Help clients stay healthy and feel better when they are sick."/>
                    <CareerItem title="Teacher" des="Educate and support students so they can help change the world."/>
                    <CareerItem title="Lawyer" des="Study the law to help clients solve their issues and protect their rights."/>
                </div>
            </div>
        </div>
    );
};
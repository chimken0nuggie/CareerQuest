import Heading from "../miniComponents/Heading";
import Button from "../miniComponents/Button";
import AppHeader from "../miniComponents/AppHeader";
import { Link } from 'react-router-dom';

function Greeting() {
    return (
        <div className='PageContent' style={{display: 'flex', flexDirection: 'column', 
                                            alignItems: 'center'}}>
            <AppHeader/>
            <div className="occupation-avatar" style={{width: '80%', height:'auto', marginTop: '10px', 
                                                        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                                        justifyContent: 'center', gap: '15px'
            }} >
                <div className="left-content" style={{backgroundColor: 'dimgray', width: '300px', height: '420px', 
                                                    marginRight: '20px', marginTop: '20px'}} >

                </div>
                <div className="right-content" style={{display: 'flex', flexDirection: 'column', margin: '5px 30px 30px 30px', flexGrow: '1',  width: '300px',
                }}>
                     <Heading title="Introduction"/>
                    <div className="intro message" style={{backgroundColor: 'ghostwhite', margin: '10px 0px', textAlign: 'left', padding: '15px',
                                                            height: '250px', borderStyle: 'solid', borderWidth: '2px', borderRadius: '10px', fontSize: '18px'
                    }}>
                        <p>Welcome to the software world!</p>
                        <p>As a software engineer, you will be solving many coding problems in order to solve even bigger problems 
                            in the real world. You can do anything from building games to make people's lives more fun or even build
                            programs to solve big global issues.
                        </p>
                    </div>
                    <div className="buttons" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                                    justifyContent: 'space-evenly', margin: '5px'
                    }}>
                        <Link to="/lesson" style={{textDecoration:'none', color:'inherit'}}>
                            <Button title='Start'/>
                        </Link>
                        <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
                            <Button title='Cancel'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Greeting;
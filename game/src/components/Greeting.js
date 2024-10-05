import Heading from "../miniComponents/Heading";
import Button from "../miniComponents/Button";
import AppHeader from "../miniComponents/AppHeader";

function Greeting() {
    return (
        <div className='PageContent' style={{display: 'flex', flexDirection: 'column', 
                                            alignItems: 'center'}}>
            <AppHeader/>
            <div className="occupation-avatar" style={{width: '80%', height:'auto', marginTop: '10px', 
                                                        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                                        justifyContent: 'center'
            }} >
                <div className="left-content" style={{backgroundColor: 'dimgray', width: '300px', height: '420px', 
                                                    marginRight: '20px', marginTop: '20px'}} >

                </div>
                <div className="right-content" style={{display: 'flex', flexDirection: 'column', margin: '5px 30px 30px 30px', flexGrow: '1',
                }}>
                     <Heading title="Introduction"/>
                    <div className="intro message" style={{padding: '0px 15px', backgroundColor: 'ghostwhite', margin: '10px 0px',
                                                            height: '250px', borderStyle: 'solid', borderWidth: '2px', borderRadius: '10px'
                    }}>
                        <p style={{textAlign: 'left'}}>intro message...</p>
                    </div>
                    <div className="buttons" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                                    justifyContent: 'space-evenly', margin: '5px'
                    }}>
                        <Button title='Start'/>
                        <Button title='Cancel'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Greeting;
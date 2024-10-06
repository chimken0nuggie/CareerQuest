import Heading from "../miniComponents/Heading";
import Button from "../miniComponents/Button";
import AppHeader from "../miniComponents/AppHeader";
import { Link } from 'react-router-dom';
import software from "../images/boy-software.png"

function Greeting() {
    return (
        <div className='PageContent' style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center'
        }}>
            <AppHeader />
            <div className="occupation-avatar" style={{
                margin: '10px 10px',
                display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                justifyContent: 'center', alignItems: 'center'
            }} >
                <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <img src={software} alt="image" style={{ width: '300px' }} />
                </div>

                <div className="right-content" style={{
                    display: 'flex', flexDirection: 'column', margin: '5px 30px 30px 30px', width: '800px',
                }}>
                    <Heading title="Introduction" />
                    <div className="intro message" style={{
                        backgroundColor: 'ghostwhite', margin: '10px 0px', textAlign: 'left', padding: '15px', width: '100%',
                        height: '250px', borderStyle: 'solid', borderWidth: '2px', borderRadius: '10px', fontSize: '20px'
                    }}>
                        <p>Welcome to the software world!</p>
                        <p>As a software engineer, you will be solving many coding problems in order to solve even bigger problems
                            in the real world. You can do anything from building games to make people's lives more fun or even build
                            programs to solve big global issues.
                        </p>
                    </div>
                    <div className="buttons" style={{
                        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                        justifyContent: 'space-evenly', margin: '5px'
                    }}>
                        <Link to="/game" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button title='Start' />
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button title='Cancel' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Greeting;
import Heading from "../miniComponents/Heading";
import ProjectName from "../miniComponents/ProjectName";

function Greeting() {
    return (
        <div className='PageContent' style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ProjectName/>
            <Heading title="Introduction"/>
            <div className="occupation-avatar" style={{width: '30%', height:'auto', backgroundColor: 'red'}} >
                <div className="left-content" style={{}} >

                </div>
                <div className="right-content" style={{}}>

                </div>
            </div>
        </div>
    )
}
export default Greeting;
import CareerItem from "../miniComponents/CareerItem";
import Heading from "../miniComponents/Heading";
import ProgressBar from "../miniComponents/ProgressBar";
import ProjectName from "../miniComponents/ProjectName";

export default function Home() {

    return(
        <div className='PageContent' style={{width: '100%', height: '15vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ProjectName/>
            <Heading title="Name"/>
            <div style={{width: '80%', height: 'auto', margin: '20px 40px', 
                                                display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                                alignItems: 'center', justifyContent: 'space-evenly'}}>
                <div style={{backgroundColor: 'ghostwhite', width: '300px', height: "100px", margin: '20px 0px'}}>A character</div>
                <div>
                    <div style={{backgroundColor:'ghostwhite', borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px',
                                boxSizing: 'border-box', padding: '20px'}}>
                        <h2 style={{color: 'black', margin: '0px' }}>
                            LEVEL 1
                        </h2>
                        <ProgressBar percentCompleted={50}/>
                        <h3 style={{color: 'silver', fontSize: '15px', margin: '0px', marginBottom: '0px'}}>
                            500/1000 XP
                        </h3>
                    </div>
                </div>
            </div>
            <Heading title="Careers"/>
            <CareerItem title="doctor" des="help"/>
        </div>
    );
};
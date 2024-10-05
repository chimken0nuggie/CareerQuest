import CareerItem from "../miniComponents/CareerItem";
import Heading from "../miniComponents/Heading";
import ProgressBar from "../miniComponents/ProgressBar";
import ProjectName from "../miniComponents/ProjectName";

export default function Home() {

    return(
        <div className='PageContent' style={{width: '100%', height: '15vh', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'column', margin: '20px 0px'}}>
            <ProjectName/>
            <Heading title="Name"/>
            <div style={{width: '100%', height: 'auto', margin: '20px 40px', 
                        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                        alignItems: 'center', justifyContent: 'space-evenly'}}>
                <div style={{backgroundColor: 'ghostwhite', width: '300px', height: "100px", margin: '20px 0px'}}>A character</div>
                <div>
                    <div style={{backgroundColor:'ghostwhite', borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px',
                                boxSizing: 'border-box', padding: '20px'}}>
                        <h2 style={{color: 'dimgray', margin: '0px' }}>
                            LEVEL 1
                        </h2>
                        <ProgressBar percentCompleted={50}/>
                        <h3 style={{color: 'dimgray', fontSize: '15px', margin: '0px', marginBottom: '0px'}}>
                            500/1000 XP
                        </h3>
                    </div>
                </div>
            </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                <Heading title="Careers"/>
                <p style={{margin: '0px'}}>Pick your career path!</p>
                <div style={{width: '100%', marginTop: '30px',
                        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                        justifyContent: 'space-evenly', alignItems:'flex-start'}}>
                    <CareerItem title="Software" des="help ajsdf a dsfdoo d sdsdoisd d sdsddid sa dosdoids"/>
                    <CareerItem title="Doctor" des="help1 adsifi sda dsoidkf aosdihwo dsfjaod d aokdjfh"/>
                    <CareerItem title="Teacher" des="help2 adsifi sda dsoidkf aosdihwo dsfjaod d aokdjfh"/>
                    <CareerItem title="Lawyer" des="help3 adsifi sda dsoidkf aosdihwo dsfjaod d aokdjfh"/>
                </div>
            </div>
        </div>
    );
};
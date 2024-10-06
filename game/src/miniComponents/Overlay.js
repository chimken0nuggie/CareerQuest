import React from 'react';
import Heading from './Heading';
import PrintlnVisual from './PrintlnVisual';

export default function Overlay(props) {

    return (
        <div className='main-container'>
            <div className='modal-container'>
                <div className="container" style={{display: 'flex', flexDirection: 'column', margin: '10px',
                                                    alignItems: 'center', justifyContent: 'center', gap: '15px'
                    }} >
                    <div className="title" style={{}}>
                        {/* <h1>{props.title}</h1> */}
                        <Heading title="Print Statements"></Heading>
                    </div>

                    <div className="lesson" style={{backgroundColor:'ghostwhite', width: '95%', 
                                    borderRadius: '10px', borderStyle: 'solid', borderWidth: '2px',
                                    textAlign: 'left', padding:'5px'}}>
                        <PrintlnVisual/>
                        <p style={{margin: '0px', padding: '15px'}}>In java, you can use "System.out.println("...") to print words on the screen.</p>
                    </div>

                    <div className='ExerciseProblem' style={{width: '95%', textAlign: 'left'}}>
                        <p>Write the code to print “Hello, World” in the textbox below. </p>
                        <div className='InputAndSubmission' style={{display:'flex', flexDirection:'row', flexWrap:'wrap', width:'100%'}}>
                        {/* input form */}
                        <div className='button' style={{ textAlign: 'center', fontSize: '12px', 
                                padding: '10px', height:'15px', alignItems:'center',
                                borderStyle: 'solid', borderWidth: '2px', borderRadius: '10px'}}>
                        Submit</div>
                    </div>

                    </div>

                </div>
            </div>

        </div>
    );
}
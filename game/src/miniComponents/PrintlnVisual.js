import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const PrintlnVisual = ({}) => {
    return (
        <div className='visual' style={{display:'flex', flexDirection:'row', flexWrap:'wrap', 
                                    alignItems:'flex-start', margin: '10px', gap: '10px', justifyContent:'space-evenly'}}>
            <div className='CodeEditor' style={{width: '290px'}}>
                <div className="Tab" style={{display:'flex', flexDirection:'row', gap: '5px',
                                            backgroundColor:'#535353', color:'ghostwhite',
                                            alignItems: 'center', padding: '5px', justifyContent: 'center',
                                            fontSize:'12px', width:'95px', height:'20px', 
                                            borderTopLeftRadius: '10px', borderTopRightRadius: '10px',
                                            borderStyle: 'solid', borderWidth: '2px', borderColor:'black'
                }}>
                    <p>Code Editor</p>
                    <CloseIcon style={{color: 'darkred'}}/>
                </div>
                <div className="EditorBody" style={{display:'flex', flexDirection:'column',
                                                    backgroundColor: '#2f2f2f', paddingLeft: '10px',
                                                    borderBottomLeftRadius: '10px', borderBottomRightRadius:'10px',
                                                    borderTopRightRadius: '10px',
                                                    borderStyle: 'solid', borderWidth: '2px', borderColor:'black'
                }}>
                        <div class="CodeStatement" style={{display: 'flex', flexDirection:'row', color: 'gray',
                                                            fontSize:'12px', gap:'10px'}}>
                            <p>1</p>
                            <div style={{display: 'flex', flexDDirection:'row'}}>
                                <p style={{color:'#1290c3'}}>System</p>
                                <p style={{color:'white'}}>.</p>
                                <p style={{color:'#7ecaef'}}>out</p>
                                <p style={{color:'white'}}>.</p>
                                <p style={{color:'#95cd26'}}>println</p>
                                <p style={{color:'white'}}>	&#40;</p>
                                <p style={{color:'#17c6a3'}}>"I am a software engineer"</p>
                                <p style={{color:'white'}}>&#41;;</p>
                            </div>
                        </div>
                        <div style={{color:'gray', fontSize:'12px'}}>
                            <p>2</p>
                        </div>
                </div>
            </div>

            <div className='Console' style={{width:'170px'}}>
                <div className="Tab" style={{display:'flex', flexDirection:'row', gap: '5px',
                                                backgroundColor:'#535353', color:'ghostwhite',
                                                alignItems: 'center', padding: '5px', justifyContent: 'center',
                                                fontSize:'12px', width:'75px', height:'20px', 
                                                borderTopLeftRadius: '10px', borderTopRightRadius: '10px',
                                                borderStyle: 'solid', borderWidth: '2px', borderColor:'black'
                    }}>
                    <p>Console</p>
                    <CloseIcon style={{color: 'darkred'}}/>
                </div>
                <div className="ConsoleBody" style={{display:'flex', flexDirection:'column', padding: '10px',
                                                    backgroundColor: '#2f2f2f',
                                                    borderBottomLeftRadius: '10px', borderBottomRightRadius:'10px',
                                                    borderTopRightRadius: '10px',
                                                    borderStyle: 'solid', borderWidth: '2px', borderColor:'black'
                }}>
                    <p style={{color:'#ebebeb', fontSize:'12px'}}>I am a software engineer</p>
                </div>
            </div>
        </div>
    );
  };

export default PrintlnVisual;
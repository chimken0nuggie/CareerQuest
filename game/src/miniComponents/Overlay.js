import React from 'react';

export default function Overlay(props) {

    return (
        <div className='main-container'>
            <div className='modal-container'>
                <div className="container" style={{}} >
                    <div className="title" style={{}}>
                        {/* <h1>{props.title}</h1> */}
                        <h1>Print Statement</h1>
                    </div>

                    <div className="lesson" style={{}}>
                        <p>In java, you can use "System.out.println("Hello World!") to print words on the screen.</p>
                    </div>

                    <div className="user-input" style={{}} >
                        <input>

                        </input>
                        <button>
                            Submit
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}
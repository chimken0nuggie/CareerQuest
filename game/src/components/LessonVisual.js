import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const LessonVisual = ({ answer, setAnswer, consoleOutput }) => {
  console.log('Answer:', answer);          // Log the 'answer' state value
  console.log('ConsoleOutput:', consoleOutput);  // Log the 'consoleOutput' state value

  return (
    <div
      className="visual"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: '20px auto',
        width: '90%',
      }}
    >
      {/* Code Editor Section */}
      <div
        className="CodeEditor"
        style={{
          width: '48%',
          border: '2px solid black',
          borderRadius: '10px',
        }}
      >
        <div
          className="Tab"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#535353',
            color: 'ghostwhite',
            padding: '5px 10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        >
          <p style={{ margin: 0 }}>Code Editor</p>
          <CloseIcon style={{ color: 'darkred', cursor: 'pointer' }} />
        </div>
        <div
          className="EditorBody"
          style={{
            backgroundColor: '#2f2f2f',
            padding: '10px',
            height: '200px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        >
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your code here..."
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#2f2f2f',
              color: 'white',
              border: 'none',
              outline: 'none',
              fontSize: '14px',
              resize: 'none',
            }}
          />
        </div>
      </div>

      {/* Console Section */}
      <div
        className="Console"
        style={{
          width: '48%',
          border: '2px solid black',
          borderRadius: '10px',
        }}
      >
        <div
          className="Tab"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#535353',
            color: 'ghostwhite',
            padding: '5px 10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        >
          <p style={{ margin: 0 }}>Console</p>
          <CloseIcon style={{ color: 'darkred', cursor: 'pointer' }} />
        </div>
        <div
          className="ConsoleBody"
          style={{
            backgroundColor: '#2f2f2f',
            padding: '10px',
            height: '200px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        >
          <p style={{ color: 'white', fontSize: '14px' }}>
            {consoleOutput ? consoleOutput : 'Waiting for correct answer...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonVisual;


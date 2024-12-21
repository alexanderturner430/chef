import React from 'react';
import './app.css';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const { width, height } = useWindowSize();

  const handleClick = () => {
    window.location.href = '/chef.html';
  };

  return (
    <div style={{ width, height, backgroundColor: '#000000' }}>  
    <button 
        onClick={handleClick}
        style={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        Go to Chef
        </button>

    </div>
  );
}

export default App;



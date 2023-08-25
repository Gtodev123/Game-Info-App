import React, { useState, useEffect } from 'react';
import DynamicInputFields from './InputFields';
import './delay.css';
function DelayedComponent() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const delay = 2000; // Adjust the delay time in milliseconds (2 seconds in this example)

    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => {
      clearTimeout(timer); // Cleanup the timer if the component unmounts before the delay
    };
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div class="gradient-border" id="box">
      {isReady ? (
         <DynamicInputFields />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default DelayedComponent;

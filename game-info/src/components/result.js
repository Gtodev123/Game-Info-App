import React from 'react';
import './result.css'
function RandomValueSelector(props) {
  

  return (
    <div className='center'>
      <h2>Your Luck is ...</h2>
      <p className='animate-charcter'>{props.data}</p>
    </div>
  );
}

export default RandomValueSelector;




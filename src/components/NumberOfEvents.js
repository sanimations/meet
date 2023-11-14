import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [userNumber, setUserNumber] = useState(32);


  const handleInputChanged = (event) => {
    const value = event.target.value;
    setUserNumber(value);
    setCurrentNOE(value);
  };

  return (
    <div id='number-of-events'>
       <h2>Number of Events: </h2>
      <input
        type='text'
        value={userNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;
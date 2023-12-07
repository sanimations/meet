import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [userNumber, setUserNumber] = useState(32);


  const handleInputChanged = (event) => {
    const value = event.target.value;
    setUserNumber(value);
    setCurrentNOE(value);

    let errorText;
    if (value.length === isNaN() || value <= 0 ) {
      errorText = "Error: Invalid Number"
    } else {
      errorText = ""
    }
    setErrorAlert(errorText);
  };

  return (
    <div id='number-of-events'>
       <h2>Number of Events: </h2>
      <input
        id = 'number-of-events-input'
        type='text'
        value={userNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;
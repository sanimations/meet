import React, {useState} from 'react';

const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <div className='event'>
        <div className='title'>{event.summary}</div>
        <div className="location">{event.location}</div>
        <div className="created">{event.created}</div>

        <button className="details-btn" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && <div className="description">{event.description}</div>}
        </div>
    </li>
  );
}

export default Event;
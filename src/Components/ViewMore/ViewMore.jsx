import React from 'react';
import '../ViewMore/ViewMore.css';

const ViewMore = ({ onViewMoreClick }) => {
  return (
    <div className='view-more'>
      <button className="view-button" onClick={onViewMoreClick}>View more</button>
    </div>
  );
}

export default ViewMore;

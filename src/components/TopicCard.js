import React from 'react';

const TopicCard = ({ title, color }) => (
  <div className="card" style={{ backgroundColor: color }}>
    <div className="card-content">
      <h3>{title}</h3>
    </div>
  </div>
);

export default TopicCard;
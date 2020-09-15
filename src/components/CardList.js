import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card key={robot.id} item={robot} />
      ))}
    </div>
  );
};
export default CardList;

import React from 'react';

const Card = ({ item }) => (
  <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img
      alt='robot profile'
      src={`https://robohash.org/${item.id}?size=200x200`}
    />
    <div>
      <h2>{item.name}</h2>
      <p>{item.email}</p>
    </div>
  </div>
);

export default Card;

import React from 'react';

const FeedPhotosItem = ({ photo }) => {
  console.log('AQUI PHOTO', photo);
  return (
    <li>
      <p>{photo.peso}</p>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;

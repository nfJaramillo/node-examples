import React from 'react';
import './Card.scss';

export const Card = (props) => {
  const { title, url, description } = props;
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={url} className='card-img-top' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

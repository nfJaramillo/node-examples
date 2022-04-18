import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import './Gallery.scss';

export const Gallery = () => {
  const url = 'https://rickandmortyapi.com/api/character';
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    const characters = data?.results.map((resp) => {
      return {
        id: resp.id,
        url: resp.image,
        title: resp.name,
        gender: resp.gender,
        status: resp.status,
      };
    });
    setCharacters(characters);
  };

  return (
    <>
      <div className='gallery'>
        <h1>Rick and morty</h1>
        <div className='gallery-card-container'>
          {characters.map((elm, index) => (
            <Card
              key={index}
              title={elm.title}
              url={elm.url}
              description={elm.status}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};

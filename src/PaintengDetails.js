import React from 'react';
import { useParams } from 'react-router-dom';

// Import or provide access to the paintings array
import { paintings } from './PaintingCollection';

function PaintingDetails() {
  const { id } = useParams();
  const painting = paintings.find((p) => p.id === parseInt(id, 10));

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <div>
      <h1>{painting.title}</h1>
      <p>{painting.description}</p>
      <p>Genre: {painting.genre}</p>
      <p>Author: {painting.author}</p>
      <p>Year: {painting.year}</p>
      <img src={painting.image} alt={painting.title} />
    </div>
  );
}

export default PaintingDetails;

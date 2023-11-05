import React from 'react';
import { Link } from 'react-router-dom';

export const paintings = [
  {
    id: 1,
    title: 'Герніка',
    image: 'https://upload.wikimedia.org/wikipedia/uk/thumb/8/8e/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0_%D0%9F%D0%B0%D0%B1%D0%BB%D0%BE_%D0%9F%D1%96%D0%BA%D0%B0%D1%81%D1%81%D0%BE_%D0%93%D0%B5%D1%80%D0%BD%D1%96%D0%BA%D0%B0_1937.jpg/525px-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0_%D0%9F%D0%B0%D0%B1%D0%BB%D0%BE_%D0%9F%D1%96%D0%BA%D0%B0%D1%81%D1%81%D0%BE_%D0%93%D0%B5%D1%80%D0%BD%D1%96%D0%BA%D0%B0_1937.jpg',
    description: 'Картину "Герніка" було написано в 1937 році і вона є однією з найбільш відомих антивоєнних робіт Пабло Пікассо.',
    genre: 'Кубізм',
    author: 'Пабло Пікассо',
    year: 1937,
  },
  {
    id: 2,
    title: 'Авіньйонські дівиці',
    image: 'https://naurok-test.nyc3.cdn.digitaloceanspaces.com/uploads/test/184961/18715/537785_1572978988.jpg',
    description: 'Картина "Авіньйонські дівиці", створена в 1907 році, є революційною роботою в розвитку кубізму.',
    genre: 'Кубізм',
    author: 'Пабло Пікассо',
    year: 1907,
  },
  {
    id: 3,
    title: 'Хлопчик з люлькою',
    image: 'https://th.bing.com/th?id=OSK.1f38e3a3830090b2948f191a0d2466ab&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM',
    description: 'Цей портрет, написаний у 1905 році, відомий своєю емоційною виразністю та стилем.',
    genre: 'Ранній Пікассо',
    author: 'Пабло Пікассо',
    year: 1905,
  },
  // Додавайте більше картин за потреби
];

function PaintingCollection() {
  return (
    <div>
      <h1>Колекція картин Пабло Пікассо</h1>
      <ul>
        {paintings.map((painting) => (
          <li key={painting.id}>
            <h2>{painting.title}</h2>
            <img src={painting.image} alt={painting.title} />
            <p>{painting.description}</p>
            <p>Жанр: {painting.genre}</p>
            <p>Автор: {painting.author}</p>
            <p>Рік написання: {painting.year}</p>
            <Link to={`/painting/${painting.id}`}>Деталі</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaintingCollection;

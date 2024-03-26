import { useContext } from 'react';
import { myData } from '../App';

export default function Category() {
  const { handleCategoryClick, category } = useContext(myData);

  return (
    <div id='category-list'>
      <a
        href='#'
        onClick={() => handleCategoryClick('Tümü')}
        style={{
          color: category === 'Tümü' ? '#000' : '#a8a9a9',
        }}
      >
        Tümü
      </a>
      <a
        href='#'
        onClick={() => handleCategoryClick('Elektronik')}
        style={{
          color: category === 'Elektronik' ? '#000' : '#a8a9a9',
        }}
      >
        Elektronik
      </a>
      <a
        href='#'
        onClick={() => handleCategoryClick('Tekstil')}
        style={{
          color: category === 'Tekstil' ? '#000' : '#a8a9a9',
        }}
      >
        Tekstil
      </a>
      <a
        href='#'
        onClick={() => handleCategoryClick('Spor')}
        style={{
          color: category === 'Spor' ? '#000' : '#a8a9a9',
        }}
      >
        Spor
      </a>
    </div>
  );
}

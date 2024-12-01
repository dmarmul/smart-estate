import { useState } from 'react';
import { NeighborhoodCard } from '../neighborhoodCard/NeighborhoodCard';
import s from './Neighborhoods.module.css';

export const Neighborhoods: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const neighborhoods = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className={s.neighborhoods} id="neighborhoods">
      <div className={s.neighborhoods__text}>
        <div className={s.neighborhoods__title}>Neighborhoods</div>
        <div className={s.neighborhoods__description}>
          Explore the vibrant neighborhoods of Amsterdam and find your perfect
          home.
        </div>
      </div>
      <div className="container">
        <div className={s.neighborhoods__grid}>
          {(isOpen ? neighborhoods : neighborhoods.slice(0, 6)).map(
            (neighborhood) => (
              <NeighborhoodCard key={neighborhood} />
            ),
          )}
        </div>

        <div className={s.showMore}>
          <button
            className={s.showMore__btn}
            onClick={() => setIsOpen((currValue) => !currValue)}
          >
            {isOpen ? 'View less Neighborhoods' : 'View more Neighborhoods'}
          </button>
        </div>
      </div>
    </section>
  );
};

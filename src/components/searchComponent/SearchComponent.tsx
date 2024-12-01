import { NavLink, useLocation } from 'react-router-dom';
import s from './SearchComponent.module.css';
import searchIcon from '../../../public/img/icons/searchIcon.svg';
import { useEffect, useState } from 'react';

export const SearchComponent: React.FC = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [activePage, setActivePage] = useState<'buy' | 'rent' | ''>('');

  useEffect(() => {
    if (location.pathname.includes('buy')) {
      setActivePage('buy');
    } else if (location.pathname.includes('rent')) {
      setActivePage('rent');
    } else {
      setActivePage('');
    }
  }, [location]);

  return (
    <section className={s.section}>
      <h1 className={s.section__title}>Explore the Best of Amsterdam Living</h1>

      <div className={s.section__toggleBtn}>
        <NavLink
          to="/buy"
          className={`${s.buy} ${activePage === 'buy' ? s.pseudo : ''}`}
        >
          Buy
        </NavLink>
        <NavLink
          to="/rent"
          className={`${s.rent} ${activePage === 'rent' ? s.pseudo : ''}`}
        >
          Rent
        </NavLink>
      </div>

      <div className={s.search__container}>
        <form className={s.searchForm} action="/">
          <label className="searchForm__left">
            <img src={searchIcon} alt="Search Icon" className={s.searchIcon} />
            <input
              type="text"
              placeholder="Area, Neighborhood..."
              className={s.searchForm__input}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          {query ? (
            <button className={s.searchButton}>Search</button>
          ) : (
            <button className={s.searchButton}>Show All</button>
          )}
        </form>
      </div>
    </section>
  );
};

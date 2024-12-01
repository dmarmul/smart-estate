import s from './Loader.module.css';

export const Loader = () => (
  <div className={s.Loader} data-cy="Loader">
    <div className={s.Loader__content} />
  </div>
);

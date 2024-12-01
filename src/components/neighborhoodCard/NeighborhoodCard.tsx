import { Link } from 'react-router-dom';
import s from './NeighborhoodCard.module.css';

export const NeighborhoodCard: React.FC = () => {
  return (
    <Link to="/neighborhood" className={s.card}>
      <h3 className={s.title}>The Old Centre</h3>
    </Link>
  );
};

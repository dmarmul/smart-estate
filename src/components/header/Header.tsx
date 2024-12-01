import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { AuthLogin } from '../authLogin/AuthLogin';
import { AuthSignup } from '../authSignup/AuthSignUp';
import { useUser } from '../context/UserContext';
import liked from '../../../public/img/icons/login/liked.svg';
import profile from '../../../public/img/icons/login/profile.svg';

const scrollToSection = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView();
  }
};

export const Header: React.FC = () => {
  const { userData } = useUser();

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <div className={s.header__row}>
            <div className={s.header__logo}>
              <Link to="/">SmartEstate</Link>
            </div>
            <nav className={s.header__nav}>
              <span
                onClick={() => scrollToSection('#about-us')}
                className={s.header__navLink}
              >
                About us
              </span>
              <span
                onClick={() => scrollToSection('#neighborhoods')}
                className={s.header__navLink}
              >
                Neighborhoods
              </span>
              <span
                onClick={() => scrollToSection('#contact-us')}
                className={s.header__navLink}
              >
                Contact us
              </span>
            </nav>

            {userData ? (
              <div className={s.authorized}>
                <Link to="/liked" className={s.liked}>
                  <img src={profile} alt="liked" />
                </Link>
                <Link to="/profile" className={s.profile}>
                  <img src={liked} alt="profile icon" />
                </Link>
              </div>
            ) : (
              <div className={s.header__authorization}>
                <NavLink
                  to={'/log-in'}
                  className={`${s.header__authentication} ${s.authorization__element} `}
                >
                  Log In
                </NavLink>
                <NavLink
                  to={'/sign-up'}
                  className={`${s.header__registration} ${s.authorization__element}`}
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </header>

      <AuthLogin />
      <AuthSignup />
    </>
  );
};

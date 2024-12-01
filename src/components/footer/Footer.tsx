import s from './Footer.module.css';
import LinkedInIcon from '../../../public/img/icons/linkedin.svg';
import FacebookIcon from '../../../public/img/icons/fb.svg';
import PinterestIcon from '../../../public/img/icons/pinterest.svg';
import InstagramIcon from '../../../public/img/icons/insta.svg';

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer} id="contact-us">
      <div className="container">
        <div className={s.footer__wrapper}>
          <div className={s.footer__leftContainer}>
            Your Amsterdam Home Awaits.
          </div>

          <div className={s.footer__right}>
            <div className={s.stayInformed}>
              <div className={s.stayInformed__title}>Stay Informed</div>
              <div className={s.stayInformed__description}>
                Subscribe to our weekly newsletter for the latest market
                insights.
              </div>
              <div className={s.stayInformed__form}>
                <input
                  type="email"
                  className={s.stayInformed__formInput}
                  placeholder="name@example.com"
                />
                <button className={s.stayInformed__formButton} type="submit">
                  Sign Up
                </button>
              </div>

              <div className={s.GetInTouch}>
                <span className={s.GetInTouch__title}>Get it Touch</span>

                <a
                  href="mailto:example@example.com"
                  className={s.stayInformed__contactLink}
                >
                  info@amsterdamhomes.com
                </a>

                <a
                  href="tel:+1234567890"
                  className={s.stayInformed__contactLink}
                >
                  +31 20 123 4567
                </a>

                <a
                  href="https://www.google.com/maps?q=123+Canal+Street,+Amsterdam,+1017+AB,+Netherlands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  123 Canal Street, Amsterdam, 1017 AB, Netherlands
                </a>
              </div>

              <div className={s.follow}>
                <div className={s.follow__title}>Follow Us</div>

                <div className={s.follow__icons}>
                  <a href="#">
                    <img
                      src={InstagramIcon}
                      alt="InstagramIcon"
                      className={s.socialIcon}
                    />
                  </a>
                  <a href="#">
                    <img
                      src={LinkedInIcon}
                      alt="LinkedInIcon"
                      className={s.socialIcon}
                    />
                  </a>
                  <a href="#">
                    <img
                      src={FacebookIcon}
                      alt="FacebookIcon"
                      className={s.socialIcon}
                    />
                  </a>
                  <a href="#">
                    <img
                      src={PinterestIcon}
                      alt="PinterestIcon"
                      className={s.socialIcon}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

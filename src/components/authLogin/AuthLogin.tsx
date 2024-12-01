import '../../styles/reset.css';
import '../../styles/common.css';
import googleIcon from '../../../public/img/icons/google.svg';
import facebookIcon from '../../../public/img/icons/modalFacebook.svg';
import modalClose from '../../../public/img/icons/modal-close.svg';

import s from './Auth.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

export const AuthLogin: React.FC = () => {
  const { setUserData } = useUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/', { replace: true });
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8088/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        handleClose();
      } else {
        throw new Error('rerer');
      }
    } catch {
      console.log('error while loggin');
    }
  };

  useEffect(() => {
    if (location.pathname.includes('/log-in')) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = 'unset';
    }
  }, [location]);

  if (isModalOpen) {
    return (
      <div className={s.overlay}>
        <div className={s.modal}>
          <div className={s.header}>
            <button className={s.closeBtn} onClick={handleClose}>
              <img src={modalClose} alt="close button" />
            </button>

            <h2 className={s.title}>Sign In or Create an Account</h2>
          </div>

          <div className={s.socialButtons}>
            <button className={s.socialButton}>Continue with email</button>
            <button className={s.socialButton}>
              <img src={googleIcon} alt="googleIcon" className={s.socialIcon} />
              Continue with email
            </button>
            <button className={s.socialButton}>
              <img
                src={facebookIcon}
                alt="googleIcon"
                className={s.socialIcon}
              />
              Continue with email
            </button>
          </div>

          <div className={s.separator}>or</div>

          <form className={s.form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="debra.holt@example.com"
              className={s.input}
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="●●●●●●●●"
              className={s.input}
              value={formData.password}
              onChange={handleInputChange}
            />

            <button type="submit" className={s.signInBtn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
};

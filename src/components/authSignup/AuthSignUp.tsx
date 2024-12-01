import '../../styles/reset.css';
import '../../styles/common.css';
import googleIcon from '../../../public/img/icons/google.svg';
import facebookIcon from '../../../public/img/icons/modalFacebook.svg';
import modalClose from '../../../public/img/icons/modal-close.svg';

import s from './AuthSignup.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

export const AuthSignup: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    lastname: '',
    name: '',
    repeatPassword: '',
  });

  const { setUserData } = useUser();
  // const [error, setError] = useState<string | null>(null);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/', { replace: true });
    setFormData({
      email: '',
      password: '',
      lastname: '',
      name: '',
      repeatPassword: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.email.trim() ||
      !formData.lastname.trim() ||
      !formData.name.trim() ||
      !formData.password.trim() ||
      !formData.repeatPassword.trim()
    ) {
      console.log('All fields are required');
      return;
    }

    const filledForm = {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.repeatPassword,
      firstName: formData.name,
      lastName: formData.lastname,
    };

    try {
      const result = await fetch('http://localhost:8088/auth/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filledForm),
      });

      if (result.ok) {
        const data = await result.json();
        setUserData(data);
        handleClose();
      } else {
        throw new Error();
      }
    } catch {
      console.log('error while signup');
    }
  };

  useEffect(() => {
    if (location.pathname.includes('/sign-up')) {
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
              type="text"
              name="name"
              value={formData.name}
              placeholder="your name"
              className={s.input}
              onChange={inputChange}
            />
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              placeholder="your lastname"
              className={s.input}
              onChange={inputChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="debra.holt@example.com"
              className={s.input}
              onChange={inputChange}
            />

            <input
              type="password"
              name="repeatPassword"
              placeholder="repeat password"
              value={formData.repeatPassword}
              className={s.input}
              onChange={inputChange}
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="password"
              className={s.input}
              onChange={inputChange}
            />

            <button type="submit" className={s.signInBtn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
};

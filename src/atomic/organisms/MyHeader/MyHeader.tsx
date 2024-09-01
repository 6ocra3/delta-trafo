import React, { useEffect } from 'react';
import logo from "/src/assets/images/icons/logo.svg"
import { useAppDispatch, useAppSelector } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { getTokenFromStorage, logoutUser } from '../../../store/slices/auth';
import { getUser } from '../../../store/slices/user';

const MyHeader: React.FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useAppSelector( (state) => state.auth.authData)
  const { email } = useAppSelector( (state) => state.user.userData)

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       let token;
  //       dispatch(getTokenFromStorage())
  //       if (typeof window !== 'undefined') {
  //         await new Promise((resolve) => setTimeout(resolve, 100));
  //         token = localStorage.getItem("token");
  //         console.log(4321, token)
  //         if (!token) {
  //           throw new Error("JWT токен не найден");
  //         }
  //       }
  //       await dispatch(getUser()).unwrap();      
  //     } catch (error) {
  //       console.error(error);
  //       // navigate('/login', { replace: true });
  //     }
  //   };

  //   fetchUser();
  // }, [dispatch, navigate]);

  useEffect(() => {
    dispatch(getTokenFromStorage())
  }, [])

  useEffect(() => {
    try {
        if (typeof window !== 'undefined') {
          if (!token) {
            throw new Error("JWT токен не найден");
          }
          dispatch(getUser()).unwrap(); 
        }
      } catch (error) {
        console.error(error);
        // navigate('/login', { replace: true });
      }
  }, [token])

  const handleLogout = async () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => navigate("/login", { replace: true }))
      .catch((error) => console.error(error));
  };

  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__title">добро пожаловать<br/>
          в корпоративный университет</h1>
        <div className="header__right">
          <a className="header__link logo" href="#">
            <img className="header__img logo__img" src={logo} alt=""/>
          </a>
          <div className="profile">
            <div className="profile__header">
              <div className="profile__name">{ email }</div>
              <div className="profile__icon">
                <span>ШЕ</span>
              </div>
            </div>
            <div className="profile__body">
              <ul className="profile__list">
                <li className="profile__list-item">
                  <a className="profile__list-link" href="#">Мой профиль</a>
                </li>
                <li className="profile__list-item">
                  <a className="profile__list-link" href="#">Кабинет администратора</a>
                </li>
                <li className="profile__list-item">
                  <a className="profile__list-link" onClick={handleLogout}>Выйти</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;

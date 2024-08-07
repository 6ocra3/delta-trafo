import React from 'react';
import './Header.scss';
import logo from "/src/assets/images/icons/logo.svg"

const Header: React.FC = () => {

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
              <div className="profile__name">Шохина Елена</div>
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
                  <a className="profile__list-link" href="#">Выйти</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

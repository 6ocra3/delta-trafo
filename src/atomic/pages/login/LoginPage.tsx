// src/components/LoginPage.tsx

import React, { useState } from 'react';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Добавьте логику авторизации
    console.log('Logging in:', { username, password });
  };

  return (
<div className="wrapper">
    <div className="login-box">
      <div className="container">
        <div className="login">
          <div className="login__header">
            <h1 className="login__header-title">корпоративный
              университет
              “ДЕЛЬТА трафо”</h1>
          </div>
          <div className="login__main">
            <a className="login__link" href="#">Вход в Личный кабинет</a>
            <div className="login__box">
              <div className="login__title">Адрес эл.почты</div>
              <input className="login__input input" type="email"/>
            </div>
            <div className="login__box">
              <div className="login__title">Пароль</div>
              <label className="password">
                <input className="login__input password__input input" id="password" type="password"/>
                <button className="password__hidden" data-target="#password"></button>
              </label>
            </div>
            <a className="login__btn" href="#">Войти</a>
            <a className="login__link-password" href="#">Забыл пароль</a>
          </div>
          <div className="login__footer">
            <a className="login__footer-link logo" href="#">
              <img className="login__footer-img logo__img" src="assets/images/icons/logo-colored.svg" alt=""/>
            </a>
          </div>

        </div>
        <div className="login-box__copy"><span>2023 КУ “Дельта Трафо”</span></div>
      </div>

    </div>
  </div>
  );
};

export default LoginPage;

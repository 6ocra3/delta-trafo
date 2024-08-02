// src/components/LoginPage.tsx

import React, { useState } from 'react';

const NewspaperPage: React.FC = () => {
  return (
    <main className="main main--decor">
      <div className="intro">
        <img className="intro__img" src="src/assets/images/intro/4.jpg" alt=""/>
      </div>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__list-item"><a className="nav__list-link" href="#">Мои курсы</a></li>
                <li className="nav__list-item"><a className="nav__list-link" href="#">База знаний</a></li>
                <li className="nav__list-item"><a className="nav__list-link" href="#">Библиотека</a></li>
                <li className="nav__list-item"><a className="nav__list-link" href="#">Галерея</a></li>
                <li className="nav__list-item nav__list-item--active"><a className="nav__list-link" href="#">Корпоративная
                    газета</a></li>
              </ul>
            </nav>
            <div className="tabs">
              <div className="tabs__top tabs__top--column">
                <div className="tabs__top-items">
                  <a className="tabs__top-item tabs__top-item--active" href="#tab-1">Газета “Дельта Трафо”</a>
                  <a className="tabs__top-item" href="#tab-2">Архив (Электрические машины)</a>
                </div>
                <label className="search">
                  <input className="search__input" type="search"/>
                </label>
              </div>
              <div className="tabs__content">
                <div className="tabs__content-item tabs__content-item--active" id="tab-1">
                  <div className="library gallery">
                    <div className="library__header">
                      <div className="library__header-column name">Название</div>
                      <div className="library__header-column"></div>
                      <div className="library__header-column"></div>
                    </div>
                    <div className="library__body">
                      <div className="library__item">
                        <div className="library__item-column name-body">2023 год</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2022 год</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2021 год</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2020 год</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2019 год</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2018 год</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2017 год
                        </div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2016 год</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2015 год</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">2014 год</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs__content-item" id="tab-2">content 2</div>
                <div className="pagination pagination--hidden">
                  <a className="pagination__prev pagination__arrows" href="#">
                    <img src="src/assets/images/icons/arrow-prev.svg" alt=""/>
                  </a>
                  <ul className="pagination__list">
                    <li className="pagination__item"><a className="pagination__link pagination__link--active" href="#">1</a>
                    </li>
                    <li className="pagination__item"><a className="pagination__link" href="#">2</a></li>
                    <li className="pagination__item"><a className="pagination__link" href="#">3</a>
                    </li>
                    <li className="pagination__item"><a className="pagination__link" href="#">4</a></li>
                    <li className="pagination__item"><a className="pagination__link" href="#">5</a></li>
                  </ul>
                  <a className="pagination__next pagination__arrows" href="#">
                    <img src="src/assets/images/icons/arrow-next.svg" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewspaperPage;

// src/components/LoginPage.tsx

import React, { useState } from 'react';

const GalleryPage: React.FC = () => {
  return (
    <main className="main main--decor">
      <div className="intro">
        <img className="intro__img" src="src/assets/images/intro/3.jpg" alt=""/>
      </div>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__list-item"><a className="nav__list-link" href="#">Мои курсы</a></li>
                <li className="nav__list-item"><a className="nav__list-link" href="#">База знаний</a></li>
                <li className="nav__list-item"><a className="nav__list-link" href="#">Библиотека</a></li>
                <li className="nav__list-item nav__list-item--active"><a className="nav__list-link" href="#">Галерея</a></li>
                <li className="nav__list-item"><a className="nav__list-link" href="#">Корпоративная газета</a></li>
              </ul>
            </nav>
            <div className="tabs">
              <div className="tabs__top tabs__top--column">
                <div className="tabs__top-items">
                  <a className="tabs__top-item tabs__top-item--active" href="#tab-1">Фото</a>
                  <a className="tabs__top-item" href="#tab-2">Видео</a>
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
                      <div className="library__header-column year">Год</div>
                      <div className="library__header-column quantity">Количество
                        файлов</div>
                    </div>
                    <div className="library__body">
                      <div className="library__item">
                        <div className="library__item-column name-body">Новогодний корпоратив в Да Винчи</div>
                        <div className="library__item-column year-body">2022</div>
                        <div className="library__item-column quantity-body">364</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Зеленый треугольник (осень)</div>
                        <div className="library__item-column year-body">2021</div>
                        <div className="library__item-column quantity-body">152</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Открытое собрание ЗВЕНО</div>
                        <div className="library__item-column year-body">2023</div>
                        <div className="library__item-column quantity-body">271</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Сплав по реке Линда</div>
                        <div className="library__item-column year-body">2017</div>
                        <div className="library__item-column quantity-body">26</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">День машиностроителя</div>
                        <div className="library__item-column year-body">2021</div>
                        <div className="library__item-column quantity-body">532</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Юбилей Дельта Трафо (50 лет)</div>
                        <div className="library__item-column year-body">2017</div>
                        <div className="library__item-column quantity-body">1032</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Новый год в Кипячем ключе
                        </div>
                        <div className="library__item-column year-body">2021</div>
                        <div className="library__item-column quantity-body">620</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">День рождения Дмитрия Николаевича</div>
                        <div className="library__item-column year-body">2022</div>
                        <div className="library__item-column quantity-body">68</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Поездка в Дивеево</div>
                        <div className="library__item-column year-body">2022</div>
                        <div className="library__item-column quantity-body">103</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Зеленый треугольник (весна)</div>
                        <div className="library__item-column year-body">2019</div>
                        <div className="library__item-column quantity-body">158</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Экскурсия в Нижний Новгород</div>
                        <div className="library__item-column year-body">2023</div>
                        <div className="library__item-column quantity-body">247</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Открытие цеха</div>
                        <div className="library__item-column year-body">2015</div>
                        <div className="library__item-column quantity-body">43</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Беги герой</div>
                        <div className="library__item-column year-body">2021</div>
                        <div className="library__item-column quantity-body">28</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Участие в соревнованиях Стальной характер</div>
                        <div className="library__item-column year-body">2022</div>
                        <div className="library__item-column quantity-body">46</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs__content-item" id="tab-2">content 2</div>
                <div className="pagination">
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

export default GalleryPage;

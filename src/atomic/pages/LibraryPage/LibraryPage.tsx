// src/components/LoginPage.tsx

import React, { useState } from 'react';

const LibraryPage: React.FC = () => {
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
                <li className="nav__list-item nav__list-item--active"><a className="nav__list-link" href="#">Библиотека</a></li>
                <li className="nav__list-item"><a className="nav__list-link" href="#">Галерея</a></li>
                <li className="nav__list-item"><a className="nav__list-link" href="#">Корпоративная газета</a></li>
              </ul>
            </nav>
            <div className="tabs">
              <div className="tabs__top tabs__top--column">
                <div className="tabs__top-items">
                  <a className="tabs__top-item tabs__top-item--active" href="#tab-1">Все (<span>78</span>)</a>
                  <a className="tabs__top-item" href="#tab-2">Производство (<span>11</span>)</a>
                  <a className="tabs__top-item" href="#tab-3">Продажи и маркетинг (<span>8</span>)</a>
                  <a className="tabs__top-item" href="#tab-4">КТО (<span>15</span>)</a>
                  <a className="tabs__top-item" href="#tab-5">Менеджмент (<span>13</span>)</a>
                  <a className="tabs__top-item" href="#tab-6">Управление персоналом (<span>9</span>)</a>
                  <a className="tabs__top-item" href="#tab-7">Разное (<span>22</span>)</a>
                </div>
                <label className="search">
                  <input className="search__input" type="search"/>
                </label>
              </div>
              <div className="tabs__content">
                <div className="tabs__content-item tabs__content-item--active" id="tab-1">
                  <div className="library">
                    <div className="library__header">
                      <div className="library__header-column name">Название</div>
                      <div className="library__header-column author">Автор</div>
                      <div className="library__header-column type">Тип</div>
                    </div>
                    <div className="library__body">
                      <div className="library__item">
                        <div className="library__item-column name-body">7 навыков высокоэффективных людей</div>
                        <div className="library__item-column author-body">Стивен Кови</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Атлант расправил плечи</div>
                        <div className="library__item-column author-body">Айн Рэнд</div>
                        <div className="library__item-column type-body">Аудио</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Богатый Папа, Бедный Папа</div>
                        <div className="library__item-column author-body">Роберт Т. Кийосаки</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Цель. Процесс непрерывного совершенствования</div>
                        <div className="library__item-column author-body">Элия М. Гольдратт</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Самый богатый человек в Вавилоне</div>
                        <div className="library__item-column author-body">Джордж С. Клейсон</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Доставляя счастье. От нуля до миллиарда</div>
                        <div className="library__item-column author-body">Тони Шей</div>
                        <div className="library__item-column type-body">Аудио</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Маркетинг без бюджета. 50 работающих инструментов
                        </div>
                        <div className="library__item-column author-body">Игорь Манн</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">45 татуировок менеджера</div>
                        <div className="library__item-column author-body">Максим Батырев</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Дао Toyota: 14 принципов менеджмента ведущей
                          компании мира</div>
                        <div className="library__item-column author-body">Джеффри Лайкер</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">5S для офиса. Как организовать эффективное рабочее
                          место</div>
                        <div className="library__item-column author-body">Том Фабрицио</div>
                        <div className="library__item-column type-body">Аудио</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Продажа товаров и услуг по методу бережливого
                          производства</div>
                        <div className="library__item-column author-body">Джеймс П. Вумек</div>
                        <div className="library__item-column type-body">Аудио</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Учитесь видеть бизнес-процессы: Практика построения
                          карт потоков создания ценности</div>
                        <div className="library__item-column author-body">Джон Шук</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Бережливое производство: Как избавиться от потерь
                          и добиться процветания вашей компании</div>
                        <div className="library__item-column author-body">Джеймс П. Вумек</div>
                        <div className="library__item-column type-body">Текст</div>
                      </div>
                      <div className="library__item">
                        <div className="library__item-column name-body">Сложные подчиненные</div>
                        <div className="library__item-column author-body">Максим Батырев</div>
                        <div className="library__item-column type-body">Аудио</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs__content-item" id="tab-2">content 2</div>
                <div className="tabs__content-item" id="tab-3">content 3</div>
                <div className="tabs__content-item" id="tab-4">content 4</div>
                <div className="tabs__content-item" id="tab-5">content 5</div>
                <div className="tabs__content-item" id="tab-6">content 6</div>
                <div className="tabs__content-item" id="tab-7">content 7</div>
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

export default LibraryPage;

// src/components/LoginPage.tsx

import React, { useState } from 'react';
import intro from "/src/assets/images/intro/1.jpg"
import card1 from "/src/assets/images/card/1.jpg"
import card2 from "/src/assets/images/card/2.jpg"
import card3 from "/src/assets/images/card/3.jpg"
import card4 from "/src/assets/images/card/4.jpg"
import card5 from "/src/assets/images/card/5.jpg"
import Navbar from '../../organisms/Navbar';
import { IntroComponent } from '../../molecules/IntroComponent';

const MyCoursesPage: React.FC = () => {
  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            <div className="tabs">
              <div className="tabs__top">
                <div className="tabs__top-items">
                  <a className="tabs__top-item tabs__top-item--active" href="#tab-1">Назначенные (<span>5</span>)</a>
                  <a className="tabs__top-item" href="#tab-2">Завершенные (<span>10</span>)</a>
                </div>
                <label className="search">
                  <input className="search__input" type="search"/>
                </label>
              </div>
              <div className="tabs__content">
                <div className="tabs__content-item tabs__content-item--active" id="tab-1">
                  <div className="cards">
                    <div className="card">
                      <div className="card__info">
                        <div className="card__preview">
                          <img className="card__preview-img" src={card1} alt=""/>
                        </div>
                        <div className="card__content">
                          <h3 className="card__content-title">Оценка персонала</h3>
                          <p className="card__content-descr">1 материал</p>
                        </div>
                      </div>
                      <div className="card__progress card__progress--completed">
                        Завершен
                      </div>
                    </div>
                    <div className="card">
                      <div className="card__info">
                        <div className="card__preview">
                          <img className="card__preview-img" src={card2} alt=""/>
                        </div>
                        <div className="card__content">
                          <h3 className="card__content-title">Как давать обратную связь сотрудникам?</h3>
                          <p className="card__content-descr">1 материал (содержит тестовое задание)</p>
                        </div>
                      </div>
                      <div className="card__progress card__progress--failed">
                        Не пройден (<span>56%</span>)
                      </div>
                    </div>
                    <div className="card">
                      <div className="card__info">
                        <div className="card__preview">
                          <img className="card__preview-img" src={card3} alt=""/>
                        </div>
                        <div className="card__content">
                          <h3 className="card__content-title">Делу время. Основы тайм-менджмента</h3>
                          <p className="card__content-descr">2 материала (содержит тестовое задание)</p>
                        </div>
                      </div>
                      <div className="card__progress">
                        В работе (<span>1/2</span>)
                      </div>
                    </div>
                    <div className="card">
                      <div className="card__info">
                        <div className="card__preview">
                          <img className="card__preview-img" src={card4} alt=""/>
                        </div>
                        <div className="card__content">
                          <h3 className="card__content-title">Основы охраны труда</h3>
                          <p className="card__content-descr">4 материала (содержит тестовое задание)</p>
                        </div>
                      </div>
                      <div className="card__progress">
                        В работе (<span>3/4</span>)
                      </div>
                    </div>x 
                    <div className="card">
                      <div className="card__info">
                        <div className="card__preview">
                          <img className="card__preview-img" src={card5} alt=""/>
                        </div>
                        <div className="card__content">
                          <h3 className="card__content-title">Устройство трансформатора</h3>
                          <p className="card__content-descr">7 материалов (содержит тестовое задание)</p>
                        </div>
                      </div>
                      <div className="card__progress">
                        В работе (<span>1/7</span>)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs__content-item" id="tab-2">content 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCoursesPage;

// src/components/LoginPage.tsx

import React, { useState } from 'react';
import Navbar from '../../organisms/Navbar';
import intro from "/src/assets/images/intro/2.jpg"
import { IntroComponent } from '../../molecules/IntroComponent';

const KnowledgeBasePage: React.FC = () => {
  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            <div className="base">
              <ul className="base__list">
                <li className="base__item base__item--custom">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src="src/assets/images/base/1.svg" alt=""/>
                    <h3 className="base__item-title">Пакет
                      новичка</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src="src/assets/images/base/2.svg" alt=""/>
                    <h3 className="base__item-title">Конструирование
                      и технологии</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src="src/assets/images/base/3.svg" alt=""/>
                    <h3 className="base__item-title">Производство</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src="src/assets/images/base/4.svg" alt=""/>
                    <h3 className="base__item-title">Общие знания</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src="src/assets/images/base/5.svg" alt=""/>
                    <h3 className="base__item-title">Продажи
                      и маркетинг</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src="src/assets/images/base/6.svg" alt=""/>
                    <h3 className="base__item-title">1С:ERP</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src="src/assets/images/base/7.svg" alt=""/>
                    <h3 className="base__item-title">КТО</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src="src/assets/images/base/8.svg" alt=""/>
                    <h3 className="base__item-title">Справочник сотрудника</h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KnowledgeBasePage;

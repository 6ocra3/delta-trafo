// src/components/LoginPage.tsx

import React, { useState } from 'react';
import Navbar from '../../organisms/Navbar';
import intro from "/src/assets/images/intro/2.jpg"
import { IntroComponent } from '../../molecules/IntroComponent';
import t1 from "/src/assets/images/base/1.svg";
import t2 from "/src/assets/images/base/2.svg";
import t3 from "/src/assets/images/base/3.svg";
import t4 from "/src/assets/images/base/4.svg";
import t5 from "/src/assets/images/base/5.svg";
import t6 from "/src/assets/images/base/6.svg";
import t7 from "/src/assets/images/base/7.svg";
import t8 from "/src/assets/images/base/8.svg";

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
                    <img className="base__item-img" src={t1} alt=""/>
                    <h3 className="base__item-title">Пакет
                      новичка</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src={t2} alt=""/>
                    <h3 className="base__item-title">Конструирование
                      и технологии</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src={t3} alt=""/>
                    <h3 className="base__item-title">Производство</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src={t4} alt=""/>
                    <h3 className="base__item-title">Общие знания</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src={t5} alt=""/>
                    <h3 className="base__item-title">Продажи
                      и маркетинг</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src={t6} alt=""/>
                    <h3 className="base__item-title">1С:ERP</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src={t7} alt=""/>
                    <h3 className="base__item-title">КТО</h3>
                  </a>
                </li>
                <li className="base__item">
                  <a className="base__item-link" href="#">
                    <img className="base__item-img" src={t8} alt=""/>
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

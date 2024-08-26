// src/components/LoginPage.tsx

import React, { useEffect, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../../store';
import { getKnowledgeBase } from '../../../store/slices/files';


const KnowledgeBasePage: React.FC = () => {

  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.files.filesData.knowledgeBase)

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    dispatch(getKnowledgeBase())
  }, [])

  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            <div className="base">
              <ul className="base__list">
                {data && data.map(el => (
                  <li>
                      <a className="base__item-link" href="#">
                        <img className="base__item-img" src={el.imageUrl} alt=""/>
                        <h3 className="base__item-title">{el.name}</h3>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KnowledgeBasePage;

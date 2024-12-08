// src/components/LoginPage.tsx

import React, {useEffect, useState} from 'react';
import Navbar from '../../organisms/Navbar';
import intro from "/src/assets/images/intro/2.jpg"
import { IntroComponent } from '../../molecules/IntroComponent';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getKnowledgeBase } from '../../../store/slices/files';
import { IKnowledgeBase } from '../../../api/files/types';
import {KnowledgeBaseTable} from "../../organisms/MainTables/KnowledgeBaseTable";


const KnowledgeBasePage: React.FC = () => {
  const [section, setSection] = useState<string>("");
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.files.filesData.knowledgeBase)

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    dispatch(getKnowledgeBase())
  }, [])

  const onClickNavigate = (el: IKnowledgeBase) => {
    setSection(el.name);
    console.log(el.name)
  }

  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            {section.length ?
                <div className="tabs">
                  <KnowledgeBaseTable section={section} backFunction={() => setSection("")}/>
                </div>
                :
                <div className="base">
                  <ul className="base__list">
                    {data && data.map((el, index) => (
                        <li key={index} onClick={() => onClickNavigate(el)}>
                          <a className="base__item-link">
                            <img className="base__item-img" src={el.imageUrl} alt=""/>
                            <h3 className="base__item-title">{el.description}</h3>
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default KnowledgeBasePage;

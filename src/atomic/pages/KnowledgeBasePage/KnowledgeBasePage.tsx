// src/components/LoginPage.tsx

import React, { useEffect } from 'react';
import Navbar from '../../organisms/Navbar';
import intro from "/src/assets/images/intro/2.jpg"
import { IntroComponent } from '../../molecules/IntroComponent';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getKnowledgeBase, updateMainTableRootInfo } from '../../../store/slices/files';
import { IKnowledgeBase } from '../../../api/files/types';
import { useNavigate } from 'react-router-dom';


const KnowledgeBasePage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.files.filesData.knowledgeBase)

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    dispatch(getKnowledgeBase())
  }, [])

  const onClickNavigate = (el: IKnowledgeBase) => {
    dispatch(updateMainTableRootInfo({ page: el.page, folderId: el.folderId }))
    switch (el.page){
      case "gallery":
        navigate('../gallery')
        break;
      case "library":
        navigate('../library')
        break;
      case "paper": 
        navigate('../newspaper')
        break;
    }

    const container = document.querySelector('.wrapper');
    container?.scrollTo(0, 0);

  }

  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            <div className="base">
              <ul className="base__list">
                {data && data.map((el, index) => (
                  <li key={index} onClick={() => onClickNavigate(el)}>
                      <a className="base__item-link">
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

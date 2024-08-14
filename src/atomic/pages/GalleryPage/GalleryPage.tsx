// src/components/LoginPage.tsx

import React, { useState } from 'react';
import Navbar from '../../organisms/Navbar';
import { IntroComponent } from '../../molecules/IntroComponent';
import intro from "/src/assets/images/intro/4.jpg"
import { GalleryTable } from '../../organisms/MainTables/GalleryTable';

const GalleryPage: React.FC = () => {

  const [searchString, setSearchString] = useState("")

  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            <div className="tabs">
              <div className="tabs__top tabs__top--column">
                <div className="tabs__top-items">
                  <a className="tabs__top-item tabs__top-item--active" href="#tab-1">Фото</a>
                  <a className="tabs__top-item" href="#tab-2">Видео</a>
                </div>
                <label className="search">
                <input value={searchString} onChange={(e) => setSearchString(e.target.value)} className="search__input"/>
                </label>
              </div>
              <div className="tabs__content">
                <GalleryTable searchString={searchString} setSearchString={setSearchString}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;

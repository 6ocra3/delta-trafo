// src/components/LoginPage.tsx

import React from 'react';
import Navbar from '../../organisms/Navbar';
import { IntroComponent } from '../../molecules/IntroComponent';
import intro from "/src/assets/images/intro/4.jpg"
import { GalleryTable } from '../../organisms/MainTables/GalleryTable';

const GalleryPage: React.FC = () => {

  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            <div className="tabs">
              <GalleryTable/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;

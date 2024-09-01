// src/components/LoginPage.tsx

import React from 'react';

import intro from "/src/assets/images/intro/4.jpg";
import Navbar from '../../organisms/Navbar';
import { IntroComponent } from '../../molecules/IntroComponent';
import { NewspaperTable } from '../../organisms/MainTables/NewspaperTable';

const NewspaperPage: React.FC = () => {
  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            <div className="tabs">
              <NewspaperTable/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewspaperPage;

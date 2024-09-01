// src/components/LoginPage.tsx

import React from 'react';
import Navbar from '../../organisms/Navbar';
import intro from "/src/assets/images/intro/3.jpg"
import { IntroComponent } from '../../molecules/IntroComponent';
import { LibraryTable } from '../../organisms/MainTables/LibraryTable';
const LibraryPage: React.FC = () => {  
  return (
    <main className="main main--decor">
      <IntroComponent imageSrc={intro}/>
      <div className="main__content">
        <div className="container">
          <div className="main__inner">
            <Navbar/>
            <div className="tabs">
              <LibraryTable/>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default LibraryPage;

// src/components/LoginPage.tsx

import React, { useState } from 'react';
import { Header } from '../../organisms/Header';
import { MyCoursePage } from '../../pages/MyCoursePage';
import { Footer } from '../../organisms/Footer';

const MainTemplate: React.FC = () => {

  return (
    <body>
        <div className="wrapper">
          <Header/>
          <MyCoursePage/>
          <Footer/>
        </div>
    </body>
  );
};

export default MainTemplate;

// src/components/LoginPage.tsx

import React, { useState } from 'react';
import Header from '../../organisms/Header';
import { MyCoursesPage } from '../../pages/MyCoursesPage';
import { Footer } from '../../organisms/Footer';
import { KnowledgeBasePage } from '../../pages/KnowledgeBasePage';
import { LibraryPage } from '../../pages/LibraryPage';
import { GalleryPage } from '../../pages/GalleryPage';
import { NewspaperPage } from '../../pages/NewspaperPage';
import { Route, Routes } from 'react-router-dom';

const MainTemplate: React.FC = () => {

  return (
      <div className="wrapper">
        <Header/>
        <Routes>
          <Route path='courses' element={<MyCoursesPage/>} />
          <Route path='base' element={<KnowledgeBasePage/>} />
          <Route path='library' element={<LibraryPage/>} />
          <Route path='gallery' element={<GalleryPage/>} />
          <Route path='newspaper' element={<NewspaperPage/>} />
        </Routes>
        <Footer/>
      </div>
  );
};

export default MainTemplate;

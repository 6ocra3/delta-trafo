// src/components/LoginPage.tsx

import React, { useEffect } from 'react';
import { MyHeader } from '../../organisms/MyHeader';
import { Footer } from '../../organisms/Footer';
import { MyCoursesPage } from '../../pages/MyCoursesPage';
import { KnowledgeBasePage } from '../../pages/KnowledgeBasePage';
import { LibraryPage } from '../../pages/LibraryPage';
import { GalleryPage } from '../../pages/GalleryPage';
import { NewspaperPage } from '../../pages/NewspaperPage';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

const MainTemplate: React.FC = () => {
  const location = useLocation();

  useEffect(() => {

    const container = document.querySelector('.wrapper');
    container?.scrollTo(0, 0);
  }, [location])

  return (
      <div className="wrapper">
        <MyHeader/>
        <Routes>
          <Route path='courses' element={<MyCoursesPage/>} />
          <Route path='base' element={<KnowledgeBasePage/>} />
          <Route path='library' element={<LibraryPage/>} />
          <Route path='gallery' element={<GalleryPage/>} />
          <Route path='newspaper' element={<NewspaperPage/>} />
          <Route path="*" element={<Navigate to="courses" />} />
        </Routes>
        <Footer/>
      </div>
  );
};

export default MainTemplate;

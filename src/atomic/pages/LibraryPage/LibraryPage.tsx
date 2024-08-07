// src/components/LoginPage.tsx

import React, { useState } from 'react';
import Navbar from '../../organisms/Navbar';
import intro from "/src/assets/images/intro/3.jpg"
import { IntroComponent } from '../../molecules/IntroComponent';
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  ColumnDef
} from '@tanstack/react-table';
import { LibraryTable } from '../../organisms/MainTables/LibraryTable';
const LibraryPage: React.FC = () => {

  // const table = useReactTable()
  
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
                  <a className="tabs__top-item tabs__top-item--active" href="#tab-1">Все (<span>78</span>)</a>
                  <a className="tabs__top-item" href="#tab-2">Производство (<span>11</span>)</a>
                  <a className="tabs__top-item" href="#tab-3">Продажи и маркетинг (<span>8</span>)</a>
                  <a className="tabs__top-item" href="#tab-4">КТО (<span>15</span>)</a>
                  <a className="tabs__top-item" href="#tab-5">Менеджмент (<span>13</span>)</a>
                  <a className="tabs__top-item" href="#tab-6">Управление персоналом (<span>9</span>)</a>
                  <a className="tabs__top-item" href="#tab-7">Разное (<span>22</span>)</a>
                </div>
                <label className="search">
                  <input className="search__input" type="search"/>
                </label>
              </div>
              <div className='tabs__content'>
              <LibraryTable/>
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default LibraryPage;

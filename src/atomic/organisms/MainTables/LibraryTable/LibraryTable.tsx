import React, { useState } from 'react';
import "./LibraryTable.scss"
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { MainTable } from '../../../molecules/MainTable';
import folder from "/src/assets/images/icons/folder.svg"


interface Book {
    title: string;
    author: string;
    type: string;
  }

const data: Book[] = [
    { title: '7 навыков высокоэффективных людей', author: 'Стивен Кови', type: 'Текст' },
    { title: 'Атлант расправил плечи', author: 'Айн Рэнд', type: 'Аудио' },
    { title: 'Богатый Папа, Бедный Папа', author: 'Роберт Т. Кийосаки', type: 'Текст' },
    { title: 'Цель. Процесс непрерывного совершенствования', author: 'Элия М. Гольдратт', type: 'Текст' },
    { title: 'Самый богатый человек в Вавилоне', author: 'Джордж С. Клейсон', type: 'Текст' },
    { title: 'Доставляя счастье. От нуля до миллиарда', author: 'Тони Шей', type: 'Аудио' },
    { title: 'Маркетинг без бюджета. 50 работающих инструментов', author: 'Игорь Манн', type: 'Текст' },
    { title: '45 татуировок менеджера', author: 'Максим Батырев', type: 'Текст' },
    { title: 'Дао Toyota: 14 принципов менеджмента ведущей компании мира', author: 'Джеффри Лайкер', type: 'Текст' },
    { title: '5S для офиса. Как организовать эффективное рабочее место', author: 'Том Фабрицио', type: 'Аудио' },
    { title: 'Продажа товаров и услуг по методу бережливого производства', author: 'Джеймс П. Вумек', type: 'Аудио' },
    { title: 'Учитесь видеть бизнес-процессы: Практика построения карт потоков создания ценности', author: 'Джон Шук', type: 'Текст' },
    { title: 'Бережливое производство: Как избавиться от потерь и добиться процветания вашей компании', author: 'Джеймс П. Вумек', type: 'Текст' },
    { title: 'Сложные подчиненные', author: 'Максим Батырев', type: 'Аудио' },
  ];

  const columnHelper = createColumnHelper<Book>();

  const columns: ColumnDef<Book, any>[] = [
    columnHelper.display({
        id: 'icon',
        header: '',
        cell: () => {
            return <div style={{padding: "0 30px 0 30px"}}>
                <img src={folder} />
                </div>
        },
        size: 10, 
        enableSorting: false,
    }),
    columnHelper.accessor('title', {
      header: 'Название',
      size: 45,
      enableSorting: true,
    }),
    columnHelper.accessor('author', {
      header: 'Автор',
      size: 35,
      enableSorting: true,
    }),
    columnHelper.accessor('type', {
      header: 'Тип',
      size: 10,
      enableSorting: true,
    }),
  ];

const IntroComponent: React.FC = () => {
  return (
    <MainTable data={data} columns={columns}/>
  );
};

export default IntroComponent;
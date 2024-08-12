import React, { useEffect, useState } from 'react';
import "./LibraryTable.scss"
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { MainTable } from '../../../molecules/MainTable';
import folder from "/src/assets/images/icons/folder.svg"
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getLibraryFiles } from '../../../../store/slices/files';
import { ILibraryFile } from '../../../../api/files/types';

// const data: Book[] = [
//     { title: '7 навыков высокоэффективных людей', author: 'Стивен Кови', type: 'Текст' },
//     { title: 'Атлант расправил плечи', author: 'Айн Рэнд', type: 'Аудио' },
//     { title: 'Богатый Папа, Бедный Папа', author: 'Роберт Т. Кийосаки', type: 'Текст' },
//     { title: 'Цель. Процесс непрерывного совершенствования', author: 'Элия М. Гольдратт', type: 'Текст' },
//     { title: 'Самый богатый человек в Вавилоне', author: 'Джордж С. Клейсон', type: 'Текст' },
//     { title: 'Доставляя счастье. От нуля до миллиарда', author: 'Тони Шей', type: 'Аудио' },
//     { title: 'Маркетинг без бюджета. 50 работающих инструментов', author: 'Игорь Манн', type: 'Текст' },
//     { title: '45 татуировок менеджера', author: 'Максим Батырев', type: 'Текст' },
//     { title: 'Дао Toyota: 14 принципов менеджмента ведущей компании мира', author: 'Джеффри Лайкер', type: 'Текст' },
//     { title: '5S для офиса. Как организовать эффективное рабочее место', author: 'Том Фабрицио', type: 'Аудио' },
//     { title: 'Продажа товаров и услуг по методу бережливого производства', author: 'Джеймс П. Вумек', type: 'Аудио' },
//     { title: 'Учитесь видеть бизнес-процессы: Практика построения карт потоков создания ценности', author: 'Джон Шук', type: 'Текст' },
//     { title: 'Бережливое производство: Как избавиться от потерь и добиться процветания вашей компании', author: 'Джеймс П. Вумек', type: 'Текст' },
//     { title: 'Сложные подчиненные', author: 'Максим Батырев', type: 'Аудио' },
//   ];

  const columnHelper = createColumnHelper<ILibraryFile>();

  const columns: ColumnDef<ILibraryFile, any>[] = [
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
    columnHelper.accessor('name', {
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

interface LibraryTableProps{
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}  

const IntroComponent: React.FC<LibraryTableProps> = ({searchString, setSearchString}) => {

  const dispatch = useAppDispatch();
  const { data } = useAppSelector( (state) => state.files.filesData)
  const [root, setRoot] = useState<ILibraryFile>()
  const [tableData, setTableData] = useState<ILibraryFile[]>([])
  const [path, setPath] = useState<ILibraryFile[]>([])

  useEffect(() => {
   dispatch(getLibraryFiles())
  }, [])

  useEffect(() => {
    if(data){
      setPath([])
      setSearchString("")
      setRoot(data)
    }
  }, [data])

  useEffect(() => {
    if (root) {
      if(root !== path[path.length-1]){
        console.log(root)
        setPath([...path, root])
      }
      const combinedData = [...(root.folders || []), ...(root.files || [])];
      setSearchString("")
      setTableData(combinedData);
    }
  }, [root])

  useEffect(() => {
    if(searchString.length){
      setTableData(tableData.filter(el => el.name.includes(searchString) || el.author.includes(searchString)))
    } else if(root) {
      const combinedData = [...(root.folders || []), ...(root.files || [])];
      setTableData(combinedData);
    }
    
  }, [searchString])

  const goTo = (el: ILibraryFile) => {
    if (el !== path[path.length - 1]) {
      // Обновляем путь, удаляя лишние элементы
      const newPath = path.slice(0, path.findIndex((item) => item === el) + 1);
      setPath(newPath);
      setRoot(el);
    }
  }

  return (
    // <></>
    <>
    
      <div className='path-row'>
        {path.length > 1 && path.map( (el: ILibraryFile, i: number) => {
          return(
            <>
            <div key={i} onClick={() => goTo(el)}>
              {i == 0 ? "Библиотека" : el.name}
            </div>
            <div>
              {i != path.length-1 && "->" }
            </div>
            </>
          )
        })}
      </div>
      <MainTable data={tableData} columns={columns} setRoot={setRoot}/>
    </>
  );
};

export default IntroComponent;
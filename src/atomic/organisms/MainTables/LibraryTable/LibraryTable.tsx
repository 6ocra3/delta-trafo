import React, { useEffect } from 'react';
import "./LibraryTable.scss"
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { MainTable } from '../../../molecules/MainTable';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getLibraryFiles } from '../../../../store/slices/files';
import { MainTableFile } from '../../../../api/files/types';
import { RowIconCell } from '../../../atoms/RowIconCell';
import { tableInfoProps } from '../../../molecules/MainTable/MainTable';

  const columnHelper = createColumnHelper<MainTableFile>();

  const columns: ColumnDef<MainTableFile, any>[] = [
    columnHelper.display({
        id: 'icon',
        header: '',
        cell: () => {
          return <RowIconCell/>;
        },
        size: 60, 
        enableSorting: false,
    }),
    columnHelper.accessor('name', {
      header: 'Название',
      minSize: 50,
      enableSorting: true,
    }),
    columnHelper.accessor('author', {
      header: 'Автор',
      minSize: 50,
      enableSorting: false,
    }),
    columnHelper.accessor('type', {
      header: 'Тип',
      cell: (row) => {
        var type = ""
        //@ts-ignore
        switch(row.row.original.type){
          case 0:
            type = "Папка"
            break
          case 1:
            type = "Изображение"
            break
          case 2:
              type = "Видео"
              break
          case 3:
            type = "Аудио"
            break
          case 4:
            type = "Текст"
            break
          case 5:
            type = "Программа"
        }
        return(<>{type}</>)
      },
      size: 60,
      enableSorting: false,
    }),
  ];

const LibraryTable: React.FC = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector( (state) => state.files.filesData.library)

  useEffect(() => {
   dispatch(getLibraryFiles({addAll: true}))
  }, [])

  const tableInfo: tableInfoProps = {
    tableName: "Библиотека",
    pageName: "library",
    fileFields: ["path", "author"],
    folderFields: ["name","path", "author"]
  }

  return (
    <>
      {
        data && <MainTable data={data} columns={columns} tableInfo={tableInfo} />
      }
    </>
  );
};

export default LibraryTable;
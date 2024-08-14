import React, { useEffect, useState } from 'react';
import "./LibraryTable.scss"
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { MainTable } from '../../../molecules/MainTable';
import folder from "/src/assets/images/icons/folder.svg"
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getLibraryFiles } from '../../../../store/slices/files';
import { ILibraryFile, MainTableFile } from '../../../../api/files/types';
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
            type = "Текст"
            break
          case 4:
            type = "Изображение"
            break
          case 5:
            type = "Код"
        }
        return(<>{type}</>)
      },
      size: 60,
      enableSorting: false,
    }),
  ];

interface LibraryTableProps{
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}  

const LibraryTable: React.FC<LibraryTableProps> = ({searchString, setSearchString}) => {

  const dispatch = useAppDispatch();
  const data = useAppSelector( (state) => state.files.filesData.library)

  useEffect(() => {
   dispatch(getLibraryFiles())
  }, [])

  useEffect(() => {
    if(data){
      setSearchString("")
    }
  }, [data])

  const tableInfo: tableInfoProps = {
    tableName: "Библиотека"
  }

  return (
    <>
      {
        data && <MainTable data={data} columns={columns} searchString={searchString} setSearchString={setSearchString} tableInfo={tableInfo} />
      }
    </>
  );
};

export default LibraryTable;
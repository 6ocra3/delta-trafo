import React, { useEffect } from 'react';
import "./NewspaperTable.scss"
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { MainTable } from '../../../molecules/MainTable';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getNewspaperFiles } from '../../../../store/slices/files';
import {  MainTableFile } from '../../../../api/files/types';
import { RowIconCell } from '../../../atoms/RowIconCell';
import { tableInfoProps } from '../../../molecules/MainTable/MainTable';

  const columnHelper = createColumnHelper<MainTableFile>();

  const columns: ColumnDef<MainTableFile, any>[] = [
    columnHelper.display({
        id: 'icon',
        header: '',
        cell: () => {
            return <RowIconCell/>
        },
        size: 60, 
        maxSize: 60,
        enableSorting: false,
    }),
    columnHelper.accessor('name', {
      header: 'Название',
      minSize: 100,
      enableSorting: true,
    }),
  ];


const NewspaperTable: React.FC = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector( (state) => state.files.filesData.newspaper)

  useEffect(() => {
   dispatch(getNewspaperFiles())
  }, [])

  const tableInfo: tableInfoProps = {
    tableName: "Газета",
    pageName: "paper",
    fileFields: ["path"],
    folderFields: ["name","path"]
  }

  return (
    <>
      {
        data && <MainTable data={data} columns={columns} tableInfo={tableInfo} />
      }
    </>
  );
};

export default NewspaperTable;
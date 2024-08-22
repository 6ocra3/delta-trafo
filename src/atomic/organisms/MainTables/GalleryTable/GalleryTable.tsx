import React, { useEffect, useState } from 'react';
import "./GalleryTable.scss"
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { MainTable } from '../../../molecules/MainTable';
import folder from "/src/assets/images/icons/folder.svg"
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getGalleryFiles, getLibraryFiles } from '../../../../store/slices/files';
import { IGalleryFile, ILibraryFile, MainTableFile } from '../../../../api/files/types';
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
        size: 70, 
        enableSorting: false,
    }),
    columnHelper.accessor('name', {
      header: 'Название',
      minSize: 50,
      enableSorting: true,
    }),
    columnHelper.accessor('year', {
      header: 'Год',
      minSize: 50,
      enableSorting: true,
    }),
    columnHelper.accessor('countFiles', {
      header: 'Количество файлов',
      size: 70,
      enableSorting: false,
    }),
  ];

const GalleryTable: React.FC = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector( (state) => state.files.filesData.gallery)

  useEffect(() => {
   dispatch(getGalleryFiles())
  }, [])

  const tableInfo: tableInfoProps = {
    tableName: "Галерея",
    pageName: "gallery",
    fileFields: ["path", "year"],
    folderFields: ["name","path", "year"]
  }

  return (
    <>
      {
        data && <MainTable data={data} columns={columns} tableInfo={tableInfo} />
      }
    </>
  );
};

export default GalleryTable;
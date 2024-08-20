import React, { useEffect, useState } from 'react';
import { ColumnDef, useReactTable, getCoreRowModel, 
  flexRender, getSortedRowModel, SortingState,
getPaginationRowModel, 
PaginationState} from '@tanstack/react-table';
import "./MainTable.css"
import prev from "/src/assets/images/icons/arrow-prev.svg"
import next from "/src/assets/images/icons/arrow-next.svg"
import { IGalleryFile, ILibraryFile, INewspaperFile, MainTableFile } from '../../../api/files/types';

import arrowDown from "/src/assets/images/icons/arrow-down.svg"

import { downloadFiles } from '../../../store/slices/files';
import { useAppDispatch } from '../../../store';

export interface tableInfoProps{
  tableName: string;
}

interface MainTableProps {
  data: MainTableFile;
  columns: ColumnDef<MainTableFile, any>[];
  tableInfo: tableInfoProps;
}


const MainTable: React.FC<MainTableProps> = ({ data, columns, tableInfo }) => {
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<MainTableFile>();
  const [searchString, setSearchString] = useState("");
  const [path, setPath] = useState<MainTableFile[]>([])
  const [root, setRoot] = useState<MainTableFile>()
  const [tableData, setTableData] = useState<Array<MainTableFile>>([])
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  useEffect(() => {
    setTab(data.folders[0])
  }, [])

  useEffect(() => {
    setPath([])
    setRoot(tab)
  }, [tab])

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
      setTableData(tableData.filter(el => el.name.includes(searchString)))
    } else if(root) {
      const combinedData = [...(root.folders || []), ...(root.files || [])];
      setTableData(combinedData);
    }
    
  }, [searchString])

  const onRowDoubleClick = async (rowOriginal: any) => {
    if(rowOriginal.type === 0){
      setRoot(rowOriginal);
    } else {
      try {
        const resultAction = await dispatch(downloadFiles({ page: "library", fileId: rowOriginal.id })).unwrap();
        
        const url = window.URL.createObjectURL(resultAction);
        const link = document.createElement('a');
        link.href = url;

        link.setAttribute('download', rowOriginal.name || 'downloaded_file');
        document.body.appendChild(link);
        link.click();

        link.remove();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('File download failed', error);
      }
    }
  }

  const goTo = (el: MainTableFile) => {
    if (el !== path[path.length - 1]) {
      const newPath = path.slice(0, path.findIndex((item) => item === el) + 1);
      setPath(newPath);
      setRoot(el);
    }
  }

  const table = useReactTable<MainTableFile>({
    data: tableData,
    columns,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
    <div className="tabs__top tabs__top--column">
      <div className="tabs__top-items">
        {
          data.folders.map(el => (
            <a className={["tabs__top-item",  JSON.stringify(el) === JSON.stringify(tab)  && "tabs__top-item--active"].join(" ")} onClick={() => setTab(el)} href="#tab-2">{el.name} (<span>{el.folders.length+el.files.length}</span>)</a>
          ))
        }
      </div>
      <label className="search">
        <input value={searchString} onChange={(e) => setSearchString(e.target.value)} className="search__input"/>
      </label>
    </div>
    <div className='tabs__content'>
      <div className='path-row'>
        {path.length > 1 && path.map( (el: MainTableFile, i: number) => {
          return(
            <>
            <div key={i} onClick={() => goTo(el)}>
              {i == 0 ? tableInfo.tableName : el.name}
            </div>
            <div>
              {i != path.length-1 && "->" }
            </div>
            </>
          )
        })}
      </div>
    <table className="main_table">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr className='main_table--header' key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                style={{ width: header.getSize() }}
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className='main_table--header-cell'
              >
                <div style={{display: "flex", gap: "10px"}}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                {header.column.getIsSorted() ? (
                  header.column.getIsSorted() === 'desc' ? <img src={arrowDown}/> : <img src={arrowDown} style={{transform:"rotate(180deg)"}}/>
                ) : null}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}
          onDoubleClick={() => onRowDoubleClick?.(row.original)}
          >
            {row.getVisibleCells().map(cell => (
              <td
                className='main_table--cell'
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="pagination">
      <a onClick={() => {table.previousPage()}} className="pagination__prev pagination__arrows">
        <img src={prev} alt=""/>
      </a>
      <ul className="pagination__list">
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <li key={i} className="pagination__item">
              <a
                onClick={() => table.setPageIndex(i)}
                className={`pagination__link ${i === pagination.pageIndex ? 'pagination__link--active' : ''}`}
              >
                {i + 1}
              </a>
            </li>
          ))}
        </ul>
      <a onClick={() => {table.nextPage()}} 
          className="pagination__next pagination__arrows">
        <img src={next} alt=""/>
      </a>
    </div>
    </div>
    </>
  );
};

export default MainTable;

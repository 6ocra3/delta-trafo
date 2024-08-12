import React, { useState } from 'react';
import { ColumnDef, useReactTable, getCoreRowModel, 
  flexRender, getSortedRowModel, SortingState,
getPaginationRowModel, 
PaginationState} from '@tanstack/react-table';
import "./MainTable.css"
import prev from "/src/assets/images/icons/arrow-prev.svg"
import next from "/src/assets/images/icons/arrow-next.svg"
import { ILibraryFile } from '../../../api/files/types';

interface MainTableProps {
  data: Array<any>;
  columns: ColumnDef<any, string>[];
  setRoot: React.Dispatch<React.SetStateAction<ILibraryFile | undefined>>; // Тип для setRoot
}

const MainTable: React.FC<MainTableProps> = ({ data, columns, setRoot }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const onRowDoubleClick = (rowOriginal: any) => {
    setRoot(rowOriginal)
  }

  const table = useReactTable({
    data,
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
    <table className="main_table">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr className='main_table--header' key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className='main_table--header-cell'
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                {header.column.getIsSorted() ? (
                  header.column.getIsSorted() === 'desc' ? ' 🔽' : ' 🔼'
                ) : null}
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
    </>
  );
};

export default MainTable;

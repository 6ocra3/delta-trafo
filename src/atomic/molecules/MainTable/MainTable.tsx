import React, { useEffect, useState } from 'react';
import { ColumnDef, useReactTable, getCoreRowModel, 
  flexRender, getSortedRowModel, SortingState,
getPaginationRowModel, 
PaginationState} from '@tanstack/react-table';
import "./MainTable.css"
import prev from "/src/assets/images/icons/arrow-prev.svg"
import next from "/src/assets/images/icons/arrow-next.svg"
import { FILETYPES, MainTableFile } from '../../../api/files/types';

import arrowDown from "/src/assets/images/icons/arrow-down.svg"
import deleteIcon from "/src/assets/images/icons/delete.svg"
import { downloadFiles, updateMainTableRootInfo } from '../../../store/slices/files';
import { useAppDispatch, useAppSelector } from '../../../store';
import Modal from '../../atoms/Modal';
import useModal from '../../../utils/hooks/useModal';
import { FileFields, FolderFields } from '../CreateFileFolderForm/CreateFileFolderForm';
import { CreateFileFolderform } from '../CreateFileFolderForm';
import api from '../../../api';

export interface tableInfoProps{
  tableName: string;
  pageName: string;
  folderFields: FolderFields[];
  fileFields: FileFields[];
}

interface MainTableProps {
  data: MainTableFile;
  columns: ColumnDef<MainTableFile, any>[];
  tableInfo: tableInfoProps;
}

const getPathForCreate = (curRoot: MainTableFile): string => {
  if(curRoot.path.length == 0){
    return ""
  }
  console.log(curRoot.path)
  const temp = curRoot.path.split("/").slice(1).join("/")
  var itog = ""
  if(temp.length > 0){
    itog += "/";
  }
  itog += temp + "/" + curRoot.name;
  return itog
}

const dfs = (folder: MainTableFile, curPath: MainTableFile[], id: number): MainTableFile | undefined => {
  for(let i = 0; i<folder.folders.length;i++){
    let temp = folder.folders[i];
    if(temp.isMeta){
      continue
    }
    if(temp.id == id){
      return temp;
    } else {
      curPath.push(temp)
      let res: undefined | MainTableFile = dfs(temp, curPath, id);
      if(res != undefined){
        return res
      }
      curPath.pop()
    }
  }
  return undefined;
}

const MainTable: React.FC<MainTableProps> = ({ data, columns, tableInfo }) => {
  const dispatch = useAppDispatch();
  const {page, folderId} = useAppSelector(state => state.files.filesData.mainTableRootInfo)
  const [isShowingModal, toggleModal] = useModal();
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
    let res;
    let newPath: MainTableFile[] = []
    if(folderId != null && page == tableInfo.pageName){
      res = dfs(data, newPath, folderId)
    }
    if(page !== tableInfo.pageName){
      dispatch(updateMainTableRootInfo({page: null, folderId: null}))
    }
    if(res){
      setTab(newPath.length ? newPath[0] : res)
      setRoot(res)
      setPath(newPath)
    }
    else {
      const isAdmin = true
      setPath([])
      setTab(data.folders[0])
      if(isAdmin){
        setRoot(data)
      } else {
        setRoot(data.folders[0])
      }
    }

  }, [])

  useEffect(() => {
    if (root) {
      if(root !== path[path.length-1]){
        setPath([...path, root])
      }
      const combinedData = [...(root.folders.filter(el => el.isMeta != true) || []), ...(root.files || [])];
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

  const onClickDelete = async (rowOriginal: MainTableFile) => {
    if(rowOriginal.type == FILETYPES.Folder){
      api.files.deleteFolder({folderId: rowOriginal.id})
    } else {
      api.files.deleteFile({page: tableInfo.pageName, fileId:rowOriginal.id})
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
    <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
      <CreateFileFolderform presetPath={root ? getPathForCreate(root) : ""} pageName={tableInfo.pageName} folderFields={tableInfo.folderFields} fileFields={tableInfo.fileFields}/>
    </Modal>
    <div className="tabs__top tabs__top--column">
      <div className="tabs__top-items">
        {
          data.folders.map((el, index) => (
            <a key={index} className={["tabs__top-item",  JSON.stringify(el) === JSON.stringify(tab)  && "tabs__top-item--active"].join(" ")} onClick={() => {
              setTab(el); 
              setPath([])
              setRoot(el)
            }}>{el.name} (<span>{el.folders.length+el.files.length}</span>)</a>
          ))
        }
      </div>
      <div style={{width:"100%",display: "flex", justifyContent: "space-between"}}>
        <label className="search">
          <input value={searchString} onChange={(e) => setSearchString(e.target.value)} className="search__input"/>
        </label>
        <div style={{display: "flex", alignItems: "center"}}>
        <button className="panel__btn add-section" onClick={() => toggleModal()} >Добавить раздел</button>
        </div>
      </div>

    </div>
    <div className='tabs__content'>
      <div className='path-row'>
        {path.length > 1 && path.map( (el: MainTableFile, i: number) => {
          return(
            <span className='path-el' key={i}>
            <div onClick={() => goTo(el)}>
              {i == 0 ? tableInfo.tableName : el.name}
            </div>
            <div style={{cursor: "default"}}>
              {i != path.length-1 && "->" }
            </div>
            </span>
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
          className='main_table--row'
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
            <td onClick={() => {onClickDelete(row.original)}} className='main_table--delete'>
              <img src={deleteIcon}/>
            </td>
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

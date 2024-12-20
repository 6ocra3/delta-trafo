import React, {useEffect} from 'react';
import "./KnowledgeBaseTable.scss"
import {createColumnHelper, ColumnDef} from '@tanstack/react-table';
import {MainTable} from '../../../molecules/MainTable';
import {useAppDispatch, useAppSelector} from '../../../../store';
import {getKnowledgeBaseFiles} from '../../../../store/slices/files';
import {MainTableFile} from '../../../../api/files/types';
import {RowIconCell} from '../../../atoms/RowIconCell';
import {tableInfoProps} from '../../../molecules/MainTable/MainTable';

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
            switch (row.row.original.type) {
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
            return (<>{type}</>)
        },
        size: 60,
        enableSorting: false,
    }),
];

interface KnowledgeBaseTableProps{
    section: string,
    backFunction: () => void
}

const KnowledgeBaseTable: React.FC<KnowledgeBaseTableProps> = ({section, backFunction}: KnowledgeBaseTableProps) => {

    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.files.filesData.knowledgeBaseSection);

    useEffect(() => {
        dispatch(getKnowledgeBaseFiles({addAll: false, section: section}))
    }, [dispatch, section])

    const tableInfo: tableInfoProps = {
        tableName: section,
        pageName: "base",
        fileFields: ["path", "author"],
        folderFields: ["name", "path", "author"],
        basePath: "/" + section
    }

    const createEl = <button className="panel__btn add-section add-book">Добавить книгу</button>;

    return (
        <>
            {
                data && <MainTable data={data} columns={columns} tableInfo={tableInfo} backFunction={backFunction} createEl={createEl}/>
            }
        </>
    );
};

export default KnowledgeBaseTable;
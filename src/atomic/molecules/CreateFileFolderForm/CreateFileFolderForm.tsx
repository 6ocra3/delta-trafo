// src/components/IntroComponent.tsx
import "./CreateFileFolderForm.scss"
import React from 'react';
import { ICreateFile, ICreateFolder, IFileInfo, IFolderInfo } from '../../../api/files/types';
import api from '../../../api';
import { useFormik } from 'formik';

export type FolderFields = ("path"|"name"|"year"|"author")
export type FileFields = ("path"|"year"|"author")

interface CreateFileFolderForm {
  pageName: string;
  folderFields: FolderFields[];
  fileFields: FileFields[];
}

const CreateFileFolderForm: React.FC<CreateFileFolderForm> = ({ pageName, folderFields, fileFields }) => {

    const onSubmitFolder = (values: IFolderInfo) => {
        const fullInfo:ICreateFolder = {
          page: pageName,
          folderInfo: values
        }
        api.files.createFolder(fullInfo)
      }
    
      const onSubmitFile = (values: IFileInfo) => {
        const formData = new FormData();
        const fileRequestBlob = new Blob([JSON.stringify(values.fileRequest)], { type: 'application/json' });
        formData.append('fileRequest', fileRequestBlob)
        values.files.forEach((file) => {
          formData.append("files", file)
        })
        const fullInfo:ICreateFile = {
          page: pageName,
          fileInfo: formData
        }
        api.files.createFile(fullInfo)
      }
    
      const createFolder = useFormik({
        initialValues: {
          path: "",
          author: "",
          name: "",
          year: undefined,
        },
        onSubmit: onSubmitFolder
      })
    
      const createFile = useFormik({
        initialValues: {
          fileRequest: {
            path: "",
            author: "",
            year: undefined,
          },
          files: []
        },
        onSubmit: onSubmitFile
      })  

  return (
    <>
    <h3>Добавление папки</h3>
    <form onSubmit={createFolder.handleSubmit}>
        {folderFields.map((name) => {
            return(
                <input placeholder={name} name={name} value={createFolder.values[name]} onChange={createFolder.handleChange}/>
            )
        })}
    <button className='panel__btn' type='submit'>Создать папку</button>
    </form>
    <br/>
    <h3>Добавление файла</h3>
    <form onSubmit={createFile.handleSubmit}>
    {fileFields.map((name) => {
            return(
                <input placeholder={name} name={`fileRequest.${name}`} value={createFile.values.fileRequest[name]} onChange={createFile.handleChange}/>
            )
    })}
    <input type="file" multiple={true} name="files" onChange={(e) => {
        if(e.target.files){
          const filesArray = Array.from(e.target.files);
          createFile.setFieldValue('files', filesArray);  
        }
    }} />
    <button className='panel__btn' type='submit'>Создать файл</button>
    </form>
    </>
  );
};

export default CreateFileFolderForm;
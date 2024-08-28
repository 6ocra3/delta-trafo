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
  presetPath: string;
}

const CreateFileFolderForm: React.FC<CreateFileFolderForm> = ({ pageName, folderFields, fileFields, presetPath }) => {

    const onSubmitFolder = (values: IFolderInfo) => {
      const formData = new FormData()
      const pathRequestBlob = new Blob([JSON.stringify(values.pathRequest)], { type: 'application/json' });
      formData.append("pathRequest", pathRequestBlob) 
      if(values.file){
        formData.append("file", values.file) 
      }
      console.log(values)
      const fullInfo:ICreateFolder = {
          page: pageName,
          folderInfo: formData
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
          file: undefined,
          pathRequest: {
            path: "",
            author: "",
            name: "",
            year: undefined,
            isBase: false,
          }

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
        {folderFields.map((name, index) => {
            return(
                <input key={index} placeholder={name} name={`pathRequest.${name}`} value={createFolder.values.pathRequest[name]} onChange={createFolder.handleChange}/>
            )
        })}
        <label className="label__checkbox">
          <input
            type="checkbox"
            name="pathRequest.isBase"
            className="input__checkbox"
            checked={createFolder.values.pathRequest.isBase}
            onChange={createFolder.handleChange}
          />
          Добавить папку в "Базу знаний"
        </label>
        {createFolder.values.pathRequest.isBase &&
        <input type="file" multiple={false} name="file"   onChange={(e) => {
          if(e.target.files){
            createFolder.setFieldValue('file', e.target.files[0]);  
          }
          }}/>
        }

        <button className='panel__btn' type='submit'>Создать папку</button>
    </form>
    <br/>
    <h3>Добавление файла</h3>
    <form onSubmit={createFile.handleSubmit}>
    {fileFields.map((name, index) => {
            return(
                <input key={index} placeholder={name} name={`fileRequest.${name}`} value={createFile.values.fileRequest[name]} onChange={createFile.handleChange}/>
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
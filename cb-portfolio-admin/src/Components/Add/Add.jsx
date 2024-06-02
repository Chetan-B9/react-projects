import { useState } from "react"
import {useForm} from "react-hook-form"
import { message } from 'antd';


import { Databases, Storage, ID } from "appwrite";
import client from "../../../../cb-portfolio/src/lib/appwrite";
import { Conf } from "../../../../cb-portfolio/src/conf/Conf";


function Add() {
  const storage = new Storage(client)
  const {register, handleSubmit, formState: {errors}} = useForm()
  const [checkedItems, setCheckedItems] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();  
  const key = 'updatable';




  const technologies = ['HTML', 'CSS', 'JAVASCRIPT']
  const submit = (data) => {
    
    console.log({...data, features: data.features.split(',')});

    const databases = new Databases(client);

  const dbPromise = databases.createDocument(
    Conf.appWriteDatabaseId,
    Conf.apoWriteCollectionId,
    ID.unique(), 
    {
        project_id: ID.unique(),
        project_name: data.projectName,
        description: data.description,
        features: data.features.split(','),
        technologies: checkedItems,
        github_link: data.gitHub,
        live_link: data.liveLink
    }
  );

  dbPromise.then(
    () => successMessage('Project Uploaded!'),
    () => errorMessage('Project is not uploaded!')
  );

  const storagePromise = storage.createFile(
    Conf.appWriteBucketId,
    ID.unique(),
    document.getElementById('uploader').files[0]
);

storagePromise.then(
  () => null,
    () => errorMessage('Image is not uploaded!')
);
  }

    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target;
      setCheckedItems(prevState => {
        if (checked) {
          return [...prevState, value];
        } else {
          return prevState.filter(item => item !== value);
        }
      });
    }

    function successMessage (message) {
      messageApi.open({
        key,
        type: 'loading',
        content: 'Loading...',
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'success',
          content: message,
          duration: 2,
        });
      }, 1000);
    }

    function errorMessage (message) {
      messageApi.open({
        key,
        type: 'loading',
        content: 'Loading...',
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'error',
          content: message,
          duration: 2,
        });
      }, 1000);
    }

  return (
    <>
      {contextHolder}
      <div className="container mt-16">
        <div className="text-center text-2xl font-bold">
          <h2><span className="text-main">Add</span> Projects</h2>
        </div>

        <div className="flex justify-center mt-5">
          <form className=" p-10 flex flex-col gap-5 rounded-md w-1/3 bg-secondary-bg" onSubmit={handleSubmit(submit)}>
            <div className="flex flex-col gap-1">
              <label htmlFor="pName" className="text-msm text-main">Project Name <span className="text-primary-text">*</span></label>
              <input type="text" id="pName" {...register("projectName", {required : "Project Name is Required"})} className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0" placeholder="Eg: Personal Portfolio website"/>
              <p className="text-msm text-red-600">{errors.projectName?.message}</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Description <span className="text-primary-text">*</span></label>
              <textarea {...register("description", {required : "Project description is required"})} className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0 h-[7rem]" placeholder="Eg: This personal portfolio project showcases my web development skills by creating a responsive and visually appealing website...."/>
              <p className="text-msm text-red-600">{errors.description?.message}</p>

            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Features</label>
              <textarea type="text" {...register("features")} className="p-4 bg-primary-bg rounded-md text-msm h-[7rem] focus:border-main focus:outline-0"  placeholder="Eg: Provide user friendly interface, etc... (Note: seperate features with (,) symbol)"/>

            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Used Techs</label>
              <ul id="" className="p-4 bg-primary-bg rounded-md text-msm h-[7rem] flex flex-col gap-1 overflow-y-auto focus:border-main focus:outline-0">
                {
                  technologies.map((tech) => <li key={tech} className="flex items-center gap-2"><input type="checkbox" value={tech} onChange={handleCheckboxChange} />{tech}</li>
                  )
                } 
                           
              </ul>
              
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">GitHub Repo link</label>
              <input type="url" {...register("gitHub")} className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0" placeholder="Eg: www.github.com/user-name"/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Live link</label>
              <input type="url" {...register("liveLink")} className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0" placeholder="Eg: https://www.example.com"/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Thumbnail <span className="text-primary-text">*</span></label>
              <input type="file" {...register("thumbnail", {required : "Thumbnail image is required"})} className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0" id="uploader"/>
              <p className="text-msm text-red-600">{errors.thumbnail?.message}</p>

            </div>

            <div className="">
              <button type="submit"  className="bg-main text-center w-full p-3 rounded-md text-black font-semibold">Upload</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Add
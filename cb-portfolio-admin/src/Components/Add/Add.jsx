
function Add() {
  return (
    <>
      <div className="container mt-16">
        <div className="text-center text-2xl font-bold">
          <h2><span className="text-main">Add</span> Projects</h2>
        </div>

        <div className="flex justify-center mt-5">
          <form className=" p-10 flex flex-col gap-5 rounded-md w-1/3 bg-secondary-bg">
            <div className="flex flex-col gap-1">
              <label htmlFor="pName" className="text-msm text-main">Project Name <span className="text-primary-text">*</span></label>
              <input type="text" id="pName" className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0" placeholder="Eg: Personal Portfolio website"/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Description <span className="text-primary-text">*</span></label>
              <textarea className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0 h-[7rem]" placeholder="Eg: This personal portfolio project showcases my web development skills by creating a responsive and visually appealing website...."/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Features</label>
              <input type="text" className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0"  placeholder="Eg: Provide user friendly interface, etc..."/>
              <button className="border-[.1px] border-secondary-text rounded-sm mt-2 p-1">+</button>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Used Techs</label>
              <ul name="" id="" className="p-4 bg-primary-bg rounded-md text-msm h-[7rem] flex flex-col gap-1 overflow-y-auto focus:border-main focus:outline-0" multiple>
                <li className="flex items-center gap-2"><input type="checkbox" />HTML</li>
                <li className="flex items-center gap-2"><input type="checkbox" />CSS</li>
                <li className="flex items-center gap-2"><input type="checkbox" />JavaScript</li>                
              </ul>
              
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">GitHub Repo link</label>
              <input type="url" className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0" placeholder="Eg: www.github.com/user-name"/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Live link</label>
              <input type="url" className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0" placeholder="Eg: https://www.example.com"/>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-msm text-main">Thumbnail</label>
              <input type="file" className="p-4 bg-primary-bg rounded-md text-msm focus:border-main focus:outline-0" />
            </div>

            <div className="">
              <button type="submit" className="bg-main text-center w-full p-3 rounded-md text-black font-semibold">Upload</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Add
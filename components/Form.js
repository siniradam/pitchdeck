import React, { useState } from "react";
import FormInput from "./FormInput";
import { FileUploader } from "react-drag-drop-files";

function Form() {
  const [name, setName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setprojectDescription] = useState("");
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const fileTypes = ["PDF", "PPTX", "PPT"];

  const saveProject = async (formData) => {
    console.log(name, projectName, projectDescription);

    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    const response = await axios.post("/api/uploads", formData, config);

    console.log("response", response.data);
  };

  return (
    <section className='max-w-4xl p-6 mx-auto bg-white rounded-b-md shadow-md '>
      <h2 className='text-lg font-semibold text-gray-700 capitalize '>
        File upload
      </h2>

      <form>
        <div className='flex'>
          <div className='flex flex-col items-start mr-4'>
            <FormInput
              label='Name'
              name='name'
              type='text'
              value={name}
              onChange={setName}
            />
            <FormInput
              label='Project Name'
              name='projectname'
              type='text'
              value={projectName}
              onChange={setProjectName}
            />
            <FormInput
              label='Description'
              name='projectdescription'
              type='textarea'
              value={projectDescription}
              onChange={setprojectDescription}
            />
          </div>
          <div className='w-64 bg-gray-100 rounded-lg flex justify-center'>
            {/*  */}
            <FileUploader
              handleChange={handleChange}
              name='file'
              types={fileTypes}
              classes='flex w-full h-full justify-center'
              maxSize={1}
              minSize={1}
              children={
                file ? (
                  file.name
                ) : (
                  <p className='self-center'>
                    Drag your file here.
                    <br /> ({fileTypes.join(", ")})
                  </p>
                )
              }
            />
          </div>
        </div>

        <div className='flex justify-end mt-6'>
          <button
            className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            onClick={saveProject}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;

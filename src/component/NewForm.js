import React, { useState, useMemo, useEffect } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { EditorState, convertToRaw ,ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../App.css';
// Your hashtag and mention configurations


const NewForm = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [Categories, setCategories] = useState('');
  const [Title, setTitle] = useState('');
  const [Paragraph, setParagraph] = useState('');
  const [slugs, setSlugs] = useState('');
  const [image, setImage] = useState(null); 


  // useEffect(()=>{
  //   const fun=async()=>{
  //      try{
           
  //       const response=await fetch(`/getallRelativeBlog/${blog.categories}`,{
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         credentials: 'include',
  //       })
  //       const result = await response.json();

  //      }
  //      catch(err){
  //          console.log(err);
  //      }
  //   }

  //   fun();
  // })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("smjhjad"+ Paragraph);
     // Remove leading and trailing spaces
     let finalSlugs = slugs.trim() === '' ? Title.trim() : slugs.trim();
     // Remove all spaces within the string
     finalSlugs = finalSlugs.replace(/\s+/g, '');
    try {
      if (Categories === '' || Title === '' || Paragraph === '') {
        window.alert('Fill in all data');
        return;
      } else {
        const response = await fetch(`http://localhost:5000/0auth/addblog`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ categories:Categories, title:Title , paragraph:Paragraph, slugs:finalSlugs , img:'https://wallsdesk.com/wp-content/uploads/2016/12/Pictures-of-Rocky-Mountains.jpg'  }),
          credentials: 'include',
        });

        const responseData=await response.json();
        console.log(responseData);
       if (response.status==200) {
          window.alert('new blog added');
          window.location.reload(); // Reload the page
                 
       }
       else {
           
         console.error('Failed to make Profile');
       }    
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
 



 
 

  const onEditorChange = (editorState) => {
    
    setEditorState(editorState);

    const currentContent = editorState.getCurrentContent(); 
    const rawContentState = convertToRaw(currentContent);
 
    const html = draftToHtml(rawContentState);
    setParagraph(html);
    console.log(html);
    

    
  };
  const handlePastedFiles = (files) => {
    const file = files[0];
    setImage(file);
    console.log(file);
    return 'handled';
  };
  console.log(image);

  // const uploadImageCallback = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = function (readerEvent) {
  //       resolve({ data: { link: readerEvent.target.result } });
  //     };
  //     reader.readAsDataURL(file);
  //     console.log(file);
  //   });
  // };

  const uploadImageCallback = (file) => {
    return new Promise((resolve, reject) => {
      // Create a FileReader
      const reader = new FileReader();
  
      // Set up the onload event handler for when the file reading is complete
      reader.onload = function (readerEvent) {
        // Get the data URL of the file
        const dataURL = readerEvent.target.result;
  
        // Log the URL to the console
        console.log(dataURL);
  
        // Resolve the Promise with an object containing the data URL
        // resolve({ data: { link: dataURL } });
        resolve({ data: { link: 'https://blog.mystart.com/wp-content/uploads/2017/04/Laos.jpeg' } });

      };
  
      // Read the contents of the file as a data URL
      reader.readAsDataURL(file);
    });
  };
  

 
  
 
  return (
    <>
      <div className="flex flex-col justify-center  mt-4 ">
        <div className="flex justify-center">
          <div className="w-3/4 md:w-2/5 shadow-2xl px-4 md:px-24 py-10 box-content rounded-xl">
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="Categories" className="text-left  block text-sm font-semibold text-gray-800">
                  Categories
                </label>
                <input
                  required={true}
                  onChange={(e) => setCategories(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border-black border-[1px] rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="Title" className="text-left  block text-sm font-semibold text-gray-800">
                  Title
                </label>
                <input
                  required={true}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-[#053B50] border-black border-[1px] bg-white  rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="slugs" className="text-left  block text-sm font-semibold text-gray-800">
                  Slugs
                </label>
                <input
                  
                  onChange={(e) => setSlugs(e.target.value)}
                  className="block w-full border-black border-[1px] px-4 py-2 mt-2 text-[#053B50] bg-white  rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div >
              <p className='text-left  block text-sm font-semibold text-gray-800'>Paragraph</p>
              <div className='border-[1px] border-black'>
              <Editor
                editorStyle={{ border: "1px solid" }}
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
              
                editorClassName="editorClassName"
                onEditorStateChange={onEditorChange}
                handlePastedFiles={handlePastedFiles}
                toolbar={{
                  image: {
                    uploadCallback: uploadImageCallback,
                    alt: { present: true, mandatory: false },
                  },
                }}
              />

              </div>
            

             
              
            </div>
            <div className="mb-2">
            <label htmlFor="imageUpload" className="text-left block text-sm font-semibold text-gray-800">
              Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              
              className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border-black border-[1px] rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
            {/* <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div> */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover-bg-[#053B50] focus:outline-none focus-bg-[#053B50]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>

      
    </>
  );
};

export default NewForm;

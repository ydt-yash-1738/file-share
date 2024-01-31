import { useRef, useState, useEffect } from "react"
import React from "react"
import { uploadFile } from './services/api.js'


function App() {

  const [file, setFile] = useState("");
  const [result, setResult] = useState('');

  const fileinputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileinputRef.current.click();
  }

  console.log(file);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col text-center w-[50%] h-[50%]">
        <h1 className="font-bold text-2xl text-black">FILE SHARING IS EZ!!!</h1>
        <p className="text-lg mt-4 text-black">Drop your files here and share the link with your friends!</p>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-20 rounded" onClick={() => onUploadClick()}>
            Upload
          </button>
          <input type="file" ref={fileinputRef} className="object-none opacity-0" onChange={(e) => setFile(e.target.files[0])} />
          <a href={result} target='_blank' className="text-black text-sm">{result}</a>
        </div>
      </div>
    </div>



  )
}

export default App

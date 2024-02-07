import { useRef, useState, useEffect } from "react";
import { uploadFile } from './services/api.js';
import background from './assets/scenery.jpg'; // Import the background image
import owlImage from './assets/owl.png'; // Import the owl image

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const [fileName, setFileName] = useState(""); // State to hold the name of the uploaded file
  const fileinputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        const response = await uploadFile(data);
        setResult(response.path);
        setFileName(file.name); // Set the name of the uploaded file
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileinputRef.current.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})`, filter: 'brightness(0.6)' }}>
      <div className="bg-white rounded-lg p-8 shadow-lg bg-opacity-70 max-w-md w-full mx-4 flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl text-center text-gray-800 mb-4">FILE SHARING MADE EASY</h1>
        <p className="text-lg text-gray-700 text-center mb-2">Drop your files here and share the link with your friends!</p>
        {fileName && (
          <p className="text-lg text-gray-700 text-center font-bold mb-4">Uploaded file: {fileName}</p>
        )}
        {result && (
          <div className="flex items-center justify-between w-full mb-4">
            <img src={owlImage} alt="Uploaded file" className="max-w-32 h-auto rounded-lg mr-4" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={copyToClipboard}>
              Copy Link
            </button>
          </div>
        )}
        {!result && (
          <div className="flex flex-col items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-4" onClick={() => onUploadClick()}>
              Upload File
            </button>
            <input type="file" ref={fileinputRef} className="hidden" onChange={(e) => setFile(e.target.files[0])} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

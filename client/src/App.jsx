import React, { useState } from 'react'
import { axios } from './../../node_modules/axios/dist/esm/axios';

const App = () => {
  const [fileData, setFileData] = useState(null);
  const handleChange = (e) => {
    setFileData(e.target.files[0])
  }
  console.log(fileData);
  const handleSubmit = async()=>{
    if(!fileData){
      alert("Please choose a file.")
    }
    const formData = new FormData();
    formData.append("images",fileData);
    try {
      let res = await axios.post("http://localhost:5500");
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <h1>File upload</h1>
      <input type="file"  onChange={handleChange} />
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default App

import React from 'react'
import  '../App.css';
export default function Imgstogif() {
    const [images, setImages] = React.useState([]);
    const [gifUrl, setGifUrl] = React.useState('');
    const handleUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages(files);
        alert(`${files.length} images selected`);   
    }
  return (

   <div className="App-header">
    <h2>Convert Images to GIF</h2>

   <input type="file" multiple accept="image/*" />
   <button className="btn-gif" onClick={(e)=>{handleUpload(e)}}>Create GIF</button>

   

   {/* Preview Area */}
   
   
   </div>
  )
}

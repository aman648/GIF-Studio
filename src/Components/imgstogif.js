import React from 'react'
import  '../App.css';
export default function Imgstogif() {
    // const [images, setImages] = React.useState([]);
    const [files, setFiles] = React.useState(null);
    const [gifUrl, setGifUrl] = React.useState('');
    const [images, setImages] = React.useState([]);
    
    const handlechange = (event) => {
        var arr=[];
        setFiles(event.target.files);
        const file = event.target.files;
        if (!file) return;
        for (let i = 0; i < file.length; i++) {
            arr[i] = URL.createObjectURL(file[i]);
          
        }
        setImages(arr);
       
    }
    const handleUpload = () => {
        const url = 'https://backend-gifstudio.onrender.com/images-to-gif'
        const formData = new FormData();
        formData.append('images', files);
        Array.from(files).forEach((file) => {
            formData.append('images', file);
        });
        fetch(url, {
          method: 'POST',
          body: formData,
        })
        .then(response => response.blob())
        .then(blob => {
          const gifUrl = URL.createObjectURL(blob);
          setGifUrl(gifUrl);
        })
        .catch(error => {
          console.error('Error:', error);
        }); 
    }
  return (

   <div className="App-header">
    <h2>Convert Images to GIF</h2>

    
   <div className="preview-box">
    {images.map((img, index) => (<img key={index} src={img} alt={`Preview ${index + 1}`} />))}
      </div>

   <input type="file" multiple accept="image/*" onChange={(e) => handlechange(e)}/>
   <button className="btn-gif" onClick={handleUpload}>Create GIF</button>

   {gifUrl && <div className='result'><img src={gifUrl} alt="Created GIF" className="preview-gif"/><a href={gifUrl} download="created.gif" className="download-link">Download</a></div>}

   

   
   
   </div>
  )
}

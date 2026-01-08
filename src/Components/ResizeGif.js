import React from 'react'

export default function ResizeGif() {
    const [gifUrl, setGifUrl] = React.useState('');
    const [width, setWidth] = React.useState(200);
    const [height, setHeight] = React.useState(200);
    const [previewUrl, setPreviewUrl] = React.useState('');
    const [file1 ,setFile]=React.useState(null);

    const handleUpload = () => {
        if (!file1) return;
        // Placeholder logic for resizing GIF
        const url = 'https://backend-gifstudio.onrender.com/resize_gif'
        const formData = new FormData();
        formData.append('image', file1);
        formData.append('width', width);
        formData.append('height', height);
        fetch(url,{
            method: 'POST',
            body: formData,
        }).then(response => response.blob())
        .then(blob => {   
            const resizedGifUrl = URL.createObjectURL(blob);
            setGifUrl(resizedGifUrl);
        });
   
    }
    const handlePreview = (event) => {
        const file = event.target.files[0];
     

        if (!file) return;
        setFile(file);
        const previewGifUrl = URL.createObjectURL(file);
        setPreviewUrl(previewGifUrl);
    }
  return (
    <div className='App-header'>
      <h2>Resize GIF</h2>
      <div className="preview-box">
        {previewUrl && <img src={previewUrl} alt="GIF Preview" className='preview-gif' />}
        </div>
      <input type="file" accept=".gif" onChange={(e) => handlePreview(e)} />
      <input type="number" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
      <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
      <button className="btn-gif" onClick={handleUpload}>Resize GIF</button>



      {gifUrl && <div className='result'><img src={gifUrl} alt="Resized GIF" /> </div>}
      {gifUrl &&<div className='result'> <a href={gifUrl} download>Download</a> </div>}
    </div>
  )
}

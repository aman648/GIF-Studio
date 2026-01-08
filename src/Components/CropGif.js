import React from 'react'

export default function CropGif() {
    
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const [file, setFile] = React.useState(null);
    const [width, setWidth] = React.useState(200);
    const [height, setHeight] = React.useState(200);
    const [gifUrl, setGifUrl] = React.useState('');
    const [originalimg, setOriginalimg] = React.useState(null);
    const handleUpload = (e) => {
      const url = 'https://backend-gifstudio.onrender.com/crop_gif'
      const formData = new FormData();
      formData.append('image', file);
      formData.append('left', x);
      formData.append('upper', y);
      formData.append('right', x + width);
      formData.append('lower', y + height);
      fetch(url, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.blob())
      .then(blob => {
        const croppedGifUrl = URL.createObjectURL(blob);
        setGifUrl(croppedGifUrl);
      })
      .catch(error => {
        console.error('Error:', error);
      });

        
    }
    const handlepreview=(event)=>{
        const file = event.target.files[0];
        setFile(file);
        if (!file) return;
        const originalimgpreviewUrl = URL.createObjectURL(file);
        setOriginalimg(originalimgpreviewUrl);

    }
  return (
    <div className="App-header">
      <h2>Crop GIF</h2>
      <input type="file" accept=".gif" onChange={(e) => handlepreview(e)} />
      <div className="preview-box">
        {originalimg && <img src={originalimg} alt="Original GIF Preview" />}
      </div>
      
      <input type="number" placeholder="X" value={x} onChange={(e) => setX(e.target.value)} />
      <input type="number" placeholder="Y" value={y} onChange={(e) => setY(e.target.value)} />
      
      <input type="number" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
      
      <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
      <button className="btn-gif" onClick={handleUpload}>Crop GIF</button>
      
      {gifUrl && <div className='result'><img src={gifUrl} alt="Cropped GIF" className="preview-gif"/><a href={gifUrl} download="cropped.gif" className="download-link">Download</a></div>}
      
    </div>
  )
}

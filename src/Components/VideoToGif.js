import React from 'react'

export default function VideoToGif() {
    
    const [file, setFile] = React.useState(null);
    const [gifUrl, setGifUrl] = React.useState('');
    const handleUpload = () => {
        if (!file) return;
        const url = 'https://backend-gifstudio.onrender.com/vedio_gif'
        const formData = new FormData();
        formData.append('video', file);
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            setGifUrl(data.gifUrl);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    const handlechange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setFile(file);
    }
  return (
   <div className='App-header'>
      <h2>Video to GIF</h2>
      <div className="preview-box">
        {file && <video src={URL.createObjectURL(file)} controls style={{ width: '100%' }} />}
      </div>
      <input type="file" accept="video/*" onChange={handlechange} />
      <input type="text" placeholder="Width" />
      <button className="btn-gif" onClick={handleUpload}>Convert to GIF</button>
      {gifUrl && <div className='result'><img src={gifUrl} alt="Generated GIF" /></div>}
      {gifUrl && <div className='download'><a href={gifUrl} download>Download</a></div>}
    </div>
  )
}

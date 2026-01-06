import React from 'react'

export default function ResizeGif() {
    const [gifUrl, setGifUrl] = React.useState('');
    const [width, setWidth] = React.useState(200);
    const [height, setHeight] = React.useState(200);
    const [previewUrl, setPreviewUrl] = React.useState('');
    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        // Placeholder logic for resizing GIF
        const fakeResizedGifUrl = URL.createObjectURL(file); // This is just a placeholder
        setGifUrl(fakeResizedGifUrl);
        alert(`GIF selected: ${file.name}`);
    }
    const handlePreview = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const previewGifUrl = URL.createObjectURL(file);
        setPreviewUrl(previewGifUrl);
    }
  return (
    <div className='App-header'>
      <h2>Resize GIF</h2>
      <div className="preview-box">
        {previewUrl && <img src={previewUrl} alt="GIF Preview" className='preview-gif' />}
        </div>
      <input type="file" accept=".gif" onChange={handlePreview} />
      <input type="number" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
      <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
      <button className="btn-gif" onClick={() => handleUpload()}>Resize GIF</button>
      {gifUrl && <img src={gifUrl} alt="Resized GIF" />}
      {gifUrl && <a href={gifUrl} download>Download</a>}
    </div>
  )
}

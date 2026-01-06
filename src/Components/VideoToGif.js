import React from 'react'

export default function VideoToGif() {
   
    const [gifUrl, setGifUrl] = React.useState('');
    const [fps, setFps] = React.useState(10);
    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        // Placeholder logic for converting video to GIF
        // In a real application, you would process the video file here
        const fakeGifUrl = URL.createObjectURL(file); // This is just a placeholder
        setGifUrl(fakeGifUrl);
        alert(`Video selected: ${file.name}`);
    }
  return (
   <div className='App-header'>
      <h2>Video to GIF</h2>
      <input type="file" accept="video/*" onChange={handleUpload} />
      <input
        type="number"
        placeholder="FPS"
        value={fps}
        onChange={(e) => setFps(e.target.value)}
      />
      {gifUrl && <img src={gifUrl} alt="Generated GIF" />}
      {gifUrl && <a href={gifUrl} download>Download</a>}
    </div>
  )
}

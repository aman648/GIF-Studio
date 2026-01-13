import React from 'react'
import  '../App.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
   <div>
      <h1>Edit gif</h1>
      <ul>
        <li><Link to="/images-to-gif">Images to GIF</Link></li>
        <li><Link to="/video-to-gif">Video to GIF</Link></li>
        <li><Link to="/resize-gif">Resize GIF</Link></li>
        <li><Link to="/crop-gif">Crop GIF</Link></li>
      </ul>
    </div>
  )
}

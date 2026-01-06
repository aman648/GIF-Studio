import React from 'react'
import  '../App.css';

export default function Header() {
  return (
   <div>
      <h1>Edit gif</h1>
      <ul>
        <li><a href="/images-to-gif">Images to GIF</a></li>
        <li><a href="/video-to-gif">Video to GIF</a></li>
        <li><a href="/resize-gif">Resize GIF</a></li>
        <li><a href="/crop-gif">Crop GIF</a></li>
      </ul>
    </div>
  )
}

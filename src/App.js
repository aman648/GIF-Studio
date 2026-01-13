
import './App.css';
import Headers from './Components/Header';
import Main from './Components/main';

import VideoToGif from './Components/VideoToGif';
import ResizeGif from './Components/ResizeGif';
import CropGif from './Components/CropGif';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Imgstogif from './Components/imgstogif';



function App() {

  return (
    <>
      
    
   
     <BrowserRouter>
     <Headers></Headers>
      
       
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/images-to-gif" element={<Imgstogif />} />
          <Route path="/video-to-gif" element={<VideoToGif />} />
          <Route path="/resize-gif" element={<ResizeGif />} />
          <Route path="/crop-gif" element={<CropGif />} />
      </Routes>
      
     </BrowserRouter>


    </>
  );
}

export default App;

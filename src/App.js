// Import styles
import './styles/app.scss'
//Adding components
import Player from "./components/Player";
import Song from "./components/Song"; 
//import data
import data from './util'
import { useState } from 'react';


function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong , setCurrentSong] = useState(songs[0]);
  //state

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
    </div>
  );
}

export default App;

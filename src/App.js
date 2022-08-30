// Import styles
import './styles/app.scss'
//Adding components
import Player from "./components/Player";
import Song from "./components/Song"; 
//import data
import data from './util'
import { useState } from 'react';


function App() {

  //if song playing state start with, false.
  const [isPlaying, setIsPlaying] = useState(false);
// data with the list of songs
  const [songs, setSongs] = useState(data());
// current song loaded (use for few more features.)
  const [currentSong , setCurrentSong] = useState(songs[0]);
  //states ! Up

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
    </div>
  );
}

export default App;

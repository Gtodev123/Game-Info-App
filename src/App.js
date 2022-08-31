// Import styles
import './styles/app.scss'
//Adding components
import Player from "./components/Player";
import Song from "./components/Song"; 
//import data
import data from './util'
import { useState } from 'react';
import Library from './components/Library';
import Nav from './components/Nav';


function App() {

  //State if the Library modal is open or not , starts with False (close)
  const [libraryStatus, setLibraryStatus] = useState(false);
  //if song playing state start with, false.
  const [isPlaying, setIsPlaying] = useState(false);
// data with the list of songs
  const [songs, setSongs] = useState(data());
// current song loaded (use for few more features.)
  const [currentSong , setCurrentSong] = useState(songs[0]);
  //states ! Up

  return (
    <div className="App">
      <Nav  libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Library id={songs.id} setSongs={setSongs} setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} currentSong={currentSong} songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;

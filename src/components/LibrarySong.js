// each song component in Library section !

const LibrarySong = ({song , setCurrentSong}) => {

//function that change the song from the Library list
  const songSelectHandler = () => {
    setCurrentSong(song)
  }

    return (
      <div onClick={songSelectHandler} className="library-song">
        <img src={song.cover} alt="cover" />
        <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
      </div>
    );
  };
  
  export default LibrarySong;
  
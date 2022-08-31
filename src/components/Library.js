// Library display component upper right corner

import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong , currentSong ,setLibraryStatus ,libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ?'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong songs={songs} key={song.id} song={song} setCurrentSong={setCurrentSong} />
        ))}
      </div>
    </div>
  );
};

export default Library;

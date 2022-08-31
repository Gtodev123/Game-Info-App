// Library display component upper right corner

import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, setSongs ,libraryStatus, id }) => {
  return (
    <div className={`library ${libraryStatus ?'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong id={id}setSongs={setSongs} songs={songs} key={song.id} song={song} setCurrentSong={setCurrentSong} />
        ))}
      </div>
    </div>
  );
};

export default Library;

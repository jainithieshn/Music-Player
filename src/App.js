import './App.css';
import HomePage from './Page/HomePage';
import Player from './components/Player';
import AppTopBar from './components/AppTopBar';
import SideBar from './components/sideBar';

import { userContext, songContext, songs } from './Data/userContext';
import { SongData } from './Data/Songs';
import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {

  const [isplaying, setisplaying] = useState(false);
  const [currentsong, setcurrentsong] = useState(SongData[0]);
  const [song, setsong] = useState(SongData);

  return (
    <div className="App">
      <>
      <div className="app-top-bar">
        <AppTopBar />
      </div>
      <div className="side-nav-bar">
        <SideBar />
      </div>
      <div className="content-container">
        <div className="inner-container">
          <userContext.Provider value={{ isplaying, setisplaying }} >
            <songContext.Provider value={{ currentsong, setcurrentsong }} >
              <songs.Provider value={{ song, setsong }} >
                <SearchBar />
              </songs.Provider>
            </songContext.Provider>
          </userContext.Provider>
        </div>
      </div>
      <div className="music-control-bar">
        <userContext.Provider value={{ isplaying, setisplaying }} >
          <songContext.Provider value={{ currentsong, setcurrentsong }} >
            <songs.Provider value={{ song, setsong }} >
              <Player />
            </songs.Provider>
          </songContext.Provider>
        </userContext.Provider>
      </div>
    </>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import MusicPlayer from "./MusicControl";
import {songdata} from "../Data/SongData";
// import audio from '../Songs/Darshana.mp3'
import { useRef } from "react";

let Player = () => {
  const [song, setsong] = useState(songdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentsong, setcurrentsong] = useState(songdata[0]);
  console.log(currentsong, currentsong.song);
  const audioRef = useRef();
  return (
    <>
      <audio src={currentsong.song1} ref={audioRef}></audio>
      <MusicPlayer
        song={song}
        setsong={setsong}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioRef={audioRef}
      />
    </>
  );
};

export default Player;

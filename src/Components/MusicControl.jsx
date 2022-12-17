import { Typography } from '@material-ui/core';
import { PauseCircleFilledRounded, PlayArrowRounded, SkipNextRounded, SkipPreviousRounded } from '@material-ui/icons';
import { IconButton, Slider } from '@mui/material';
import React from 'react';

let MusicPlayer = ( {audioRef, isplaying, setisplaying} ) => {

    let playpause = () => {

        setisplaying(!isplaying);
        if(!isplaying) {
            
            audioRef.current.play();
        }
        else {
            
            audioRef.current.pause();
        }
    }
    return(
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <Typography 
                    variant='h5'>
                        Song Title
                    </Typography>
                    <br />
                    <Slider 
                    sx={{
                        width: "500px"
                    }}
                    />
                    <br />
                    <IconButton>
                        <SkipPreviousRounded />
                    </IconButton>
                    <IconButton
                    onClick={playpause}
                    >
                        {
                            (!isplaying) ? <PlayArrowRounded /> : <PauseCircleFilledRounded/>
                        }
                    </IconButton>
                    <IconButton>
                        <SkipNextRounded/>
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default MusicPlayer;
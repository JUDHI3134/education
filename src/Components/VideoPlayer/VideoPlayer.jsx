import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/vid.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const playRef = useRef(null)

    const closePlayer = (e) =>{
        if(e.target === playRef.current){
            setPlayState(false)
        }
    }

  return (
    <div onClick={closePlayer} ref={playRef} className={`video-player ${playState ? "" : "hide"}`}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer

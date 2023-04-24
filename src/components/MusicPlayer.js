import { useState,useEffect } from "react"
import "../styles/MusicPlayer.css"
import {FaRegHeart,FaHeart,FaForward,FaStepForward ,FaPlay,FaPause,FaStepBackward,FaBackward,FaShareAlt} from "react-icons/fa"
import {BsDownload} from "react-icons/bs"
import { useRef } from "react"
const MusicPlayer = ({song,imgSrc}) => {
  
  const [isLove,setLove]=useState(false);
  const [isPlaying,setIsPlaying]=useState(false)
  const [duration ,setDuration]=useState(0);
  const [currentTime,setCurrentTime]=useState(0);

  const audioplayer=useRef();
  const progressBar=useRef();
  const animationRef=useRef();
  useEffect(()=>{
    const seconds=audioplayer.current.duration
    setDuration(seconds)
  },[audioplayer?.current?.loadedmetadata,audioplayer?.current?.readyState])

  const changePlayPause=()=>{
    const preValue=isPlaying;
     if(isPlaying){
      audioplayer.current.play();
      animationRef.current=requestAnimationFrame(whilePlaying)
    }else{
      audioplayer.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
    
    setIsPlaying(!preValue)
  }
  
  const caluculatedTime=(sec)=>{
     const minutes=Math.floor(sec/60);
     const returnMin=minutes<10?`0${minutes}`:`{minutes}`;

     const seconds=Math.floor(sec%60);
     const returnSec=seconds <10? `0${seconds}`:`{seconds}`
     return `${returnMin}:${returnSec}`
  }

  const changeSongLove=()=>{
    setLove(!isLove);
   
  }
  

  const whilePlaying=()=>{
    progressBar.current.value=audioplayer.current.currentTime;
     changeCurrentTime();
     animationRef.current=requestAnimationFrame(whilePlaying)
  }
  const changeProcess=()=>{
    audioplayer.current.currentTime=progressBar.current.value;
    changeCurrentTime()
  }  
   
  const changeCurrentTime=()=>{
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progressBar.current.value);
  
  }
  


  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} alt="imgSrc"/>
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioplayer}/>
        
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeSongLove}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="plpayPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        
       
   
        <div className="bottom">
          <div className="currentTime">{caluculatedTime(currentTime)}</div>
          <input type="range" className="progressBar" ref={progressBar} onChange={changeProcess}/>
          <div className="duration">
            {duration && !isNaN(duration) && caluculatedTime(duration)? caluculatedTime(duration):"00:00"}</div>
        </div>
      </div>
      </div>
    
      
  )
}

export  {MusicPlayer}

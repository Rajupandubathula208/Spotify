import React, { useEffect, useState } from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import {Songs} from "./Songs"
import { MusicPlayer } from './MusicPlayer'

const AudioList = () => {
  const [songs,setSongs]=useState(Songs)
  const[song ,setSong]=useState(Songs[0].song);
  const[img ,setImg]=useState(Songs[0].imgSrc);



 
  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);
  
  const ChangeFavourite=(id)=>{
    songs.forEach((song)=>{


    if(song.id===id){
      song.favourite=!song.favourite;
    }})
    setSongs([...Songs])
  }
  const setMainSong=(songSrc,imgSrc)=>{
    setSong(songSrc)
    setImg(imgSrc)

  }
  return (
    <div className='audioList'>
        <h2 className='title'>
            The list<span>{`${Songs.length}Songs`}</span>
        </h2>
        <div className='songsContainer'>
          {Songs&&Songs.map((song,index)=>(

      
            <div className='songs' key={song.id}
            onClick={()=>setMainSong(song?.song, song?.imgSrc)}
            >
                <div className='count'>{`#${index+1}`}</div>
                 <div className='song'>
                    <div className='imageBox'>
                        <img src={song?.imgSrc} alt='img'/>
                    </div>
                    <div className='section'>
                      <p className='songName'>{song?.songName}<span className='spanArtist'>{song?.artist}</span></p>

                      <div className='hits'>
                        <p className='hit'>
                            <i>
                                <FaHeadphones/>
                            </i>
                            95,609,102
                        </p>

                        <p className='duration'>
                          <i>
                            <FaRegClock/>
                          </i>
                          3:04
                        </p>
                        <p className='favourite'
                        onClick={()=>ChangeFavourite(song?.id)}
                        >
                          
                          {song?.favourite?(
                               <i>
                               <FaHeart/>
                             </i>
                          ):(
<i>
                            <FaRegHeart/>
                          </i>
                          )}
                          
                          
                        </p>

                      </div>
                    </div>

                 </div>
            </div>
                ))}


        </div>
        <MusicPlayer song={song} imgSrc={img}/>
      
    </div>
  )
}

export {AudioList}

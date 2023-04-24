import React from 'react'
import{BsFillVolumeDownFill,BsMusicNoteList} from "react-icons/bs"
import{FaDesktop} from "react-icons/fa"
import Track from "../img/track.png";

const TrackList = () => {
  return (
    <div className='trackList'>
        <div className='top'>
         <img src={Track} alt=''/>
         <p className='trackName'> Sample Name <span className='trackSpan'>Artist</span></p>
        </div>
        <div className='bottom'>
            <i>
              <BsFillVolumeDownFill/>
            </i>
            <input type="range" />
            <i>
            <BsMusicNoteList/>
            </i>
            <i>
            <FaDesktop/>
            </i>
        </div>
 </div>
  )
}

export {TrackList}

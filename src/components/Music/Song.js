import React from 'react';
import "./song.css"
const Song = (props) => {
  return (
    <div>
       <div className='strange1' >
          <div className='card-side-front card-side'>
          <div className="images"> <img className='img' alt="pic of song" width="100%" height="70%"  src={props.img} /> </div>
            <h4 className='card-heading'>
              <span className='heading-span'  id={props.titleSong} >{props.tag}   </span>
            </h4>
            <div className='card-details'>
              <ul className='card-ul'>
                <li className='card-li' id={props.titleSong}>{props.title}</li>
                <br/>
                <br/>
                <li className='card-li'>Views:{props.viwes}</li>
              </ul>
            </div>
          </div>
          <div className='card-side-back card-side'id={props.bgColor}>
            <div className='cta'>
              <div className='more-info'>
                <p className='card-pg-1'>Play the song</p>
              </div>
              <audio src={props.audio} controls></audio>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Song;
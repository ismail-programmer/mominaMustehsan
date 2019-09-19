import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Audio
import song1 from '../../audio/Afreen Afreen ( Momina mustehsan voice only).mp3';

// images
import img1 from '../../images/sdp4.jpg';
// Components
import Song from '../Music/Song';

//css file
import './home.css';

//utils
import Button from '../../utils/button/Button';

class Home extends Component {
  render() {
    return (
      <div className='maindiv'>
        <div className='intro'>
          <h1 className='nameHeading'>Momina Mustehsan</h1>
          <p>
            <i> Musician,Engineer,Mathematician,Social Activist</i>
          </p>
        </div>
        <section className='section_shows section'>
          <h2 className='allBlack'> Upcoming Shows</h2>
          <b>NEW ORLEANS JAZZ FESTIVAL, NOVEMBER 2023</b>
          <hr className='gap' />
          <p className='about_para'>
            <i>
              <span className='allBlack'>
                This is the first time Mustehsan is recording a tune for a
                Pakistani movie. Earlier, her song
              </span>
              “Awari” got featured in Bollywood movie “Ek Villian”. Now, we are
              excited for her musical debut in Pakistani cinemas.
            </i>
          </p>
        </section>

        <section className='section_news section'>
          <a
            href='https://twitter.com/MominaMustehsan/with_replies'
            className='links-white'
          >
            <h2 className='newsheading allBlack'> Latest News</h2>
          </a>
          <b>Momina Mustehsan In Pakistani Magzines</b>
          <hr className='gap' />
          <p className='about_para'>
            <i>
              <span className='allBlack'>
                “During the filming of Manto, I would listen to just one song by
                a Pakistani singer, Momina Mustehsan, Tera Woh Pyaar. Whenever I
                would start shooting any scene, I would give that song a “During
                the filming of Manto, I would listen to just one song by a
                Pakistani singer, Momina Mustehsan 
              </span>
              ,listen, ”Tera Woh Pyaar. Whenever I would start shooting any scene, I
              would give that song a listen,” said Nawazuddin. “The song did not
              match to the movie at all, yet I would enter some sort of a high
              whenever I listened to it.” Asim Azhar, although he was not
              mentioned by the Siddiqui, was equally thrilled at hearing his
              favourite actor praise his work. Azhar also shared a snippet of
              Nawazuddin’s interview on his Instagram handle to express his
              delight.
            </i>
          </p>
          <a
            href='https://twitter.com/MominaMustehsan/with_replies'
            className='links-white'
          >
            <h5> Read More > </h5>
          </a>
        </section>

        <section className='section-music'>
          <div className='music-home'>
            <Song
              tag='Afreen Afreen'
              title='Best Song'
              viwes='281,114,104'
              audio={song1}
              img={img1}
              titleSong='title5'
              bgColor='card5'
              cardSideFront='card-side-front-5'
            />
          </div>
          <Link className='links-black' to='/music'>
            <Button btn='Music' btnID='btn-1' />
          </Link>
        </section>
      </div>
    );
  }
}

export default Home;

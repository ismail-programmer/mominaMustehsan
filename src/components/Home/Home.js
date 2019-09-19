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
        <section className='section_shows'>
          <h2> Upcoming Shows</h2>
          <p>NEW ORLEANS JAZZ FESTIVAL, NOVEMBER 2023</p>
          <hr className='gap' />
          <p className='about_para'>
            <i>
              This is the first time Mustehsan is recording a tune for a
              Pakistani movie. Earlier, her song “Awari” got featured in
              Bollywood movie “Ek Villian”. Now, we are excited for her musical
              debut in Pakistani cinemas.
            </i>
          </p>
        </section>

        <section className='section_news'>
          <a
            href='https://twitter.com/MominaMustehsan/with_replies'
            className='links-black'
          >
            <h2 className='newsheading'> Latest News</h2>
          </a>
          <p>Momina Mustehsan In Pakistani Magzines</p>
          <hr className='gap' />
          <p className='about_para'>
            <i>
              “During the filming of Manto, I would listen to just one song by a
              Pakistani singer, Momina Mustehsan, Tera Woh Pyaar. Whenever I
              would start shooting any scene, I would give that song a listen,”
              said Nawazuddin. “The song did not match to the movie at all, yet
              I would enter some sort of a high whenever I listened to it.” Asim
              Azhar, although he was not mentioned by the Siddiqui, was equally
              thrilled at hearing his favourite actor praise his work. Azhar
              also shared a snippet of Nawazuddin’s interview on his Instagram
              handle to express his delight.
            </i>
          </p>
          <a
            href='https://twitter.com/MominaMustehsan/with_replies'
            className='links-black'
          >
            <h5> Read More > </h5>
          </a>
        </section>

        <section className='section-music'>
          <Song
            className='music-home'
            tag='Afreen Afreen'
            title='Best Song'
            viwes='281,114,104'
            audio={song1}
            img={img1}
            titleSong='title1'
            bgColor='card1'
          />
          <Link className='links-black' to='/music'>
            <Button btn='Music' btnID='btn-1' />
          </Link>
        </section>

        <section className='section-contact'>
          <h3 className='contact-heading'>Subscribe For Updates</h3>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Type Your Email here'
            className='email'
          />
          <button className='contact-button'>Subscribe Now</button>
        </section>
      </div>
    );
  }
}

export default Home;

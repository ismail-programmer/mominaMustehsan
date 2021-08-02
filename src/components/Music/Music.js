import React, { Component } from 'react';
import Song from './Song';

// ! importing images
import afreenImg from '../../images/sdp4.jpg';
import ayaImg from '../../images/ayanatu.jpg';
import awariImg from '../../images/wallpaper1.jpeg';
import hrzulmImg from '../../images/hrzulm.jpg';
import jeeliyaImg from '../../images/sdp5.jpg';
import kokoImg from '../../images/kokoImg.jpg';
import mahiImg from '../../images/sdp2.jpg';
import whenImg from '../../images/whenyou.jpg';
import khudaImg from '../../images/maxresdefault.jpg';
import yaryiaanImg from '../../images/maxresdefault (1).jpg';
import jelia from '../../images/jeelia.jpg';
import meirasta from '../../images/meirasta.jpg';

// ?import img1 from '../../images/ishq.jpg';

//! Songs
import afreen from '../../audio/Afreen Afreen ( Momina mustehsan voice only).mp3';
import ayaNaTu from '../../audio/Arjun Kanungo, Momina Mustehsan - Aaya Na Tu.mp3';
import piJaun from '../../audio/Farhan Saeed ft. Momina Mustehsan - Pi Jaun HD Official Video.mp3';
import awari from '../../audio/AWARI by Momina MUSTEHSAN.mp3';
import harZulm from '../../audio/Har Zulm Cover Momina Mustehsan [Songsx.Pk].mp3';
import jeeLiya from '../../audio/Jee Liya By Momina Mustehsa [Xsongspk.me].mp3';
import koKo from '../../audio/Ko Ko Korina, Ahad Raza Mir & Momina Mustehsan, Coke Studio Season 11, Episode 9.mp3';
import mahiAaja from '../../audio/Mahi Aaja, Asim Azhar and Momina Mustehsan, Coke Studio Season 11, Episode 4.mp3';
import mainRasta from '../../audio/Main Raasta, Momina Mustehsan &amp Junaid Khan, Episode 5, Coke Studio Season 9.mp3';
import whenYou from "../../audio/Momina Mustehsan - 'When You Say Nothing At All' - Cover Song.mp3";
import ghoomTanaa from '../../audio/Momina Mustehsan & Irteassh, Ghoom Taana, Coke Studio Season 10, Episode 6.mp3';
import teraKhuda from '../../audio/Momina MustehsanNa Tera Khuda Koi Aur HaiRamzan Special 2018.mp3';
import muntazir from '../../audio/Muntazir, by Danyal Zafar & Momina Mustehsan Coke Studio Season 10, Episode 1..mp3';
import teraWoPyar from '../../audio/Tera Woh Pyar (Nawazishein Karam), Momina Mustehsan & Asim Azhar, Episode 6, Coke Studio Season.mp3';
import yaryiaan from '../../audio/Yaariyan.mp3';

//?css file
import './music.css';

class Music extends Component {
  render() {
    return (
      <div className='Music-Section'>
        <div className='pageHeading'>
          <h1 className='mainHeading'>Music</h1>
          <p className='description'>
             Music Library to be shown!
          </p>
        </div>

        {/* Row 1 */}

        <div className='row-test'>
          <div className='col-1-of-3'>
            <Song
              title='Most Popular'
              tag='Afreen Afreen'
              viwes='281,114,304'
              audio={afreen}
              img={afreenImg}
              bgColor='card1'
              titleSong='title1'
              cardSideFront='card-side-front-1'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='Awesome'
              tag='Tera wo Pyar'
              viwes='132,959,376'
              audio={teraWoPyar}
              img={jeeliyaImg}
              bgColor='card2'
              titleSong='title2'
              cardSideFront='card-side-front-2'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='Creative'
              tag='Aya Na Tu'
              viwes='70,561,850'
              audio={ayaNaTu}
              img={ayaImg}
              bgColor='card3'
              titleSong='title3'
              cardSideFront='card-side-front-3'
              card='dock'
            />
          </div>
        </div>

        {/* ! Row 2 */}

        <div className='row-test'>
          <div className='col-1-of-3'>
            <Song
              title='Fantastic'
              tag='Awari'
              viwes='28,505,090'
              audio={awari}
              img={awariImg}
              bgColor='card4'
              titleSong='title4'
              cardSideFront='card-side-front-4'
              card='dock'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='Fabolous'
              tag='Muntazir'
              viwes='14,884,480'
              audio={muntazir}
              img={afreenImg}
              bgColor='card5'
              titleSong='title5'
              cardSideFront='card-side-front-5'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='Mind Blowing'
              tag='Main Rasta '
              viwes='11,218,934'
              audio={mainRasta}
              img={meirasta}
              bgColor='card1'
              titleSong='title1'
              cardSideFront='card-side-front-1'
            />
          </div>
        </div>

        {/* ! Row 3 */}

        <div className='row-test'>
          <div className='col-1-of-3'>
            <Song
              title='Rocky'
              tag='Mahi Aaja'
              viwes='11,550,508'
              audio={mahiAaja}
              img={mahiImg}
              bgColor='card2'
              titleSong='title2'
              cardSideFront='card-side-front-2'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='Lifely'
              tag='jee liya'
              viwes='5,829,126'
              audio={jeeLiya}
              img={jelia}
              bgColor='card3'
              titleSong='title3'
              cardSideFront='card-side-front-3'
              card='dock'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='New Style'
              tag='Ko Ko Korina'
              viwes='5,028,820'
              audio={koKo}
              img={kokoImg}
              bgColor='card4'
              titleSong='title4'
              cardSideFront='card-side-front-4'
              card='dock'
            />
          </div>
        </div>

        {/* ! Row 4 */}

        <div className='row-test'>
          <div className='col-1-of-3'>
            <Song
              title='Creatvive'
              tag='Yaryiaaan'
              viwes='3,074,447'
              audio={yaryiaan}
              img={yaryiaanImg}
              bgColor='card5'
              titleSong='title5'
              cardSideFront='card-side-front-5'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='Sadest'
              tag='Har Zulm'
              viwes='3,063,145'
              audio={harZulm}
              img={hrzulmImg}
              bgColor='card1'
              titleSong='title1'
              cardSideFront='card-side-front-1'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='Most Popular'
              tag='Ghoom Tanaa'
              viwes='2,603,584'
              audio={ghoomTanaa}
              img={awariImg}
              bgColor='card2'
              titleSong='title2'
              cardSideFront='card-side-front-2'
            />
          </div>
        </div>

        {/* ! Row 5 */}

        <div className='row-test'>
          <div className='col-1-of-3'>
            <Song
              title='Creatvive'
              tag='Tera Khuda'
              viwes='815,452'
              audio={teraKhuda}
              img={khudaImg}
              bgColor='card3'
              titleSong='title3'
              cardSideFront='card-side-front-3'
              card='dock'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='English'
              tag='When you say nothing at all '
              viwes='539,299'
              audio={whenYou}
              img={whenImg}
              bgColor='card4'
              titleSong='title4'
              cardSideFront='card-side-front-4'
              card='dock'
            />
          </div>
          <div className='col-1-of-3'>
            <Song
              title='Amazing'
              tag='Pi Jaun'
              viwes='504,030'
              audio={piJaun}
              img={awariImg}
              bgColor='card5'
              titleSong='title5'
              cardSideFront='card-side-front-5'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Music;

import React, { Component } from "react";
import { Link } from "react-router-dom";

// Audio
import song1 from "../../audio/Afreen Afreen ( Momina mustehsan voice only).mp3";

// images
import img1 from "../../images/sdp4.jpg";
// Components
import Song from "../Music/Song";

//css file
import "./home.css";

//utils
import Button from "../../utils/button/Button"

class Home extends Component {
  render() {
    return (
      <div className="maindiv">
        <div className="intro">
          <h1 className="nameHeading">Momina Mustehsan</h1>
          <p>
            <i> Musician,Engineer,Mathematician,Social Activist</i>
          </p>
        </div>
        <section className="section_shows">
          <Link to="/shows" className="links-white">
            {" "}
            <h2> Upcoming Shows</h2>
          </Link>
          <p>NEW ORLEANS JAZZ FESTIVAL, NOVEMBER 2023</p>
          <hr className="gap" />
          <p className="about_para">
            <i>
              I’m a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </i>
          </p>
          <Link to="/shows" className="links-white">
            <h5> More Shows > </h5>
          </Link>
        </section>

        <section className="section_news">
          <Link to="/news" className="links-black">
            {" "}
            <h2 className="newsheading"> Latest News</h2>
          </Link>
          <p>Momina Mustehsan In Pakistani Magzines</p>
          <hr className="gap" />
          <p className="about_para">
            <i>
              I’m a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </i>
          </p>
          <Link to="/news" className="links-black">
            <h5> Read More > </h5>
          </Link>
        </section>

        <section className="section-music">
          <Song
            className="music-home"
            tag="Afreen Afreen"
            title="Best Song"
            viwes="281,114,104"
            audio={song1}
            img={img1}
            titleSong="title1"
            bgColor="card1"
          />
          <Link className="links-black" to="/music">
          <Button 
          btn='Music'
           />
          </Link>
        </section>

        <section className="section-contact">
          <h3 className="contact-heading">Subscribe For Updates</h3>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type Your Email here"
            className="email"
          />
          <button className="contact-button">Subscribe Now</button>
        </section>
      </div>
    );
  }
}

export default Home;

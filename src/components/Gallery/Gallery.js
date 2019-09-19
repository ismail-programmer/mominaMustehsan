import React, { Component } from "react";

//! Import CSS
import './gallery.css'
//? Importing Images

import img1 from "../../images/img36.jpg";
// import img2 from "../../images/img37.jpg";
// import img3 from "../../images/img23.jpg";
// import img4 from "../../images/img24.jpg";
import img17 from "../../images/img41.jpeg";
// import img5 from "../../images/img34.jpg";
// import img6 from "../../images/img26.jpg";
import img7 from "../../images/img27.jpg";
import img8 from "../../images/img28.jpg";
// import img9 from "../../images/img9.jpeg";
import img10 from "../../images/img44.jpeg";
import img11 from "../../images/img43.jpeg";
import img12 from "../../images/img30.jpg";
// import img13 from "../../images/img31.jpg";
import img14 from "../../images/img32.jpg";
// import img15 from "../../images/img15.jpeg";
import img16 from "../../images/img39.jpeg";
import img18 from "../../images/img35.jpg";
import img19 from "../../images/img40.jpeg";
import img20 from "../../images/img42.jpeg";
// import img21 from "../../images/img21.jpg";

// Component
import Image from "./Image";

class Gallery extends Component {
  render() {
    return (
      <div className="img-container-main">
        {/* <div className="row-grid">
          <Image imgSrc={img2} imgId='img1' />
          <Image imgSrc={img3} imgId='img2' />
          <Image imgSrc={img21} imgId='img3'/>
        </div> */}

        {/* <div className="row-grid">
          <Image imgSrc={img5}  imgId='img4'/>
          <Image imgSrc={img6}  imgId='img5'/>
          <Image imgSrc={img4} imgId='img6' />
        </div> */}
        {/* <div className="row-grid">
          <Image imgSrc={img9}  imgId='img7'/>
          <Image imgSrc={img13}  imgId='img8'/>
          <Image imgSrc={img15}  imgId='img9'/>
        </div> */}
        <div className="row-grid">
          <Image imgSrc={img7}  imgId='img10' caption='Ko Phangan, Surat Thani, Thiland'/>
          <Image imgSrc={img8}  imgId='img11' caption='At Garden'/>
          <Image imgSrc={img12}  imgId='img12' caption='On My Way'/>
        </div>
        <div className="row-grid">
          <Image imgSrc={img18}  imgId='img13' caption='Near Cupcake Shop, New York'/>
          <Image imgSrc={img14}  imgId='img14' caption='The Point, Old Trafford Cricket Ground'/>
          <Image imgSrc={img1}  imgId='img15' caption='Black&White New York'/>
        </div>
        <div className="row-grid">
          <Image imgSrc={img19} imgId='img16'  caption='Nathia Gali'/>
          <Image imgSrc={img16}  imgId='img17' caption='SoHo Manhattan'/>
          <Image imgSrc={img10}  imgId='img18' caption='Bhabra Bazar'/>
        </div>
        <div className="row-grid">
          <Image imgSrc={img17} imgId='img19' caption='At HUM Style Awards 2k18'/>
          <Image imgSrc={img20} imgId='img20' caption='Duck Bay Marina'/>
          <Image imgSrc={img11} imgId='img21' caption='For Someone Special'/>
        </div>
      </div>
    );
  }
}

export default Gallery;

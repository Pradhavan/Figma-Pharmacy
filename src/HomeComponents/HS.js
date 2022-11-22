
import React, {  useState } from "react";
import Slider from "react-slick";
import SBC1 from "./Images/SBC1.png"
import SBC2 from "./Images/SBC2.png"
import SBC3 from "./Images/SBC3.png"
import SBC4 from "./Images/SBC4.png"
import SBC5 from "./Images/SBC1.png"
import SBC6 from "./Images/SBC2.png"
import "./HS.css"
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// onClick={sliderRef?.slickPrev}
//onClick={sliderRef?.slickNext}

export default function ShopByCategory() {

const [sliderRef, setSliderRef] = useState(null);
  
var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
  };
return (
<div  className="HS__Parent">
  <div className="HS__Header">
    <h2 className="HS__Text">Hot Seller</h2>
    <div className="HS__ViewAll">
      <h2 className="HS__ViewAllText" >View All</h2>
      <ArrowLeftIcon className="Arrorleft" />   
      <ArrowRightIcon  className="Arrorright" />
    </div>
  </div>
  <div className="HS__BOX_BOX">
  <Slider ref={setSliderRef} {...settings}>
    
  <div className="HS__BOX">
  <ArrowLeftIcon className="Arrorleft" onClick={sliderRef?.slickPrev}/>
  <ArrowRightIcon  className="Arrorright" onClick={sliderRef?.slickNext}/>
    <div className="div">
      <h3>Baby Care</h3>
      <img src={SBC1} alt="1" ></img>
    </div>
    </div>
    <div className="HS__BOX">
    <ArrowLeftIcon className="Arrorleft" onClick={sliderRef?.slickPrev}/>
    <ArrowRightIcon  className="Arrorright" onClick={sliderRef?.slickNext}/>
      <div className="div">
        <h3>Health & Nutrition</h3>
        <img src={SBC2} alt="2" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <ArrowLeftIcon className="Arrorleft" onClick={sliderRef?.slickPrev}/>
      <ArrowRightIcon  className="Arrorright" onClick={sliderRef?.slickNext}/>
      <div className="div">
        <h3>Women Care</h3>
        <img src={SBC3} alt="3" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <ArrowLeftIcon className="Arrorleft" onClick={sliderRef?.slickPrev}/>
      <ArrowRightIcon  className="Arrorright" onClick={sliderRef?.slickNext}/>
      <div className="div">
        <h3>Skin Care</h3>
        <img src={SBC4} alt="4" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <ArrowLeftIcon className="Arrorleft" onClick={sliderRef?.slickPrev}/>
      <ArrowRightIcon  className="Arrorright" onClick={sliderRef?.slickNext}/>
      <div className="div">
        <h3>Ayurveda</h3>
        <img src={SBC1} alt="5" ></img>
      </div>
    </div>
    <div className="HS__BOX">
    <ArrowLeftIcon className="Arrorleft" onClick={sliderRef?.slickPrev}/>
    <ArrowRightIcon  className="Arrorright" onClick={sliderRef?.slickNext}/>
      <div className="div">
        <h3>Hair Care</h3>
        <img src={SBC1} alt="6" ></img>
      </div>
    </div>
    
  </Slider>
  </div>
  <Slider ref={setSliderRef} {...settings}>
  <div className="HS__BOX">
    <div className="div">
      <h3>Baby Care</h3>
      <img src={SBC1} alt="1" ></img>
    </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Health & Nutrition</h3>
        <img src={SBC2} alt="2" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Women Care</h3>
        <img src={SBC3} alt="3" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Skin Care</h3>
        <img src={SBC4} alt="4" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Ayurveda</h3>
        <img src={SBC1} alt="5" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Hair Care</h3>
        <img src={SBC1} alt="6" ></img>
      </div>
    </div>
  </Slider>
  <Slider ref={setSliderRef} {...settings}>
  <div className="HS__BOX">
    <div className="div">
      <h3>Baby Care</h3>
      <img src={SBC1} alt="1" ></img>
    </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Health & Nutrition</h3>
        <img src={SBC2} alt="2" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Women Care</h3>
        <img src={SBC3} alt="3" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Skin Care</h3>
        <img src={SBC4} alt="4" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Ayurveda</h3>
        <img src={SBC1} alt="5" ></img>
      </div>
    </div>
    <div className="HS__BOX">
      <div className="div">
        <h3>Hair Care</h3>
        <img src={SBC1} alt="6" ></img>
      </div>
    </div>
  </Slider>
</div>
    );
  }

import React, { Component } from "react";
import Slider from "react-slick";
import SBC1 from "./Images/SBC1.png"
import SBC2 from "./Images/SBC2.png"
import SBC3 from "./Images/SBC3.png"
import SBC4 from "./Images/SBC4.png"
import SBC5 from "./Images/SBC1.png"
import SBC6 from "./Images/SBC2.png"
import "./ShopByCategory.css"

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div  className="SBC">
        <h2>Shop By Category</h2>
        <Slider {...settings}>
          <div className="SBC__BOX">
            <h3>Baby Care</h3>
            <img src={SBC1} alt="1" ></img>
          </div>
          <div className="SBC__BOX">
            <h3>Health & Nutrition</h3>
            <img src={SBC2} alt="2" ></img>
          </div>
          <div className="SBC__BOX">
            <h3>Women Care</h3>
            <img src={SBC3} alt="3" ></img>
          </div>
          <div className="SBC__BOX">
            <h3>Skin Care</h3>
            <img src={SBC4} alt="4" ></img>
          </div>
          <div className="SBC__BOX">
            <h3>Ayurveda</h3>
            <img src={SBC1} alt="5" ></img>
          </div>
          <div className="SBC__BOX">
            <h3>Hair Care</h3>
            <img src={SBC1} alt="6" ></img>
          </div>
        </Slider>
      </div>
    );
  }
}
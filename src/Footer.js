import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";


function Footer(){
return(
<>
<div className="footerFull">
<div className="footer">
    <div className="footer__option">
        <h5 className="footer__optionLineOne">ABOUT MADYOASIS</h5>
        <p>About</p>
        <p>Blog</p>
        <p>careers</p>
        <p>Press</p>
        <p>Contact Us</p>
    </div>
    <div className="footer__option">
        <h5 className="footer__optionLineOne">PATENTS</h5>
        <p>About</p>
        <p>Blog</p>
        <p>careers</p>
        <p>Press</p>
        <p>Contact Us</p>
    </div>
    <div className="footer__option">
        <h5 className="footer__optionLineOne">SERVICES</h5>
        <p>About</p>
        <p>Blog</p>
        <p>careers</p>
        <p>Press</p>
        <p>Contact Us</p>
    </div>
    <div className="footer__option">
        <h5 className="footer__optionLineOne">USEFUL LINKS</h5>
        <p>About</p>
        <p>Blog</p>
        <p>careers</p>
        <p>Press</p>
        <p>Contact Us</p>
    </div>
    <div className="footer__option">
        <div>
        <h5 className="footer__optionLineOne">FOLLOW US</h5>
        <div class="social__media ">
            <i class="fab fa-facebook-f"></i>  
            <i class="fab fa-twitter"></i>     
            <i class="fab fa-google"></i>      
            <i class="fab fa-linkedin-in"></i> 
        </div>
        </div>
        <div className="reachUs">
        <h5 className="reachUsTxt">REACH US</h5>
        <div className="Full__Address">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <div className="Full__Address__Text">
        <p>89 Warren Ave,New Delhi, 110022</p>
        
        </div>
        </div>
        </div>
    </div>

   

    </div> 
    <div className="copyright">
    <p >
      Copyright @ 2022, madyoasis. All rights reserved.  
    </p>
    </div>
</div>


</>
)
}
export default Footer
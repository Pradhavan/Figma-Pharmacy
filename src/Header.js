import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';


function Header(){

return(
<>
<div className="header" >
    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="IMG"></img>
    <div className="header__option">
        <span className="header__optionLineOne"> Find Doctor</span>
    </div>
    <div className="header__option">
        <span className="header__optionLineOne"> Video Consult</span>
    </div>
    <div className="header__option">
        <span className="header__optionLineOne"> Medicines</span>
    </div>
    <div className="header__option">
        <span className="header__optionLineOne"> Lab Tests</span>
    </div>
    <div className="header__option">
        <span className="header__optionLineOne">Surgeries</span>
    </div>
    <div className="header__search">
        <input  className="header__searchInput" placeholder="Serch Doctor/Mecines..." type="text"></input>
        <SearchIcon className="header__searchIcon" />
    </div>

    <div class="dropdown">
        <button class="dropbtn">For Providers
        <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Security & Help
        <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
        </div>
    </div>

   
    <div className="header__nav">
        <div className="header__optionUser">
            <PersonIcon />
        </div>   
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
        </div>
        
   </div>
</div>
<div className="Border">
</div>
</>
)
}
export default Header
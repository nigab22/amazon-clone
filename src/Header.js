import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(props) {
   // console.log(props.cartItems)
    const getCartItemsCount = () => {
        let count = 0;
        props.cartItems.forEach(item => {
            count += parseInt(item.cartItem.quantity);
        });
        return count; 
    }

    return (
        <div className="header">
            {/* Logo */}
            <Link to="/">
                <div className="header-logo">
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
                </div>
            </Link>
            
            {/* Address */}
            <div className="header-option-address">
                {/* icon */}
                <div className="header-option">
                    <span className="header-option-line-one">Hello,</span>
                    <span className="header-option-line-two">Select your address</span>
                </div>
            </div>

            {/* Search */}
            <div className="header-search">
                <input className="header-search-input" type="text" />
                <div className="header-search-icon-container">
                    <SearchIcon />
                </div>  
            </div>

            <div className="header-nav-items">
                {/* Login name */}
                <div className="header-option">
                    <span className="header-option-line-one">Hello, Sign in</span>
                    <span className="header-option-line-two">Account & Lists</span>
                </div>  
                {/* Orders */}
                <div className="header-option">
                    <span className="header-option-line-one">Returns</span>
                    <span className="header-option-line-two">& Orders</span>
                </div>  
                {/* Cart */}
                <Link to="/Cart">
                    <div className="header-option-cart">
                        <ShoppingBasketIcon />
                        <span className="header-cart-count">{getCartItemsCount()}</span>
                    </div>
                </Link>
            </div>   
        </div>
    )
}

export default Header
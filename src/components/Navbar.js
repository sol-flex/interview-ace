import React from 'react';
import '../App.css'

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="navbar-left">
                <h1>Interview Ace</h1>
            </div>
            <div class="subscribe-button-container">
                <a href="https://buy.stripe.com/fZe7u8fbGcrp63eeUU">
                    <button class="subscribe-button-navbar">Subscribe</button>
                </a>
                <div class="sign-in-container">
                <button id="log-in-button">Log In</button>
                </div>
            </div>
      </div>
    );
  };
  
  export default Navbar;
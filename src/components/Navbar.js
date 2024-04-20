// src/components/Navbar.js
import { useState } from 'react'

import  styles from './Navbar.module.css';
import React from 'react';
import { Link, Route, Routes, Router } from 'react-router-dom';
import HomePage from '../HomePage';
import ThingsToRead from '../ThingsToRead';

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='#home' className={`${styles.logo}`}>CSS480 </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Things to Read</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Extra Button</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Extra Button</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>

    );
  }
  export default Navbar;
  ;
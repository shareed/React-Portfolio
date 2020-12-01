import React, { Component } from 'react';
import { menuItems } from './hamburgerMenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";


import './hamburgerMenu.css';



class HamburgerMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        }
    }


      handleClick = () => {
            this.setState({isMenuOpen: !this.state.isMenuOpen})
         }

      render() {
            console.log("state:", this.state);
            const { isMenuOpen } = this.state;// same as --> const  isMenuOpen = this.state.isMenuOpen;
      return (
               <div className = 'hamburger-menu-container'>
                  <div className = 'hamburger-menu-button' onClick = { this.handleClick }>
                  <FontAwesomeIcon icon={faBars} />
                  </div>
                           {/* //If there are items inside and */}
                           { menuItems.length && (
                              // gives a className of nav and if menu is open add class show otherwise add class hide
                                 <nav className = {`hamburger-menu-nav ${isMenuOpen ? 'show': ''}`}>
                                       <div className = 'hamburger-menu-close-button' onClick = { this.handleClick }>
                                          <FontAwesomeIcon icon={faTimes} />
                                      </div>
                                    <ul className = 'hamburger-menu-items'>
                                          {menuItems.map(item => (
                                             <li className = 'hamburger-menu-list-item' key = {item.label}>
                                             <a href = {item.url} className = 'hamburger-menu-link' >
                                                   {item.label}
                                                </a>
                                             </li>
                                             ))}
                                    </ul>
                                    </nav>

                              
                           ) }
                  </div>
         )
      }
}
export default HamburgerMenu;


import React, { Component } from 'react';
import { menuItems } from './hamburgerMenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";


import './hamburgerMenu.css';
const Container = styled.div`
    position: relative;
    @media(min-width: 800px) {
        display: none;
    }
    `
const HamburgerButton = styled.div` 
    position: relative;
    z-index: 99;
    .fa-bars {
    color: #54e346;
    font-size: 40px;
    cursor: pointer;
    background: #120078; 
    padding: 5px;


}
    `

const CloseButton = styled.div` 
    margin: 0 0 40px 0;
    display: flex;
    justify-content: flex-start;
    .fa-times {
    color: #6f4a8e;
    font-size: 40px;
    cursor: pointer;
    background: #050505; 
    padding: 5px;


}
    `

const HamburgerMenuNav = styled.nav` 
    .show{
        left: 0;
    }
    `

const MenuList = styled.ul` 
    background: #221F3B;
    padding: 0;
    margin-top: 1.8rem;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    margin-left: -10px;
    `

const MenuListItem = styled.li` 
    list-style: none;
    margin: 0 auto;
    width: 99%;
    border-bottom: 1px solid #6f4a8e;
    `

const MenuListItemLink = styled.a` 
    text-decoration: none;
    color: #FFF;
    display: flex;
    padding: 10px 16px;
    `

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
              <Container>
                  <HamburgerButton onClick = { this.handleClick }>
                  <FontAwesomeIcon icon={faBars} />
                  </HamburgerButton>
                           {/* //If there are items inside and */}
                           { menuItems.length && (
                              // gives a className of nav and if menu is open add class show otherwise add class hide
                                 <HamburgerMenuNav className = {`hamburger-menu-nav ${isMenuOpen ? 'show': ''}`}>
                                       <CloseButton onClick = { this.handleClick }>
                                          <FontAwesomeIcon icon={faTimes} />
                                      </CloseButton>
                                    <MenuList>
                                          {menuItems.map(item => (
                                             <MenuListItem key = {item.label}>
                                             <MenuListItemLink href = {item.url}>
                                                   {item.label}
                                                </MenuListItemLink>
                                             </MenuListItem>
                                             ))}
                                    </MenuList>
                                    </HamburgerMenuNav>

                              
                           ) }
                  </Container>
         )
      }
}
export default HamburgerMenu;


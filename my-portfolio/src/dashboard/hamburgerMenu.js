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
    color: #FECD1A;
    font-size: 4rem;
    cursor: pointer;
    background: #120078; 
    padding: .5rem;


}
    `

const CloseButton = styled.div` 
    top: 20;
    margin: 0 0 0 0;
    display: flex;
    justify-content: flex-start;
    .fa-times {
    color: #FECD1A;
    font-size: 4rem;
    cursor: pointer;
    background: #120078; 
    width: 50vw;
    padding: .9rem 0rem .9rem 0rem;
    @media(min-width: 400px) {
        width: 40vw;
    }
    @media(min-width: 600px) {
        width: 30vw;
    }
}
    `

const HamburgerMenuNav = styled.nav` 
    width: 50vw;
    position: absolute;
    top: 0;
    z-index: 999;
    left: -70vw;
    -webkit-transition: left 0.3s ease-in;
    -o-transition: left 0.3s ease-in;
    transition: left 0.3s ease-in;
    @media(min-width: 400px) {
        width: 40vw;
    }
    @media(min-width: 600px) {
        width: 30vw;
    }
    `

const MenuList = styled.ul` 
    background: #120078;
    padding: 0;
    margin-top: 0rem;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
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


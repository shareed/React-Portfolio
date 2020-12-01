import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import me from '../assets/me.jpg';

import styled from "styled-components";


import HamburgerMenu from './hamburgerMenu'
import Home from '../components/Home';
import Menu from '../components/Menu';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';


const Portfolio = styled.div`
   display: flex;
`

const Dashdiv = styled.div`
   display: none;
   @media(min-width: 800px){
      display: inline;
      height: 100vh;
      width: 35vw;
      background-color: #120078;
      padding: 1rem;
      /* text-align: center; */
      /* opacity: 40%; */
      /* font-size: 3.2rem; */
      /* color: white; */
      a {
         text-decoration: none;
         color: white;
         font-size: 1rem;
      }

   }
   
`

const Header = styled.header` 
   display: flex;
   justify-content: center;
   align-items: center;
   color: #FECD1A;
   `


const MyImage = styled.img` 
   width: 10rem;
   height: 10rem;
   border-radius: 5rem;
   -webkit-border-radius: 5rem;
   -moz-border-radius: 5rem;
   `


const IntroDiv = styled.div` 
   flex-basis: 70%;
   margin-left: 2rem;
   `

const MyNameIntro= styled.h2`
   border-bottom: .2rem solid #FECD1A;
   font-size: 2rem;
   text-align: center;
   padding-bottom: .5rem;
   `

const MyIntro= styled.h2`
   font-size: 1.2rem;
   text-align: center;
   padding-top: .5rem;
   `
const MenuLinks = styled.div` 
         display: flex;
         flex-direction: column;
`


function Dashboard() {
     return (
        <Portfolio>
           <HamburgerMenu />
           <Dashdiv >
              <Header>
               <MyImage src = { me }/>
               <IntroDiv>
               <MyNameIntro>Shannon Reed</MyNameIntro>
               <MyIntro>Full Stack Web Developer</MyIntro>
               </IntroDiv>
             </Header>
                  <MenuLinks >
                     <Link>Home</Link>
                     <Link>Menu</Link>
                     <Link>Projects</Link>
                     <Link>Skills</Link>
                     <Link>About</Link>
                  </MenuLinks>
           </Dashdiv>
          
        {/* <Menu/>
        <Projects/>
        <Skills/>
        <About/> */}
        </Portfolio>
     )
  }
export default Dashboard;
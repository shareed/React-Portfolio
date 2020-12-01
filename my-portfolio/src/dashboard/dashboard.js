import { Route } from 'react-router';
import { Link } from 'react-router-dom';


import styled from "styled-components";


import HamburgerMenu from './hamburgerMenu'
import Home from '../components/Home';
import Menu from '../components/Menu';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';


const Portfolio = styled.div`
   display: flex;
`;

const Dashdiv = styled.div`
   display: none;
   @media(min-width: 800px){
      display: inline;
      height: 100vh;
      background-color: #120078;
      font-size: 32px;
      color: white;
      a {
         text-decoration: none;
         color: white;
      }

   }
   
`;



function Dashboard() {
     return (
        <Portfolio>
           <HamburgerMenu />
           <Dashdiv >
                  <Link>
                  <h2>Dashboard</h2>
                  </Link>
               
                  <Link>Home</Link>
                  <Link>Menu</Link>
                  <Link>Projects</Link>
                  <Link>Skills</Link>
                  <Link>About</Link>
           </Dashdiv>
          
        {/* <Menu/>
        <Projects/>
        <Skills/>
        <About/> */}
        </Portfolio>
     )
  }
export default Dashboard;
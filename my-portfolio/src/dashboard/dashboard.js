import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faProjectDiagram, faTasks, faFile } from '@fortawesome/free-solid-svg-icons'
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
      a {
         text-decoration: none;
         color: white;
         font-size: 1rem;
      }

   }
   
`

const Header = styled.header` 
   margin-bottom: 2rem;
   padding: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #FECD1A;
   border-bottom: .3rem outset #FECD1A;
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
   border-bottom: .2rem dotted #FECD1A;
   font-size: 2rem;
   text-align: center;
   padding-bottom: .5rem;
   `

const MyIntro= styled.h2`
   font-size: 1.2rem;
   text-align: center;
   padding-top: .5rem;
   `

const Icons = styled.div`
   font-size: 2rem;
   margin-top: .7rem; 
   display:flex;
   justify-content: space-between;
   `

const LinkContainer = styled.div` 
   display: flex;
   `

const LinkIconContainer = styled.div` 
   width: 4vw;
   margin-right: 1rem;
`

const LinkTextContainer = styled.div`
   padding-top:.3rem;
`

const ImageIcons = styled.div``

const MenuLinks = styled.div` 
   height: 30vh;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   a {
      padding: 1rem;
      font-size: 2rem;
      :hover{
         background: #9D0191;
         border-right: .5rem solid #FECD1A;
      }
   }
`


function Dashboard() {
     return (
        <Portfolio>
           <HamburgerMenu />
           <Dashdiv >
              <Header>
               <ImageIcons>
                  <MyImage src = { me }/>
                  <Icons>
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faLinkedin} />
                     <FontAwesomeIcon icon={faGithub} />
                  </Icons>
               </ImageIcons>
               <IntroDiv>
                  <MyNameIntro>Shannon Reed</MyNameIntro>
                  <MyIntro>Full Stack Web Developer</MyIntro>
               </IntroDiv>
             </Header>
                  <MenuLinks >
                     <Link>
                        <LinkContainer>
                           
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={ faHome } />
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>Home</h2>
                           </LinkTextContainer>
                          
                        </LinkContainer>
                     </Link>
                     <Link>
                        <LinkContainer>
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={faProjectDiagram} />
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>Projects</h2>
                           </LinkTextContainer>
                           
                        </LinkContainer>
                     </Link>
                     <Link>
                        <LinkContainer>
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={faTasks} />
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>Skills</h2>
                           </LinkTextContainer>
                           
                        </LinkContainer>
                     </Link>
                     <Link>
                        <LinkContainer>
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={faUser}/>
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>About</h2>
                           </LinkTextContainer>
                           
                        </LinkContainer>
                     </Link>
                     <a href = 'https://drive.google.com/file/d/15I7pu_6iLF3HoYZej2xUHpPHhAGLcssU/view' >
                        <LinkContainer>
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={faFile} />
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>Resume</h2>
                           </LinkTextContainer>
                           
                        </LinkContainer>
                     </a>
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
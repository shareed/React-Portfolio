import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faProjectDiagram, faTasks, faFile, faIdCard } from '@fortawesome/free-solid-svg-icons'
import me from '../assets/me.jpg';

import styled from "styled-components";


import HamburgerMenu from './hamburgerMenu'


const Portfolio = styled.div`
   display: flex;
   
`

const Dashdiv = styled.div`
   display: none;
   @media(min-width: 800px){
      display: inline;
      flex-basis: 30;
      height: 100vh;
      width: 30vw;
      background-color: #120078;
      a {
         text-decoration: none;
         color: white;
         font-size: 1rem;
      }

   }
   @media(min-width: 900px){
      width: 32vw;
   }
   @media(min-width: 1000px){
      width: 30vw;
   }
   @media(min-width: 1100px){
      width: 28vw;
   }
   @media(min-width: 1200px){
      width: 26vw;
   }
   @media(min-width: 1300px){
      width: 24vw;
   }
   @media(min-width: 1400px){
      width: 22vw;
   }
   @media(min-width: 1500px){
      width: 20vw;
   }
   @media(min-width: 1600px){
      width: 18vw;
   }
   @media(min-width: 1700px){
      width: 16vw;
   }
   @media(min-width: 1800px){
      width: 14vw;
   }
   
`

const Header = styled.header` 
   margin-bottom: 5rem;
   padding: 1rem;
   display: flex;
   flex-direction: column;
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
   /* flex-basis: 70%; */
   /* margin-left: 2rem; */
   `

const MyNameIntro= styled.h2`
   border-bottom: .2rem dotted #FECD1A;
   font-size: 2.5rem;
   text-align: center;
   padding-bottom: .5rem;
   /* @media(min-width: 900px){
      font-size: 2rem;
   }
   @media(min-width: 1000px){
      font-size: 2.2rem;
   }
   @media(min-width: 1100px){
      font-size: 2.4rem;
   } */
   `

const MyIntroDev= styled.h2`
   font-size: 1.4rem;
   text-align: center;
   padding-top: .5rem;

   `

const LinkContainer = styled.div`
   padding-left: 1rem; 
   padding-right: 1rem;
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

const BottomIcons = styled.div`
   font-size: 2rem;
   margin: 5rem 2rem 0 2rem; 
   display:flex;
   justify-content: space-between;
   color: #FECD1A;
   :hover{
      cursor: pointer;
   }
   `
const Contents = styled.div` 
 display:flex;
 flex-direction: column;
 `

function Dashboard() {
     return (
        <Portfolio>
           <HamburgerMenu />
           <Dashdiv >
              <Header>
               <ImageIcons>
                  <MyImage src = { me }/>
               </ImageIcons>
               <IntroDiv>
                  <MyNameIntro>Shannon Reed</MyNameIntro>
                  <MyIntroDev>Full Stack Web Developer</MyIntroDev>
               </IntroDiv>
             </Header>
                  <MenuLinks >
                     <Link to = '/home'>
                        <LinkContainer>
                           
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={ faHome } />
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>Home</h2>
                           </LinkTextContainer>
                          
                        </LinkContainer>
                     </Link>
                     <Link to = '/projects'>
                        <LinkContainer>
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={faProjectDiagram} />
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>Projects</h2>
                           </LinkTextContainer>
                           
                        </LinkContainer>
                     </Link>
                     <Link to = '/skills'>
                        <LinkContainer>
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={faTasks} />
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>Skills</h2>
                           </LinkTextContainer>
                           
                        </LinkContainer>
                     </Link>
                     <Link to = '/contact'>
                        <LinkContainer>
                           <LinkIconContainer >
                              <FontAwesomeIcon className='menu-icon' icon={faIdCard}/>
                           </LinkIconContainer>
                           <LinkTextContainer>
                              <h2>Contact</h2>
                           </LinkTextContainer>
                           
                        </LinkContainer>
                     </Link>
                     <Link to ='/about'>
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
                  <BottomIcons>
                     <FontAwesomeIcon icon={faTwitter} />
                     <FontAwesomeIcon icon={faLinkedin} />
                     <FontAwesomeIcon icon={faGithub} />
                  </BottomIcons>
           </Dashdiv>
          
        
        <div>
        
        </div>
        </Portfolio>
     )
  }
export default Dashboard;
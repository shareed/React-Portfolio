import React from 'react';
import styled from "styled-components";


const AboutDiv = styled.div` 
   margin-left: 20rem;
   `
const Header = styled.div` 
   background: #120078;
   font-size: 3rem;
   `

function About() {
     return (
      <AboutDiv>
        <Header>
          <h2>About</h2>
        </Header>
        
        <div>
                            <p class = 'first-about'>
                                I'm Shannon Reed a Full Stack Web Developer who specializes
                                in bringing designs to life with User Interfaces, Front and Back End Development.
                                I have a bachelor’s degree in Information Technology and Web Development 
                            </p>
                            <p class = 'second-about'>
                                I have been attending and working at Lambda School for the past year, developing my coding, communication, and teamwork skills. I am looking for new
                                web development and software engineer opportunities that will allow me to use my skills to become an asset while learning more. If you are interested
                                in hiring me or just want to connect, checkout ways to contact me below. I am looking forward to hearing from you soon.
                            </p>
                            </div>
        </AboutDiv>
     )
  }
export default About;
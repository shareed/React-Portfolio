import React from 'react';
import styled from "styled-components";
import Codebg from '../assets/codebg.png'
const HomeDiv = styled.div` 
    background: url(${Codebg}) no-repeat center center fixed;
    background-size: cover;
    opacity: 70%;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    padding: 10rem 0 0 5rem;
    h2 {
       font-size: 5rem;
       color: #9D0191;
    }
    p {
       font-size: 3rem;
       color: #FECD1A;
    }
    /* margin-left: 3rem; */
    `
function Home() {
     return (
        <HomeDiv>
        <h2>Hey, I'm Shannon.</h2>
        <p>Full Stack Web Developer <br/>learning, building and teaching <br/> from San Diego, Califonia</p>
        </HomeDiv>
     )
  }
export default Home;
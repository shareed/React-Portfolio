import React from 'react';
import styled from "styled-components";
import Codebg from '../assets/codebg.png'
const HomeDiv = styled.div` 
    background: url(${Codebg}) no-repeat center center fixed;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* margin-left: 3rem; */
    `
function Home() {
     return (
        <HomeDiv>
        <h2>Hey, I's Shannon.</h2>
        <p>Full Stack Web Developer working remotely from San Diego, Califonia</p>
        </HomeDiv>
     )
  }
export default Home;
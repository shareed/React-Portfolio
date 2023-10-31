import React from 'react';
import styled from "styled-components";
import Codebg from '../assets/codebg.png'
const HomeDiv = styled.div` 
    /* background: url(${Codebg}) no-repeat center center fixed;
    background-size: cover;
    opacity: 20%;
    width: 100vw;
    height: 100vh;
    overflow: hidden; */
    
    padding: 10rem 0 0 5rem;
    margin-bottom: 80rem;
    h2 {
       font-size: 5rem;
       color: #FECD1A;
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
        <p>Full Stack Web Developer learning, building and teaching <br/>from San Diego, Califonia. I turn ideas into applications and websites</p>
        <p>Come on in and take a look around, dont forget to connect with me while you are here!!!</p>
        </HomeDiv>
     )
  }
export default Home;
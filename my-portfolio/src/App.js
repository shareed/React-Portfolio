import { Route } from 'react-router';
// import './App.css';
import styled from "styled-components";
import Dashboard from './dashboard/dashboard';

const AppDiv = styled.div` 
  height: 100vh;
  background: #FECD1A;
  `

function App() {
  return (
    <AppDiv>
      <header className="App-header">
       
        <Route path='/' component={Dashboard} />
      </header>
    </AppDiv>
  );
}

export default App;

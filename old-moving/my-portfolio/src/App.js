import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
// import './App.css';
import styled from "styled-components";
import Dashboard from './dashboard/dashboard';

const AppDiv = styled.div` 
margin: 0;
padding: 0;
  height: 100vh;
  background: #9D0191;
  display: flex;
  
  `

const DashDiv = styled.div` 
  `

function App() {
  return (
    <AppDiv>
      <header className="App-header">
        <DashDiv>
          <Dashboard />
        </DashDiv>
      </header>
      <Switch>
        {/* <Route path='/' component={Dashboard} /> */}
            <Route path="/home" component= { Home } />
            
            <Route path="/projects" component={ Projects} />

            <Route path="/skills" component= { Skills } />
            <Route path ='/about' component = { About} />
            <Route path ='/contact' component = {Contact } />

        </Switch>
    </AppDiv>
  );
}

export default App;

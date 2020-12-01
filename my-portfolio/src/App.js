import { Route } from 'react-router';
// import './App.css';
import styled from "styled-components";
import Dashboard from './dashboard/dashboard';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path='/' component={Dashboard} />
      </header>
    </div>
  );
}

export default App;

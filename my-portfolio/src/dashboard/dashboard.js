import React from 'react';

import Home from '../components/Home';
import Menu from '../components/Menu';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';

function Dashboard() {
     return (
        <div>
        <h2>Dashboard</h2>
        <Home/>
        <Menu/>
        <Projects/>
        <Skills/>
        <About/>
        </div>
     )
  }
export default Dashboard;
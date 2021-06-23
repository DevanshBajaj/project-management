import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import NewProject from './components/ProjectForm/NewProject';

import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <NewProject />
      <h1>App</h1>
    </div>
  )
}

export default App

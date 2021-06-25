import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import ProjectList from './components/Project/ProjectList';
import NewProject from './components/ProjectForm/NewProject';
import './App.css';

const DUMMY_PROJECTS = [
  {
    id: "e1",
    title: "Pokedex",
    description: 'Made with React',
    image: ''
  },
  {
    id: "e3",
    title: "streaming site",
    description: 'Made with React',
    image: ''
  },
  {
    id: "e4",
    title: "portfolio",
    description: 'Made with CSS/JS',
    image: ''
  },
];




function App() {
  const [projects, setProjects] = useState(DUMMY_PROJECTS);

  const addProjectHandler = (project) => {
    setProjects((prevProjects) => {
      return [project, ...prevProjects]
    })
    console.log(...projects)
  }

  const Home = (props) => {
    return (
      <div>
        <NewProject onAddProject={addProjectHandler} />
        <ProjectList items={projects} />
      </div>
    )
  }
  
  const Projects = (props) => {
    return (
      <div>
          <ProjectList items={projects} />
      </div>)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Projects} path='/projects' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

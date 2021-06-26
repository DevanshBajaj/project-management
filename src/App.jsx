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
    title: "Streaming site",
    description: 'Designed using figma',
    image: ''
  },
  {
    id: "e4",
    title: "Portfolio",
    description: 'Made with vanilla HTML/CSS/Javascript',
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

  const deleteProjectHandler = projectId => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.filter(project => project.id !== projectId)
      return updatedProjects;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No Projects found. Maybe add one?</p>
  );

  if (projects.length > 0) {
    content = (
      <ProjectList items={projects} onDeleteProject={deleteProjectHandler} />
    );
  }

  const Home = (props) => {
    return (
      <div>
        <NewProject onAddProject={addProjectHandler} />
        {content}
      </div>
    )
  }
  
  const Projects = (props) => {
    return (
      <div>
        {content}
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

// Home.js
import React from 'react';
import ProjectOverview from './ProjectOverview';
import './static/styles.css';

function Home() {
  const projects = [
    {
      title: 'Keeper App Project',
      image: '/Keeper_App.png', 
    },
    {
      title: 'Secrets Project',
      image: '/Secrets.png', 
    },
    {  
      title: 'ToDoList Project',
      image: '/ToDoList.png', 
    },
    {
      title: 'Anime Finder Project',
      image: '/Anime.png', 
    },
  ];

  return (
    <div className="flex flex-wrap p-4">
      {projects.map((project, index) => (
        <div key={index} className="w-full sm:w-1/2 p-2">
          <ProjectOverview title={project.title} image={project.image} />
        </div>
      ))}
    </div>
  );
}

export default Home;

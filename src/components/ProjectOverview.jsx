import React from 'react';

function ProjectOverview({ image, title }) {
  return (
    <div className="bg-gray-100 p-8 rounded-md h-64 relative">
      <img
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <h2 className="z-10 text-xl font-semibold text-center">{title}</h2>
    </div>
  );
}

export default ProjectOverview;

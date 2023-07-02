import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('project.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  return (
    <div style={{ position: 'relative'}}>
      <p className="text-white text-5xl">Length: {projects.length}</p>
      <h1 className="text-3xl bg-clip-text bg-gradient-to-r from-violet-700 to-pink-500 text-center my-8">Portfolio</h1>
    </div>
  );
};

export default Projects;

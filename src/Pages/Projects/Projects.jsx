import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Project from "./Project";

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

  const HTML_CSS = projects.filter(project => project.category === 'html');
  const Frameworks = projects.filter(project => project.category === 'frameworks');
  const DOM = projects.filter(project => project.category === 'dom');
  const API = projects.filter(project => project.category === 'api');
  const React = projects.filter(project => project.category === 'react');
  const Backend = projects.filter(project => project.category === 'backend');
  
  const categoriesArray = ['HTML_CSS', 'Frameworks', 'DOM', 'API', 'React', 'Backend'];

  return (
    <div className="text-white" style={{ position: 'relative'}}>
      <p className="text-white text-5xl">Length: {projects.length}</p>
      <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-violet-700 to-pink-500 text-center my-8">My Projects</h1>

        <div className="text-center">
          <Tabs>
          <TabList>
            <Tab>All Projects</Tab>
              {
                categoriesArray.map(category => <Tab key={category}>{category}</Tab>)
              }
          </TabList>

          <TabPanel>
            {
              projects.map(project => <Project key={project._id} project={project}></Project>)
            }
          </TabPanel>
            <TabPanel>
              {
                Frameworks.map(project => <Project key={project._id} project={project}></Project>)
              }
            </TabPanel>
            <TabPanel>
              {
                DOM.map(project => <Project key={project._id} project={project}></Project>)
              }
            </TabPanel>
            <TabPanel>
              {
                API.map(project => <Project key={project._id} project={project}></Project>)
              }
            </TabPanel>
            <TabPanel>
              {
                React.map(project => <Project key={project._id} project={project}></Project>)
              }
            </TabPanel>
            <TabPanel>
              {
                Backend.map(project => <Project key={project._id} project={project}></Project>)
              }
            </TabPanel>
        </Tabs>
        </div>
    </div>
  );
};

export default Projects;

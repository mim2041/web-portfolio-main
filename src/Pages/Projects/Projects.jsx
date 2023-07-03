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
    <div className="text-white mx-8 lg:mx-24" style={{ position: 'relative'}}>
      <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-violet-700 to-pink-500 text-center my-8">My Projects</h1>

        <div className="text-center mt-12">
          <Tabs>
          <TabList>
            <Tab>All Projects</Tab>
              {
                categoriesArray.map(category => <Tab key={category}>{category}</Tab>)
              }
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {
              projects.map(project => <Project key={project._id} project={project}></Project>)
            }
            </div>
          </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
              {
                HTML_CSS.map(project => <Project key={project._id} project={project}></Project>)
              }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                Frameworks.map(project => <Project key={project._id} project={project}></Project>)
              }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                DOM.map(project => <Project key={project._id} project={project}></Project>)
              }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                API.map(project => <Project key={project._id} project={project}></Project>)
              }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                React.map(project => <Project key={project._id} project={project}></Project>)
              }
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                Backend.map(project => <Project key={project._id} project={project}></Project>)
              }
              </div>
            </TabPanel>
        </Tabs>
        </div>
    </div>
  );
};

export default Projects;

import React, { Component } from "react";
import "./App.css";
import Headbar from "./Components/Headbar/Headbar";
import Projects from "./Containers/Projects/Projects";
import Todos from "./Containers/Todos/Todos";
import { useSelector } from "react-redux";
import { selectCurrentProject } from "./redux/reducers";

const App = () => {
   const selectedProject = useSelector(selectCurrentProject);
   
   return (
      <div className="App">
         <Headbar />
         <Projects />
         <Todos
            selectedProject={selectedProject}
         />
      </div>
   );
};

export default App;

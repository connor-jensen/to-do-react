import React, { Component } from "react";
import classes from "./Projects.module.css";
import Project from "../../Components/Project/Project";
import AddProject from "../../Components/AddProject/AddProject";
import { useDispatch, useSelector } from "react-redux";
import { selectProject, selectProjects } from "../../redux/reducers";

const Projects = (props) => {
   const projectsData = useSelector(selectProjects);

   const dispatch = useDispatch();

   let projects = Object.keys(projectsData)
      .map((projName) => {
         if (projName === "Today") {
            return (
               <Project
                  reserved
                  title="Today"
                  numTodos={projectsData[projName].todos.length}
                  icon="today"
                  clicked={() => dispatch(selectProject(projName))}
               />
            );
         } else if (projName === "Next 7 Days") {
            return (
               <Project
                  reserved
                  title="Next 7 Days"
                  numTodos={projectsData[projName].todos.length}
                  icon="week"
                  clicked={() => dispatch(selectProject(projName))}
               />
            );
         } else {
            return (
               <Project
                  title={projName}
                  key={projName}
                  numTodos={projectsData[projName].todos.length}
                  clicked={() => dispatch(selectProject(projName))}
               />
            );
         }
      })
      .reduce((array, el) => {
         return array.concat(el);
      }, []);

   return (
      <div className={classes.Projects}>
         <hr
            width="90%"
            noshade="true"
            color="ebebeb"
            align="right"
            style={{ order: 1 }}
         />
         {projects}
         <AddProject onSubmit={props.onSubmit} />
      </div>
   );
}

export default Projects;
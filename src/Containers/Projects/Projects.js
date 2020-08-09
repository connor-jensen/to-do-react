import React, { Component } from "react";
import classes from "./Projects.module.css";
import Project from "../../Components/Project/Project";
import AddProject from "../../Components/AddProject/AddProject";

class Projects extends Component {
   state = {};

   render() {
      
      let projects = Object.keys(this.props.projects)
         .map((projName) => {
            if (projName === "Today") {
               return (
                  <Project
                     reserved
                     title="Today"
                     numTodos={this.props.projects[projName].todos.length}
                     icon="today"
                     clicked={() => this.props.projectClicked("Today")}
                  />
               );
            } else if (projName === "Next 7 Days") {
               return (
                  <Project
                     reserved
                     title="Next 7 Days"
                     numTodos={this.props.projects[projName].todos.length}
                     icon="week"
                     clicked={() => this.props.projectClicked("Next 7 Days")}
                  />
               );
            } else {
               return (
                  <Project
                     title={projName}
                     key={projName}
                     numTodos={this.props.projects[projName].todos.length}
                     clicked={() => this.props.projectClicked(projName)}
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
            <AddProject onSubmit={this.props.onSubmit} />
         </div>
      );
   }
}

export default Projects;

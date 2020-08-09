import React, { Component } from "react";
import "./App.css";
import Headbar from "./Components/Headbar/Headbar";
import Projects from "./Containers/Projects/Projects";
import Todos from "./Containers/Todos/Todos";

class App extends Component {
   state = {
      projects: {
         Today: {
            title: "Today",
            todos: [],
         },
         "Next 7 Days": {
            title: "Next 7 Days",
            todos: [
               {
                  title: "Go on a run",
                  parentProject: "Something",
                  dueDate: "Augst 6th",
                  completed: false,
               },
            ],
         },
         Something: {
            title: "Something",
            todos: [
               {
                  title: "Go on a run",
                  parentProject: "Something",
                  dueDate: "Augst 6th",
                  completed: false,
               },
            ],
         },
      },
      selectedProject: null,
   };

   componentWillMount() {
      const defaultSelectedProject = this.state.projects.Today;
      this.setState({ selectedProject: defaultSelectedProject });
   }

   addProject = (title) => {
      if (!this.state.projects[title]) {
         const newProject = {
            title: title,
            todos: [],
         };
         const updatedProjects = { ...this.state.projects };
         updatedProjects[title] = newProject;
         this.setState({ projects: updatedProjects });
      }
   };

   addProjectHandler = (event) => {
      if (event.key === "Enter") {
         this.addProject(event.target.value);
         event.target.value = null;
      }
   };

   projectClickedHandler = (projectName) => {
      if (this.state.projects[projectName]) {
         const selectedProject = this.state.projects[projectName];
         this.setState({ selectedProject: selectedProject });
         console.log(projectName);
      } else console.log("Error: project not found");
   };

   addTodo = (todoTitle, projectTitle) => {
      if (this.state.projects[projectTitle]) {
         const newTodo = {
            title: todoTitle,
            parentProject: projectTitle,
            dueDate: "Augst 6th",
            completed: false,
         };
         const updatedProject = { ...this.state.projects[projectTitle] };
         updatedProject.todos.push(newTodo);
         console.log(updatedProject);
         const updatedProjects = {...this.state.projects} 
         updatedProjects[projectTitle] = updatedProject;
         this.setState({ projects: updatedProjects });
      }
   }

   addTodoHandler = (event) => {
      if (event.key === "Enter") {
         const projectName = this.state.selectedProject.title
         this.addTodo(event.target.value, projectName);
         event.target.value = null;
      }
   }

   render() {
      return (
         <div className="App">
            <Headbar />
            <Projects
               projects={this.state.projects}
               onSubmit={this.addProjectHandler}
               projectClicked={this.projectClickedHandler}
            />
            <Todos selectedProject={this.state.selectedProject} onSubmit={this.addTodoHandler}/>
         </div>
      );
   }
}

export default App;

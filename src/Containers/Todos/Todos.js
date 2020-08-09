import React, { Component } from "react";
import classes from "./Todos.module.css";
import Todo from "../../Components/Todo/Todo";
import AddTodo from "../../Components/AddTodo/AddTodo";

class Todos extends Component {
   state = {};
   render() {
      let todos = this.props.selectedProject.todos.map(todo => {
         return (<Todo title={todo.title} project={todo.parentProject}/>)
      })

      // .reduce((array, el) => {
      //    return array.concat(el);
      // }, []);

      return (
         <div className={classes.Todos}>
            <div className={classes.Heading}>{this.props.selectedProject.title}</div>
            {todos}
            <AddTodo onSubmit={this.props.onSubmit}/>
         </div>
      );
   }
}

export default Todos;

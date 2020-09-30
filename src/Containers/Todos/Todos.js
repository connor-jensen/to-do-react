import React, { Component } from "react";
import classes from "./Todos.module.css";
import Todo from "../../Components/Todo/Todo";
import AddTodo from "../../Components/AddTodo/AddTodo";

const Todos = (props) => {
   let todos = props.selectedProject.todos.map((todo) => {
      return <Todo title={todo.title} project={todo.parentProject} completed={todo.completed}/>;
   });

   return (
      <div className={classes.Todos}>
         <div className={classes.Heading}>
            {props.selectedProject.title}
         </div>
         {todos}
         <AddTodo onSubmit={props.onSubmit} />
      </div>
   );
};

export default Todos;

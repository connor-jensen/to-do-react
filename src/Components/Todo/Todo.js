import React from "react";
import classes from './Todo.module.css';
import { toggleTodo } from "../../redux/reducers";
import { useDispatch } from "react-redux";

const Todo = (props) => {
   const dispatch = useDispatch();

   const todoClasses = [ classes.Todo ];

   if (props.completed) {
      todoClasses.push(classes.Completed)
   }



   return (
      <div className={todoClasses.join(' ')} onClick={() => (dispatch(toggleTodo({title: props.title, parentProject: props.project})))}>
         <div className={classes.TodoLeft}>
            <span className={classes.TodoDot}></span>
            <div className={classes.pTitle}>{props.title}</div>
         </div>
         <div className={classes.TodoRight}>
            <div className={[classes.pType, classes.lighter].join(' ')}>{props.project}</div>
            <span className={classes.Dot}></span>
         </div>
      </div>
   );
};

export default Todo;

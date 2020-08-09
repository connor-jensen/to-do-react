import React from "react";
import classes from './Todo.module.css';

const Todo = (props) => {
   return (
      <div className={classes.Todo}>
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

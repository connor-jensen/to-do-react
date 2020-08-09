import React from "react";
import classes from './AddTodo.module.css';

const AddTodo = (props) => {
   return (
      <div className={classes.AddTodo}>
         <span className={classes.Plus}>+</span>
         <input
            type="text"
            className={classes.Title}
            placeholder="Add Todo"
            onKeyPress={props.onSubmit}
         />
      </div>
   );
};

export default AddTodo;

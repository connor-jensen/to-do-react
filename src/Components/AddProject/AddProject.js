import React from "react";
import classes from "./AddProject.module.css";

const AddProject = (props) => {
   return (
      <div className={classes.AddProject}>
         <span className={classes.Plus}>+</span>
         <input
            type="text"
            className={classes.Title}
            placeholder="Add Project"
            onKeyPress={props.onSubmit}
         />
      </div>
   );
};

export default AddProject;

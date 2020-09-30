import React from "react";
import classes from "./AddProject.module.css";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/reducers";

const AddProject = (props) => {   
   const dispatch = useDispatch();

   const addProjectHandler = (event) => {
      if (event.key === "Enter") {
         dispatch(addProject(event.target.value));
         event.target.value = null;
      }
   };

   return (
      <div className={classes.AddProject}>
         <span className={classes.Plus}>+</span>
         <input
            type="text"
            className={classes.Title}
            placeholder="Add Project"
            onKeyPress={addProjectHandler}
         />
      </div>
   );
};

export default AddProject;

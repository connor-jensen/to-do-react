import React from "react";
import classes from "./Headbar.module.css";

const Headbar = (props) => {
   return (
      <div className={classes.Headbar}>
         <div>Projects:</div>
         <div>Todos:</div>
         <div></div>
      </div>
   );
};

export default Headbar;

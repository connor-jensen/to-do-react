import React from "react";
import classes from "./Project.module.css";

const Project = (props) => {
   let icon = (<div className={classes.Dot}></div>);
   if (props.icon === "today") {
      icon = (<i
         className="fa fa-calendar-o"
         aria-hidden="true"
         style={{ fontSize: "14px", color: "#187E31" }}
      ></i>)
   }
   else if (props.icon === "week") {
      icon = (<i className="fa fa-calendar" aria-hidden="true" style={{fontSize:"14px", color:"#694BB3"}}></i>)
   }

   let orderStyle = null;
   if (props.reserved) {
      orderStyle = { order: 0}
   }

   return (
      <div className={classes.Project} onClick={props.clicked} style={orderStyle}>
         {icon}
         <div className={classes.pTitle}>{props.title}</div>
         <div className={classes.todoQuantity}>{props.numTodos}</div>
      </div>
   );
};

export default Project;

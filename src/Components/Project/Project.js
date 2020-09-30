import React, { Component } from "react";
import classes from "./Project.module.css";

class Project extends Component {
   render() {
      let icon = <div className={classes.Dot}></div>;
      if (this.props.icon === "today") {
         icon = (
            <i
               className="fa fa-calendar-o"
               aria-hidden="true"
               style={{ fontSize: "14px", color: "#187E31" }}
            ></i>
         );
      } else if (this.props.icon === "week") {
         icon = (
            <i
               className="fa fa-calendar"
               aria-hidden="true"
               style={{ fontSize: "14px", color: "#694BB3" }}
            ></i>
         );
      }

      let orderStyle = null;
      if (this.props.reserved) {
         orderStyle = { order: 0 };
      }

      return (
         <div
            className={classes.Project}
            onClick={this.props.clicked}
            style={orderStyle}
         >
            {icon}
            <div className={classes.pTitle}>{this.props.title}</div>
            <div className={classes.todoQuantity}>{this.props.numTodos}</div>
         </div>
      );
   }
}

export default Project;

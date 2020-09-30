import React, { useState } from "react";
import classes from './AddTodo.module.css';
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodo = (props) => {
   const [startDate, setStartDate] = useState(new Date());
   const dispatch = useDispatch();

   const addTodoHandler = (event) => {
      if (event.key === "Enter") {
         dispatch(addTodo({title: event.target.value, date: startDate}));
         event.target.value = null;
      }
   };

   return (
      <div className={classes.AddTodo}>
         <span className={classes.Plus}>+</span>
         <input
            type="text"
            className={classes.Title}
            placeholder="Add Todo"
            onKeyPress={addTodoHandler}
         />
         <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </div>
   );
};

export default AddTodo;

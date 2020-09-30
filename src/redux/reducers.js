import { createSlice } from "@reduxjs/toolkit";
import { isToday, add, isWithinInterval, startOfToday } from "date-fns";
import { endOfToday } from "date-fns/esm";

export const projectsSlice = createSlice({
   name: "app",
   initialState: {
      projects: {
         Today: {
            title: "Today",
            todos: [],
         },
         "Next 7 Days": {
            title: "Next 7 Days",
            todos: [
               {
                  title: "Go on a run",
                  parentProject: "Something",
                  dueDate: "Augst 6th",
                  completed: false,
               },
            ],
         },
         Something: {
            title: "Something",
            todos: [
               {
                  title: "Go on a run",
                  parentProject: "Something",
                  dueDate: "Augst 6th",
                  completed: false,
               },
            ],
         },
      },
      selectedProject: "Today",
   },
   reducers: {
      addProject: (state, action) => {
         state.projects[action.payload] = {
            title: action.payload,
            todos: [],
         };
      },
      addTodo: (state, action) => {
         let newTodo = {
            title: action.payload.title,
            parentProject: state.selectedProject,
            dueDate: action.payload.date,
            completed: false,
         };
         state.projects[state.selectedProject].todos.push(newTodo);
         if (isToday(action.payload.date)) {
            state.projects["Today"].todos.push(newTodo);
         }
         let sevenDaysOut = add(endOfToday(), { days: 7 });
         let interval = { start: startOfToday(), end: sevenDaysOut };
         if (isWithinInterval(action.payload.date, interval)) {
            state.projects["Next 7 Days"].todos.push(newTodo);
         }
      },
      toggleTodo: (state, action) => {
         state.projects[action.payload.parentProject].todos.map((todo) => {
            if (todo.title === action.payload.title) {
               todo.completed = !todo.completed;
            }
         });
         if (action.payload.parentProject !== "Today") {
            state.projects["Today"].todos.map((todo) => {
               if (todo.title === action.payload.title) {
                  todo.completed = !todo.completed;
               }
            });
         }
         if (action.payload.parentProject !== "Next 7 Days") {
            state.projects["Next 7 Days"].todos.map((todo) => {
               if (todo.title === action.payload.title) {
                  todo.completed = !todo.completed;
               }
            });
         }
      },
      selectProject: (state, action) => {
         state.selectedProject = action.payload;
      },
   },
});

export const {
   addProject,
   addTodo,
   toggleTodo,
   selectProject,
} = projectsSlice.actions;

export const selectProjects = (state) => {
   return state.app.projects;
};

export const selectCurrentProject = (state) => {
   return state.app.projects[state.app.selectedProject];
};

export default projectsSlice.reducer;

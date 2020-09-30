import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./reducers";

export default configureStore({
   reducer: {
      app: projectsReducer,
   },
});

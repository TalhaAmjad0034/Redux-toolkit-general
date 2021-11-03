import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter";

export default configureStore({
  reducer: {
    //All reducers are combined here
    counter: counterReducer,
  },
});

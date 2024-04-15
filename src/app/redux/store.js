const { configureStore } = require("@reduxjs/toolkit");
import todoReducers from "./todoSlice";
const store = configureStore({
  reducer: {
    todos: todoReducers,
  },
});
export default store;

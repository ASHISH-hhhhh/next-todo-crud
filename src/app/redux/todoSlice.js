const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = [
  { id: nanoid(), task: "Complete Next.js", completed: true },
  { id: nanoid(), task: "Complete SASS", completed: true },
  { id: nanoid(), task: "Complete CRUD Project", completed: true },
  { id: nanoid(), task: "Deploy the Crud Project", completed: true },
];
const Slice = createSlice({
  name: "Todo App",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      console.log("Toggle Todo called", action.payload);
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
      });
    },
  },
});
export const { addTodo, deleteTodo, toggleTodo } = Slice.actions;
const todoReducers = Slice.reducer;
export default todoReducers;

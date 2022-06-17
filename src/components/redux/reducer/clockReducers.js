const initialState = {
  count: 0,
  todos: [{ id: 9, text: "Hello world", completed: false }],
};

export default function todosReducers(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODOS":
      return state;
    default:
      return state;
  }
}

const ADD_TODO = 'todo/ADD_TODO';
const TOGGLE_TODO = 'todo/TOGGLE_TODO';

let nextId = 1;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
    done: false,
  },
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map( (todo) => (
        (todo.id === action.id) ?
        { ...todo, done: !todo.done } :
        todo)); 
    default:
      return state;
  }
}

export default todoReducer;
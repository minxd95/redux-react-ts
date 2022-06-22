// list of actions
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// action generators
export const addTodo = () => ({
  type: ADD_TODO,
});
export const removeTodo = () => ({
  type: REMOVE_TODO,
});
export const toggleTodo = () => ({
  type: TOGGLE_TODO,
});

// initial state
const initialState: { id: number; text: string; done: boolean }[] = [];

export default function todo(
  state = initialState,
  action: {
    type: string;
    item?: { id: number; text: string; done: boolean };
    targetId?: number;
  }
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.item];
    case REMOVE_TODO:
      return state.filter((elem, idx) => idx !== action.targetId);
    case TOGGLE_TODO:
      const targetIdx = state.findIndex((elem) => elem.id === action.targetId);
      if (!targetIdx) break;

      const newState = [...state];
      newState[targetIdx].done = true;

      return newState;
    default:
      return state;
  }
}

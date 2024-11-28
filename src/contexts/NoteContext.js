import React, { createContext, useReducer, useContext } from "react";

export const NoteContext = createContext();

// Initial state
const initialItems = [
  "Extract todo state to todo context",
  "Implement todo provider"
];

// Actions
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CLEAR_ALL = "CLEAR_ALL";

// Action creators
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function clearAll() {
  return { type: CLEAR_ALL };
}

// Reducer
export function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    case REMOVE_TODO:
      const copy = [...state];
      copy.splice(action.index, 1);
      return copy;
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
}

function TodoProvider(props) {
  const [items, dispatch] = useReducer(todoReducer, initialItems);

  const todoData = { items, dispatch };

  return <NoteContext.Provider value={todoData} {...props} />;
}

function useNoteNoteContext() {
  return useContext(NoteContext);
}

export { TodoProvider, useNoteNoteContext };

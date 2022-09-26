import { useCallback, useReducer } from "react";

import { computeCurrent, initialState, pop, push, reset, stackReducer } from "./reducer";


export default function useStack<T>() { // to-think: maybe first element of stack?

  const [state, dispatchState] = useReducer(stackReducer, initialState);

  const dispatchPop = useCallback(() => {
    dispatchState(pop());
  }, []);

  const dispatchPush = useCallback((newItem: T) => {
    dispatchState(push(newItem));
  }, []);

  const dispatchReset = useCallback(() => {
    dispatchState(reset());
  }, []);

  return {
    current: computeCurrent(state),
    list: state.list,
    pop: dispatchPop,
    push: dispatchPush,
    reset: dispatchReset
  };
}

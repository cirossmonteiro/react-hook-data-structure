import { useCallback, useReducer } from "react";

import { computeCurrent, initialState, next, push, reset, setArray, randomArrayReducer } from "./reducer";


export default function useRandomArray<T>() { // to-think: maybe first element of stack?

  const [state, dispatchState] = useReducer(randomArrayReducer, initialState);

  const dispatchNext = useCallback(() => {
    dispatchState(next());
  }, []);

  const dispatchPush = useCallback((newItem: T) => {
    dispatchState(push(newItem));
  }, []);

  const dispatchReset = useCallback(() => {
    dispatchState(reset());
  }, []);

  const dispatchSetArray = useCallback((arr: T[]) => {
    dispatchState(setArray(arr));
  }, []);

  return {
    current: computeCurrent(state),
    index: state.index,
    list: state.list,
    next: dispatchNext,
    push: dispatchPush,
    reset: dispatchReset,
    setArray: dispatchSetArray
  };
}

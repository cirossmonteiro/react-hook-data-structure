import { useCallback, useReducer } from "react";

import { circularQueueReducer, computeCurrent, initialState, next, pop, push, reset } from "./reducer";


export default function useCircularQueue<T>() { // to-think: parameter may be first element of queue?

  const [state, dispatchState] = useReducer(circularQueueReducer, initialState);

  const dispatchPop = useCallback(() => {
    dispatchState(pop());
  }, []);

  const dispatchPush = useCallback((newItem: T) => {
    dispatchState(push(newItem));
  }, []);

  const dispatchNext = useCallback(() => {
    dispatchState(next());
  }, []);

  const dispatchReset = useCallback(() => {
    dispatchState(reset());
  }, []);

  return {
    current: computeCurrent(state),
    index: state.index,
    list: state.list,
    next: dispatchNext,
    pop: dispatchPop,
    push: dispatchPush,
    reset: dispatchReset,
  };
}

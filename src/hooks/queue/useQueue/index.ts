import { useCallback, useReducer } from "react";

import { queueReducer, initialState, pop, push, reset, computeCurrent } from "./reducer";


export default function useQueue<T>() { // to-think: maybe first element of queue?

  const [state, dispatchState] = useReducer(queueReducer, initialState);

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

import { useCallback, useReducer } from "react";

import { doubleEndedQueueReducer, computeCurrent, initialState, next, popStart, popEnd, pushStart, pushEnd, reset } from "./reducer";


export default function useDoubleEndedQueue<T>() { // to-think: maybe first element of queue?

  const [state, dispatchState] = useReducer(doubleEndedQueueReducer, initialState);

  const dispatchPopStart = useCallback(() => {
    dispatchState(popStart());
  }, []);

  const dispatchPopEnd = useCallback(() => {
    dispatchState(popEnd());
  }, []);

  const dispatchPushStart = useCallback((newItem: T) => {
    dispatchState(pushStart(newItem));
  }, []);

  const dispatchPushEnd = useCallback((newItem: T) => {
    dispatchState(pushEnd(newItem));
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
    popStart: dispatchPopStart,
    pushStart: dispatchPushStart,
    popEnd: dispatchPopEnd,
    pushEnd: dispatchPushEnd,
    reset: dispatchReset
  };
}

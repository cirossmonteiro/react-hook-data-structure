export interface IState<T> {
  index: number;
  list: T[];
}

// to-think: any
export const initialState: IState<any> = {
  index: -1,
  list: []
}

const ACTIONS = {
  NEXT: 'next',
  POP: 'pop',
  PUSH: 'push',
  RESET: 'reset'
}

export const pop = () => ({
  type: ACTIONS.POP
})

export const push = <T>(newItem: T) => ({
  type: ACTIONS.PUSH,
  payload: newItem
});

export const next = () => ({
  type: ACTIONS.NEXT
});

export const reset = () => ({
  type: ACTIONS.RESET
})

export const computeCurrent = <T>(state: IState<T>) =>
  state.list.length === 0 ? null : state.list[state.index];

export const circularQueueReducer = <T>(state: IState<T>, action: any) => {
  const { index, list } = state;
  switch(action.type) {

    case ACTIONS.POP:
      if (list.length === 1) {
        state = {
          ...initialState
        };
      } else if (list.length === 0) {
        console.error('useCircularQueue error: array\'s already empty.');
      } else {
        state = {
          ...state,
          index: (index === (list.length - 1)) ? index - 1 : index,
          list: list.filter((_, eIndex) => eIndex !== index)
        };
      }
      break;

    case ACTIONS.PUSH:
      state = {
        ...state,
        index: index === -1 ? 0 : index,
        list: [ ...list, action.payload ]
      };
      break;

    case ACTIONS.NEXT:
      if (list.length === 0) {
        console.error('useCircularQueue error: array\'s still empty.');
      } else {
        state = {
          ...state,
          index: index === list.length - 1 ? 0 : index + 1
        };
      }
      break;

    case ACTIONS.RESET:
      state = {
        ...initialState
      };
      break;
    
    default:
      state = {
        ...state
      };
      break;
  }
  return state;
}
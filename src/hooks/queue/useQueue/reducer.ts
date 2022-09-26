export interface IState<T> {
  list: T[];
}

export const initialState: IState<any> = {
  list: []
}

const ACTIONS = {
  PUSH: 'push',
  POP: 'pop',
  RESET: 'reset'
};

export const pop = () => ({
  type: ACTIONS.POP
});

export const push = <T>(newItem: T) => ({
  type: ACTIONS.PUSH,
  payload: newItem
});

export const reset = () => ({
  type: ACTIONS.RESET
});

export const computeCurrent = <T>(state: IState<T>) => 
  state.list.length === 0 ? null : state.list[0];

export const queueReducer = <T>(state: IState<T>, action: any) => {
  const { list } = state;
  switch(action.type) {

    case ACTIONS.POP:
      if (list.length === 1) {
        state = {
          ...initialState
        };
      } else if (list.length === 0) {
        console.error('useQueue error: array\'s already empty.');
      } else {
        state = {
          ...state,
          list: list.filter((_, index) => index !== 0)
        };
      }
      break;

    case ACTIONS.PUSH:
      state = {
        ...state,
        list: [ ...list, action.payload ]
      };
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
const ACTIONS = {
  NEXT: 'next',
  PUSH: 'push',
  RESET: 'reset',
  SET_ARRAY: 'set_array'
}

export interface IState<T> {
  index: number;
  list: T[];
}

export const initialState: IState<any> = {
  index: -1,
  list: []
}

export const next = () => ({
  type: ACTIONS.NEXT
});

export const push = <T>(newItem: T) => ({
  type: ACTIONS.PUSH,
  payload: newItem
})

export const reset = () => ({
  type: ACTIONS.RESET
});

export const setArray = <T>(arr: T[]) => ({
  type: ACTIONS.SET_ARRAY,
  payload: arr
})

export const computeCurrent = <T>(state: IState<T>) =>
  state.list.length === 0 ? null : state.list[state.index];

export const randomIndex = (size: number) => Math.floor(Math.random() * size);

export const randomArrayReducer = <T>(state: IState<T>, action: any) => {
  const { list } = state;
  switch(action.type) {

    case ACTIONS.NEXT:
      state = {
        ...state,
        index: randomIndex(list.length)
      };
      break;

    case ACTIONS.PUSH:
      state = {
        ...state,
        list: [ ...list, action.payload ]
      };
      break;
    
    case ACTIONS.SET_ARRAY:
      state = {
        ...state,
        list: action.payload,
        index: randomIndex(list.length)
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
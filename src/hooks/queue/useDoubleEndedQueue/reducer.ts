type OneOrMinusOne = -1 | 1;

export interface IState<T> {
  index: number;
  list: T[];
  direction: OneOrMinusOne;
}

export const initialState: IState<any> = {
  index: -1,
  list: [],
  direction: 1
}

const ACTIONS = {
  PREVIOUS: 'previous',
  NEXT: 'next',
  POP_START: 'pop_start',
  POP_END: 'pop_end',
  PUSH_START: 'push_start',
  PUSH_END: 'push_end',
  RESET: 'reset'
}

export const popStart = () => ({
  type: ACTIONS.POP_START
})

export const popEnd = () => ({
  type: ACTIONS.POP_END
})

export const pushStart = <T>(newItem: T) => ({
  type: ACTIONS.PUSH_START,
  payload: newItem
});

export const pushEnd = <T>(newItem: T) => ({
  type: ACTIONS.PUSH_END,
  payload: newItem 
});

export const next = () => ({
  type: ACTIONS.NEXT
})

export const reset = () => ({
  type: ACTIONS.RESET
})

// let dir: (-1 | 1) = 1;
// dir *= -1;
// dir *= -2;
// dir = dir * -1;

// const temp: -1 | 1 = 1;
// dir *= temp;
// dir = dir * temp;

export const computeCurrent = <T>(state: IState<T>) =>
  state.list.length === 0 ? null : state.list[state.index];

export const doubleEndedQueueReducer = <T>(state: IState<T>, action: any) => {
  const { direction, index, list } = state;
  switch(action.type) {

    case ACTIONS.POP_START:
      if (list.length === 1) {
        state = {
          ...initialState
        };
      } else if (list.length === 0) {
        console.error('useDoubleEndedQueue error: array\'s already empty.');
      } else {
        state = {
          ...state,
          index: (index === 0) ? 0 : index - 1,
          list: list.filter((_, eIndex) => eIndex !== 0)
        };
      }
      break;

      case ACTIONS.POP_END:
        if (list.length === 1) {
          state = {
            ...initialState
          };
        } else if (list.length === 0) {
          console.error('useDoubleEndedQueue error: array\'s already empty.');
        } else {
          state = {
            ...state,
            index: (index === (list.length - 1)) ? index - 1 : index,
            list: list.filter((_, eIndex) => eIndex !== list.length-1)
          };
        }
        break;

    case ACTIONS.PUSH_START:
      state = {
        ...state,
        index: index + 1,
        direction: (index === list.length-1 ? -1 : 1),
        list: [ action.payload, ...list ]
      };
      break;

    case ACTIONS.PUSH_END:
      state = {
        ...state,
        index: list.length === 0 ? 0 : index,
        direction: (index === 0 ? 1 : -1),
        list: [ ...list, action.payload ]
      };
      break;

    case ACTIONS.NEXT:
      if (list.length === 0) {
        console.error('useDoubleEndedQueue error: array\'s still empty.');
      } else if(list.length > 1) {
        const newIndex = index + direction;
        const newDirection = ([0, list.length-1].includes(newIndex)) ? -direction : direction;
        state = {
          ...state,
          direction: newDirection as OneOrMinusOne,
          index: newIndex
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
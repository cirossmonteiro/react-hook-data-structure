import { initialState, pop, push, stackReducer } from "./reducer";


test('Reducer: stack', () => {
  let stack = stackReducer<number>(initialState, push(1));
  expect(stack).toEqual({ list: [1] });
  stack = stackReducer(stack, push(2));
  expect(stack).toEqual({ list: [1, 2] });
  stack = stackReducer(stack, pop());
  expect(stack).toEqual({ list: [1] });
  stack = stackReducer(stack, pop());
  expect(stack).toEqual({ list: [] });
})
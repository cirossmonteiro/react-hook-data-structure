import { initialState, pop, push, queueReducer } from "./reducer";


test('Reducer: queue', () => {
  let queue = queueReducer<number>(initialState, push(1));
  expect(queue).toEqual({ list: [1] });
  queue = queueReducer(queue, push(2));
  expect(queue).toEqual({ list: [1, 2] });
  queue = queueReducer(queue, pop());
  expect(queue).toEqual({ list: [2] });
  queue = queueReducer(queue, pop());
  expect(queue).toEqual({ list: [] });
})
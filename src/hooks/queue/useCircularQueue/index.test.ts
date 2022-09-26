import { circularQueueReducer, initialState, next, pop, push } from "./reducer";


test('Reducer: circularQueue', () => {
  let queue = circularQueueReducer<number>(initialState, push(1));
  expect(queue).toEqual({ index: 0, list: [1] });
  queue = circularQueueReducer(queue, push(2));
  expect(queue).toEqual({ index: 0, list: [1,2] });
  queue = circularQueueReducer(queue, next());
  expect(queue).toEqual({ index: 1, list: [1,2] });
  queue = circularQueueReducer(queue, next());
  expect(queue).toEqual({ index: 0, list: [1,2] });
  queue = circularQueueReducer(queue, pop());
  expect(queue).toEqual({ index: 0, list: [2] });
  queue = circularQueueReducer(queue, next());
  expect(queue).toEqual({ index: 0, list: [2] });
  queue = circularQueueReducer(queue, pop());
  expect(queue).toEqual({ index: -1, list: [] });
})
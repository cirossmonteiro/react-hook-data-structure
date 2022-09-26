import { doubleEndedQueueReducer, initialState, next, popStart, popEnd, pushStart, pushEnd } from "./reducer";


test('Reducer: doubleEndedQueue', () => {
  let queue = doubleEndedQueueReducer<number>(initialState, pushEnd(1));
  expect(queue).toEqual({ index: 0, direction: -1, list: [1] });
  queue = doubleEndedQueueReducer(queue, pushEnd(2));
  expect(queue).toEqual({ index: 0, direction: 1, list: [1,2] });
  queue = doubleEndedQueueReducer(queue, next());
  expect(queue).toEqual({ index: 1, direction: -1, list: [1,2] });
  queue = doubleEndedQueueReducer(queue, next());
  expect(queue).toEqual({ index: 0, direction: 1, list: [1,2] });
  queue = doubleEndedQueueReducer(queue, pushStart(3));
  expect(queue).toEqual({ index: 1, direction: 1, list: [3,1,2] });
  queue = doubleEndedQueueReducer(queue, next());
  expect(queue).toEqual({ index: 2, direction: -1, list: [3,1,2] });
  queue = doubleEndedQueueReducer(queue, next());
  expect(queue).toEqual({ index: 1, direction: -1, list: [3,1,2] });
  queue = doubleEndedQueueReducer(queue, next());
  expect(queue).toEqual({ index: 0, direction: 1, list: [3,1,2] });
  queue = doubleEndedQueueReducer(queue, popEnd());
  expect(queue).toEqual({ index: 0, direction: 1, list: [3,1] });
  queue = doubleEndedQueueReducer(queue, next());
  expect(queue).toEqual({ index: 1, direction: -1, list: [3,1] });
  queue = doubleEndedQueueReducer(queue, popStart());
  expect(queue).toEqual({ index: 0, direction: -1, list: [1] });
  queue = doubleEndedQueueReducer(queue, popEnd()); 
  expect(queue).toEqual({ index: -1, direction: 1, list: [] }); 
})
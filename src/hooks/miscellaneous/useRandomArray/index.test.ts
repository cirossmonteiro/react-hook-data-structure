import { computeCurrent, initialState, next, randomArrayReducer, setArray } from "./reducer";

const SIZE = 10;

test('Reducer: randomArray', () => {
  const example = [];
  for(let i = 0; i < SIZE; i++) {
    example.push(i);
  }

  let main = randomArrayReducer<number>(initialState, setArray(example));
  for(let i = 0; i < SIZE; i++) {
    expect(main.list).toContain(i);
    expect(computeCurrent(main)).toBeGreaterThanOrEqual(0);
    expect(computeCurrent(main)).toBeLessThanOrEqual(SIZE-1);
    main = randomArrayReducer(main, next());
  }
})
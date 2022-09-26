# Hooks

```
const { ...values, ...methods } = useHook<T>();
```

`useCircularQueue<T>` - [Full example](https://github.com/cirossmonteiro/react-hook-data-structure/blob/main/src/hooks/queue/useCircularQueue/example/index.tsx)

Return object:

- `current`: element to be used
- `index`: position of current element in array
- `list`: array used to store values (should be avoided in scenarios where you don't need to access all values at once)
- `next`: update the element to be used
- `pop`: remove current element from array
- `push`: add new element to array
- `reset`: remove all elements from array

<br>

`useDoubleEndedQueue<T>` - [Full example](https://github.com/cirossmonteiro/react-hook-data-structure/blob/main/src/hooks/queue/useDoubleEndedQueue/example/index.tsx)

Return object:

- `current`: element to be used
- `index`: position of current element in array
- `list`: array used to store values (should be avoided in scenarios where you don't need to access all values at once)
- `next`: update the element to be used
- `popStart`: remove first element of array
- `popEnd`: remove last element of array
- `pushStart`: add new element to array at start
- `pushEnd`: add new element to array at end
- `reset`: remove all elements from array

<br>

`useQueue<T>` - [Full example](https://github.com/cirossmonteiro/react-hook-data-structure/blob/main/src/hooks/queue/useQueue/example/index.tsx)

Return object:

- `current`: element to be used - at the start of list
- `list`: array used to store values (should be avoided in scenarios where you don't need to access all values at once)
- `pop`: remove current element from array
- `push`: add new element to array
- `reset`: remove all elements from array

<br>

`useStack<T>` - [Full example](https://github.com/cirossmonteiro/react-hook-data-structure/blob/main/src/hooks/stack/useStack/example/index.tsx)

Return object (just like `useQueue`):

- `current`: element to be used - at the end of list
- `list`: array used to store values (should be avoided in scenarios where you don't need to access all values at once)
- `pop`: remove current element from array
- `push`: add new element to end array
- `reset`: remove all elements from array

<br>

`useRandomArray<T>` - [Full example](https://github.com/cirossmonteiro/react-hook-data-structure/blob/main/src/hooks/miscellaneous/useRandomArray/example/index.tsx)

Return object (just like `useQueue`):

- `current`: element to be used
- `index`: position (a random one) of current element in array
- `list`: array used to store values (should be avoided in scenarios where you don't need to access all values at once)
- `next`: update the element to be used
- `push`: add new element to array at end
- `reset`: remove all elements from array,
- `setArray`: set a new array
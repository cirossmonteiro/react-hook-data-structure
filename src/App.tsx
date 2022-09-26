import './App.css';
// import RandomArray from './hooks/miscellaneous/useRandomArray/example'; // to-do
import CircularQueue from './hooks/queue/useCircularQueue/example';
import DoubleEndedQueue from './hooks/queue/useDoubleEndedQueue/example';
import Queue from './hooks/queue/useQueue/example';
import Stack from './hooks/stack/useStack/example';


const App = () => {
  return (
    <div className="App-container">
      <b className="mb">React Hook Data Structure</b>
      <div>
        <i>Suggestion: you can start by clicking 5 times in buttons named 'push' for each box.</i>
        <div className="row">
          <CircularQueue />
          <DoubleEndedQueue />
          <Queue />
          <Stack />
          {/* to-do: <RandomArray /> */}
        </div>
      </div>
    </div>
  );
}

export default App;

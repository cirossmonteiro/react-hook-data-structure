import { useState } from "react";
import useCircularQueue from "..";

const INITIAL_VALUE = 1;

const Example = () => {
  const {
    current,
    index,
    list,
    next,
    pop,
    push,
    reset,
  } = useCircularQueue<number>();

  const [value, setValue] = useState<number>(INITIAL_VALUE);

  return (
    <div className="example-main">

      <b>useCircularQueue{'<T>'}</b>

      <div className="info">
        <label><span>current value:</span>
          <input value={(current as number) || ''} readOnly />
        </label>
        <label><span>current index:</span>
          <input value={(index as number) || '0'} readOnly />
        </label>
        <label><span>current size:</span>
          <input value={list.length} readOnly />
        </label>
        <div>
          <button className="w-55" onClick={() => {
            reset();
            setValue(INITIAL_VALUE);
          }}>reset</button>
          <button className="w-55" onClick={pop}>pop</button>
          <button className="w-55" onClick={next}>next</button>
          <button className="w-55 highlight" onClick={() => {
            push(value);
            setValue(i => i+1);
          }}>push</button>
          <input value={value} onChange={e => setValue(Number(e.target.value))} />
        </div>
      </div>
      
      <div className="example-list">
        {list.map((v, i) => <div key={`${v}_${i}`} className={`box-${i === index}`}>{v as number}</div>)}
      </div>
    </div>
  );
}

export default Example;

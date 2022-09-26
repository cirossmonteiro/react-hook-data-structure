import { useState } from "react";

import useDoubleEndedQueue from "..";


const INITIAL_VALUE = 1;

const Example = () => {
  const {
    current,
    index,
    list,
    next,
    popStart,
    pushStart,
    popEnd,
    pushEnd,
    reset
  } = useDoubleEndedQueue<number>();

  const [value, setValue] = useState<number>(INITIAL_VALUE);

  return (
    <div className="example-main">

      <b>useDoubleEndedQueue{'<T>'}</b>

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
        <div className="mb">
          <button className="w-55" onClick={() => {
            reset();
            setValue(INITIAL_VALUE);
          }}>reset</button>
          <button className="w-100" onClick={popStart}>pop at start</button>
          <button className="w-100" onClick={popEnd}>pop at end</button>
        </div>
        <div>
          <button className="w-55" onClick={next}>next</button>
          <button className="w-100 highlight" onClick={() => {
            pushStart(value);
            setValue(i => i+1);
          }}>push at start</button>
          <button className="w-100" onClick={() => {
            pushEnd(value);
            setValue(i => i+1);
          }}>push at end</button>
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

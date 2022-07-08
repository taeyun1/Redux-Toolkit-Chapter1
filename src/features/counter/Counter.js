import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  deincrement,
  reset,
  incrementByAmount,
} from "./counterSlice";

function Counter() {
  const count = useSelector(({ counter }) => counter.count);
  const dispatch = useDispatch();

  const [addCount, setAddCount] = useState(0);

  const addValue = Number(addCount) || 0;

  const resetAll = () => {
    setAddCount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(deincrement())}>-</button>
      </div>

      {/* 입력한 값대로 증가 시키기 */}
      <input
        type="text"
        value={addCount}
        onChange={(e) => setAddCount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          {addCount}만큼 추가
        </button>
        <button onClick={resetAll}>리셋</button>
      </div>
    </section>
  );
}

export default Counter;

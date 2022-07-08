import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  deincrement,
  reset,
  incrementByAmount,
} from "./counterSlice";

function Counter() {
  // 화면에 출력할 count
  const count = useSelector(({ counter }) => counter.count);
  const dispatch = useDispatch();

  // 인풋값 설정
  const [addCount, setAddCount] = useState(0);

  // addCount가 숫자가 아니면 0으로 설정, 숫자면 해당 숫자 할당
  const addValue = Number(addCount) || 0;

  // 0으로 리셋, addCount를 0으로 만들고, reset()을 호출시켜 {count}도 0으로 리셋
  const resetAll = () => {
    setAddCount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        {/* increment를 호출하여 1증가 */}
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

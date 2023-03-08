import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementBy } from "./counterSlice";

const Counter = () => {
  const [counteby, setCounteby] = useState(0)
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch()

  const addValue = Number(counteby) || 0;
  const resetAll = () => {
    setCounteby(0)
    dispatch(reset())
  }
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input type="text" value={counteby}
        onChange={(e)=> setCounteby(+e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(resetAll)}>reset</button>
        <button onClick={() => dispatch(incrementBy(addValue))}>incrementBy</button>
      </div>
    </section>
  )
};

export default Counter;

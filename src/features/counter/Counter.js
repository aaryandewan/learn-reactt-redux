import { useSelector, useDispatch } from "react-redux";

import { selectCount, increment } from "./counterSlice";
export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello {count}</h1>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button>Dec</button>
    </>
  );
}

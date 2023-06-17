import { useSelector, useDispatch } from "react-redux";

import { selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

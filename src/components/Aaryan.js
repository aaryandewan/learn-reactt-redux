import { useSelector } from "react-redux";

import { selectCount } from "../features/counter/counterSlice";

export default function Aaryan() {
  const aaryanCounter = useSelector(selectCount);
  return <h1>Count is eual to {aaryanCounter}</h1>;
}

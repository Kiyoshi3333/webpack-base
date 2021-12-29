import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  ReactPropTypes,
} from "react";
type GameProps<T> = {
  color: T;
  children?: React.ReactNode;
};
const Game = (props: GameProps<string>): JSX.Element | null => {
  const countRef = useRef(0);
  const [count, setCount] = useState<number>(0);
  let int = 0;
  useEffect(() => {
    setInterval(() => {
      int++;
      setCount(int);
    }, 5000);
  }, []);
  const threshold = 1000;
  return count > threshold ? (
    <>
      <div>{count}</div>
    </>
  ) : null;
};

export default Game;

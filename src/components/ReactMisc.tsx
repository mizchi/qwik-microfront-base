/** @jsxImportSource react */
import { useCallback, useState } from "react";

export function Counter(props: {
  other: number;
}) {
  const [counter, setCounter] = useState(0);
  const onClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <button type="button" onClick={onClick}>
      {counter} : {props.other + counter}
    </button>
  );
}

export function MyButton(props: {
  onClick: () => void;
  children?: React.ReactNode;
}) {
  // const [counter, setCounter] = useState(0);
  const onClick = useCallback(() => {
    console.log("react:clicked");
    props.onClick();
  }, []);

  return (
    <button type="button" onClick={onClick}>
      InnerReact
      {
        props.children
      }
    </button>
  );
}
/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";

function Counter(props: {
  other: number;
}) {
  const [counter, setCounter] = useState(0);
  return <div>
    <button type="button" onClick={() => setCounter(counter + 1)}>
      {counter} : {props.other + counter}
    </button>
  </div>
}

type Props = {
  parentCounter: number;
}

export const ReactApp = qwikify$((props: Props) => {
  console.log("hydrate react");
  return <div>
    Hello React
    <Counter other={props.parentCounter} />
  </div>
}, {
  eagerness: "hover"
});


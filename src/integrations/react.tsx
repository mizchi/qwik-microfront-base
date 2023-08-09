/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";

export const ReactApp = qwikify$(() => {
  const [counter, setCounter] = useState(0);
  return <div>Hello React
    <button type="button" onClick={() => setCounter(counter + 1)}>
      {counter}
    </button>
  </div>
}, {
  eagerness: "hover"
});


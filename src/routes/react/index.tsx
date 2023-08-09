import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ReactApp } from "../../integrations/react";

export default component$(() => {
  const counter = useSignal(0);
  return (
    <>
      <h1>React Demo</h1>
      <button type="button" onClick$={() => counter.value += 1}>
        qwik-side-counter: {counter.value}
      </button>
      <ReactApp parentCounter={counter.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

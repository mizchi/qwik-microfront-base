import { component$, useSignal, $, useVisibleTask$, qrl } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

const EagerButton = component$(() => {
  const aHref = useSignal<Element>();
  useVisibleTask$(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      console.log("eager click");
    };
    aHref.value!.addEventListener('click', handler);
    return () => aHref.value!.removeEventListener('click', handler);
  });

  return (
    <button type="button" ref={aHref}>
      Eager button
    </button>
  );
});

export default component$(() => {
  const count = useSignal(0);
  const handler = $(() => console.log("hello!"));
  useVisibleTask$(() => {
    console.log("visible", handler);
    // debugger;
    handler();
    return () => {
      console.log("invisible");
    };
  });
  return (
    <>
      <div>
        <h1>Welcome to Qwik</h1>
        <div>counter {count.value}</div>
        <button type="button" onClick$={() => {
          count.value++;
        }}>+1</button>
        <button type="button" onClick$={() => {
          count.value--;
        }}>-1</button>
        <button type="button" onClick$={handler}>Click Me</button>
        <div>
          <EagerButton />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

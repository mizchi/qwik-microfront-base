import { component$, useSignal, $ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { qwikifySvelte$ } from "../../qwik-svelte/qwikify";
// @ts-ignore
// import App from "../../svelte/App.svelte";

// const QApp: any = qwikifySvelte$(App as any, { eagerness: "hover" });
export default component$(() => {
  return (
    <>
      <p>Sv Demo</p>
      {/* <QApp name="from-ssr" /> */}
      {/* <hr />
      <p>Client Only</p>
      <QApp client:only name="from-ssr" /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

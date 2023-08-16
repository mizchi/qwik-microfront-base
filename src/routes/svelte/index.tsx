import { component$, useSignal, $ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";

import { qwikifySvelte$ } from "@mizchi/qwik-svelte";

import App from "../../components/App.svelte";

const QApp: any = qwikifySvelte$(App as any, { eagerness: "hover" });

export default component$(() => {
  return (
    <>
      <p>Sv Demo</p>
      <QApp name="from-ssr" client:load />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

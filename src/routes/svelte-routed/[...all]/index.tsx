import { component$, useSignal, $} from "@builder.io/qwik";
import { useNavigate, type DocumentHead, useLocation } from "@builder.io/qwik-city";

import { qwikifySvelte$ } from "@mizchi/qwik-svelte";

// @ts-ignore
import SvelteRouterApp from "../../../components/SvelteRouterApp.svelte";

const QApp: any = qwikifySvelte$(SvelteRouterApp as any, { eagerness: "hover" });

export default component$(() => {
  const loc = useLocation();
  return (
    <>
      <p>Svelte router</p>
      <QApp base="/svelte-routed/" path={loc.url.pathname} client:load />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

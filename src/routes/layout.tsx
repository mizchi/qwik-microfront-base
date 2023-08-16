import { component$, Slot } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
// import styles from "./styles.css?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <header>
        <div>
          <h1>Qwik City - Microfront Base</h1>
        </div>
        <div>
          Qwik -
          <Link href="/">Home</Link>
          |
          <Link href="/with-server">With Server</Link>
          |
          <Link href="/dyn/xxx">/dyn/xxx</Link>
          |
          <Link href="/dyn/yyy">/dyn/yyy</Link>
        </div>
        <div>
          React -
          <Link href="/react/">/react</Link>
          |
          <Link href="/react-routed/">/react-routed</Link>
        </div>
        <div>
          Vue -
          <Link href="/vue">/vue</Link>
          |
          <Link href="/vue-routed/">/vue-routed</Link>
        </div>
        <div>
          Svelte -
          <Link href="/svelte/">/svelte</Link>
          |
          <Link href="/svelte-routed/">/svelte-routed</Link>
        </div>
      </header>
      <hr />
      <main>
        <Slot />
      </main>
    </>
  );
});

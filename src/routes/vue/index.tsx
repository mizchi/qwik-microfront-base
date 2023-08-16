import { component$, useSignal } from "@builder.io/qwik";
// @ts-ignore
import App from "../../components/VueApp.vue";
import { qwikifyVue$ } from "@mizchi/qwik-vue";
const QApp = qwikifyVue$<{counter: number}>(App);
export default component$(() => {
  const counter = useSignal(1);
  return <>
    <button onClick$={() => counter.value++}>{counter.value}</button>
    <QApp counter={counter.value} client:load />
  </>;
});

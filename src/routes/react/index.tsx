import { component$, useSignal, $ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { Counter, MyButton } from "../../components/ReactMisc";
import { qwikify$ } from "@builder.io/qwik-react";

const QCounter = qwikify$(Counter, { eagerness: "hover" });
const QButton = qwikify$(MyButton, {eagerness: "hover"});
// const QAppRoot = qwikify$(AppRoot, {eagerness: "hover"});

export default component$(() => {
  const navigate = useNavigate();
  const onNavigate = $((href: string) => {
    console.log("react:navigate", href);
    navigate(href);
  });
  const counter = useSignal(1);
  return (
    <>
      <button type="button" onClick$={() => counter.value += 1}>
        qwik-side-counter: {counter.value}
      </button>

      <QCounter other={counter.value} client:load/>
      <QButton onClick$={() => {
        counter.value += 1;
        navigate("/");
      }}>
        children from qwik
      </QButton>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

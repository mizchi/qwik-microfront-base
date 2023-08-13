import { component$, useSignal } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { Counter, MyButton } from "../../integrations/react";
import { qwikify$ } from "@builder.io/qwik-react";
import { qwikify$ as myqwikify } from "../../myqwikify/qwikify";

const QCounter = qwikify$(Counter, { eagerness: "hover" });
const QButton = qwikify$(MyButton, {eagerness: "hover"});

export default component$(() => {
  const counter = useSignal(0);
  const navigate = useNavigate();
  return (
    <>
      <h1>React Demo</h1>
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

      <div>
        <hr />
        <a href="/">Root</a>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ReactApp } from "../../integrations/react";

export default component$(() => {
  return (
    <>
      <h1>Qwik/React mother of all demos</h1>
      <ReactApp />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

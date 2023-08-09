import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const x = useLocation().params.id
  return (
    <>
      <div>
        Param: {x}
      </div>
    </>
  );
});
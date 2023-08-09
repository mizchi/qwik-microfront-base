import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import z from "zod";
// import { InitialValues } from '@modular-forms/qwik';

// const formSchema = z.object({
//   email: z.string().nonempty(),
//   password: z.string().min(8),
// });

// Note: you can also use z.input 
// since Zod supports data transformation.
// type LoginForm = z.infer<typeof formSchema>;

// export const useLoginForm = routeLoader$<LoginForm>(() => {
//   return {
//     email: "",
//     password: "",
//   };
// });

export default component$(() => {
  return (
    <form>

    </form>
  );
});

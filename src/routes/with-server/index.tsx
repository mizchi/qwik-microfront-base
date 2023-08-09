import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from '@builder.io/qwik-city';
// import ts from "typescript";

const maybeSecretKey = "tesoanhusntoeadiotasdioatsedueo";
export const useServerData = routeLoader$(async (requestEvent) => {
  const code = `export const x: number = 1`;
  // const transpiled = ts.transpileModule(code, {
  //   compilerOptions: {
  //     module: ts.ModuleKind.ESNext,
  //     target: ts.ScriptTarget.ESNext,
  //   },
  // });
  return {
    size: maybeSecretKey.length,
    // code: transpiled.outputText,
  }
});

export default component$(() => {
  const data = useServerData();
  return (
    <div>
      <h1>Server Data</h1>
      <p>Size: {data.value.size}</p>
      {/* <pre>{data.value.code}</pre> */}
    </div>
  );
})

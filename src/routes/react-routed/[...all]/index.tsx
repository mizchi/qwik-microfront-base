import { component$, $ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead, useLocation } from "@builder.io/qwik-city";
import { RouterApp } from "../../../components/ReactRouterApp";
import { qwikify$ } from "@builder.io/qwik-react";

const QRouterApp = qwikify$(RouterApp, { eagerness: "load" });

const basename = "react-routed";

export default component$(() => {
  const navigate = useNavigate();
  const onNavigate = $((href: string) => {
    console.log("react:navigate", href);
    navigate(href);
  });
  const loc = useLocation();
  return (
    <>
      <p>React Routed</p>
      <QRouterApp basename={basename} path={loc.url.pathname} onNavigate$={onNavigate} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

import { component$, $ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead, useLocation } from "@builder.io/qwik-city";
// @ts-ignore
import VueRouterApp from "../../../components/VueRouterApp.vue";
import { qwikifyVueRouter$ } from "../../../integrations/vue";
import { h } from "vue";

const QRouterApp = qwikifyVueRouter$({
  component: VueRouterApp,
  basename: "/vue-routed",
  routes: [
    {
      path: "/",
      component: {
        render() {
          return h("div", "Home")
        }
      },
    },
    {
      path: "/user",
      component: {
        render() {
          return h("div", "User")
        }
      },
    },
  ]
}, { eagerness: "load" });

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
      <p>Vue Routed</p>
      <QRouterApp basename={basename} path={loc.url.pathname} onNavigate$={onNavigate} client:only />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Vue",
};

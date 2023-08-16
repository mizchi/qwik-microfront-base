/** @jsxImportSource react */
import { isServer } from "@builder.io/qwik/build";
import { createContext, useCallback, useContext } from "react";
import { BrowserRouter, Link as ReactRouterLink, Route, Routes, json } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";

const QwikContext = createContext<{
  navigate: (href: string) => void;
}>(null as any);

export function QwikLink(props: {
  href: string,
  children?: React.ReactNode;
}) {
  const { navigate } = useContext(QwikContext);
  const onClick = useCallback((ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    ev.preventDefault();
    navigate(props.href);
  }, [navigate, props.href]);
  return <a href={props.href} onClick={onClick}>
    {props.children}
  </a>
}

export const RouterApp = (props: { basename: string, path: string, onNavigate: (to: string) => void }) => {
  if (isServer) {
    return <QwikContext.Provider value={{ navigate: props.onNavigate}}>
      <StaticRouter basename={props.basename} location={props.path}>
        <_RouterApp />
      </StaticRouter>
    </QwikContext.Provider>
  }
  return (
    <QwikContext.Provider value={{ navigate: props.onNavigate }}>
      <BrowserRouter basename={props.basename}>
        <_RouterApp />
      </BrowserRouter>
    </QwikContext.Provider>
  );
};

const _RouterApp = () => {
  return <>
    <h1>React Router App</h1>
    <nav>
      <ReactRouterLink to="/">Home</ReactRouterLink>
      |
      <ReactRouterLink to="/user">User</ReactRouterLink>
      |
      <QwikLink href="/">Qwik Home</QwikLink>
    </nav>
    <hr />
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route
        path="user"
        loader={async () => {
          await new Promise((resolve) => setTimeout(resolve, 300));
          return json({ message: "UserData" });
        }}
        element={<User />}
      />
    </Routes>
  </>
}

function Home() {
  return <div>Home</div>
}

function User() {
  return <div>User</div>
}


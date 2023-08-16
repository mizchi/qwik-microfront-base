<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  export let path: string;
  export let base: string;
</script>

<h1>Svelte router</h1>

<Router basepath={base} url={path}>
  <nav>
    <Link to="{base}">Home</Link>
    <Link to="{base}user">User</Link>
  </nav>
  <Route path="/">
    <p>Home</p>
  </Route>
  <Route path="/user">
    <p>User</p>
  </Route>
</Router>

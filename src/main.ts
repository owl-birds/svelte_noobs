import "./app.css";
import App from "./App.svelte"; // error here, idk if its is vscode or not
// but after adding file svelte.d.ts and fill it with
// below, the error go away, IDK
/*
// inside ./src/svelte.d.ts
declare module "*.svelte";
 */

// idk error in importing app, something somethin
// https://github.com/sveltejs/language-tools/issues/1556

const app = new App({
  target: document.getElementById("app"),
});

export default app;

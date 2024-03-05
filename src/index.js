import { createRoot } from "react-dom/client";
import { createElement } from "react";
import App from "./App";

new EventSource("/esbuild").addEventListener("change", () => location.reload());

const root = createRoot(document.getElementById("app"));

root.render(createElement(App));

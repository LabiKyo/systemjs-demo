import React from "react";

console.log("Plugin.jsx");
System.import("./pluginA.bundle.js").then(module => {
  console.log({ module });
  module.default();
});
export default function Plugin() {
  return <h2>Plugin</h2>;
}

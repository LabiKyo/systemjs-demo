console.log("hello from plugin A");

const pluginConfig = [
  {
    id: "pluginA",
    onload: () => import("./anotherFile")
  }
];
if (!window.plugins) {
  window.plugins = [];
}

window.plugins.push(pluginConfig);

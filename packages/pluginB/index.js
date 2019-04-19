console.log("hello from plugin B");

const pluginConfig = [
  {
    id: "pluginB",
    onload: () => import("./anotherFile")
  }
];
if (!window.plugins) {
  window.plugins = [];
}

window.plugins.push(pluginConfig);

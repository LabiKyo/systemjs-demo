console.log("hello from plugin A");

export default async function pluginA() {
  console.log("running pluginA");
  anotherFunc = await import("./anotherFile");
  anotherFunc();
}

pluginA();

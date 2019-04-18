console.log("hello from plugin A");
import anotherFunction from "./anotherFile";

export default function pluginA() {
  console.log("running pluginA");
  anotherFunction();
}

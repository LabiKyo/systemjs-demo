console.log("hello from plugin B");
import anotherFunction from "./anotherFile";

export default function pluginB() {
  console.log("running pluginB");
  anotherFunction();
}

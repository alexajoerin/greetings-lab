import { Greeter } from "./Greeter";

export default class JavaScriptGreeter extends Greeter {
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string): string {
    return `console.log("${super.greet(name)}")`;
  }
}

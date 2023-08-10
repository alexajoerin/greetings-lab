import { Greeter } from "./Greeter";

export default class LoudGreeter extends Greeter {
  private extra: string = "!";
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
  addVolume(): void {
    this.extra += "!";
  }
}

import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test(`the greeting property is set by the constructor`, () => {
    const greeter: Greeter = new Greeter("What's up");
    expect(greeter.greeting).toBe("What's up");
  });
  test(`the greet method with (What's up, Mitch) yields the string "What's up, Mitch!"`, () => {
    const greeter: Greeter = new Greeter("What's up");
    expect(greeter.greet("Mitch")).toBe("What's up, Mitch!");
  });
});

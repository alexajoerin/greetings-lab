import JavaScriptGreeter from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test(`the greeting property is set by the constructor`, () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "What's up"
    );
    expect(javaScriptGreeter.greeting).toBe("What's up");
  });
  test(`the greet method with (What's up, Mitch) yields the string "console.log("What's up, Mitch!")"`, () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "What's up"
    );
    expect(javaScriptGreeter.greet("Mitch")).toBe(
      `console.log("What's up, Mitch!")`
    );
  });
  test(`the javaScriptGreeter class overrides the greet method to yield the string "console.log("Howdy, Alexa!")`, () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Howdy");
    expect(javaScriptGreeter.greet("Alexa")).toBe(
      `console.log("Howdy, Alexa!")`
    );
  });
  test(`the javaScriptGreeter class overrides the greet method to yield the string "console.log("Hello, Julia!")`, () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(javaScriptGreeter.greet("Julia")).toBe(
      `console.log("Hello, Julia!")`
    );
  });
});

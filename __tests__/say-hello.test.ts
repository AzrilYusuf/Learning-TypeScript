import sayHello from "../src/say-hello";

describe("sayHello", () => {
  it("should return say hello Azril", () => {
    const name = "Azril";
    expect(sayHello(name)).toBe("Hello Azril");
  });
});

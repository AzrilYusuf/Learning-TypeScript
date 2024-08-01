describe("Union Type", () => {
  it("should support union type", () => {
    let sample: number | string = "eko";
    console.info(sample);

    sample = 100;
    console.info(sample);

    // sample = true;
    // console.info(sample);
  });

  it("should support typeof operator", () => {
    const process = (value: number | string | boolean) => {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 100;
      } else {
        return !value;
      }
    };
    expect(process("string")).toBe("STRING");
    expect(process(100)).toBe(200);
    expect(process(true)).toBe(false);
  });
});

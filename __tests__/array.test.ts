describe("Array", () => {
  it("should same with javascript", () => {
    const name: string[] = ["eko", "budi", "jowoki"];
    const values: number[] = [1, 2, 3];
    console.info(name);
    console.info(values);
  });

  it("should support read only array", () => {
    const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
    console.info(hobbies);
    console.log(hobbies[0]);
  });

  it("should support tuple", () => {
    const person: readonly [string, string, number] = ["Azril", "Yusuf", 15];
    console.info(person);
    console.info(person[0]);
  });
});

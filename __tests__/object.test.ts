describe("Object", () => {
  it("should support object", () => {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Azril",
    };

    console.info(person);

    person.id = "2";
    person.name = "Yusuf";

    console.info(person);
  });
});

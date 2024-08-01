import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should support type alias", () => {
    const category: Category = {
      id: "1",
      name: "Handphone",
    };

    const product: Product = {
      id: 1,
      name: "Samsung S24 Ultra",
      price: 2000000,
      category: category,
    };

    // product.description = "Test";
    console.info(category);
    console.info(product);
  });
});

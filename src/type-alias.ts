// Type alias union
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; // * Tanda ? untuk menandakan property/attribute dari object itu optional
  // * (Bisa digunakan di type alias ataupun object type)
};

//  * enum type
export enum CustomerType {
  REGULAR = "REGULAR",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export type Customer = {
  id: ID;
  name: string;
  type: CustomerType;
};

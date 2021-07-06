import { Category } from "./category-model";

export class Product {



  constructor() { }

  id: number;
  code: string;
  category: Category;
  brand: string;
  costPrice: number;
  salePrice: number;
  currentInventory: number;
  observation: string;
  description: string
}

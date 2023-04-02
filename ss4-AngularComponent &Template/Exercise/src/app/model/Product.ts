import {Category} from "./Category";

export interface Product {
  id: number;
  name: string;
  price: string;
  category: Category;
  desc: string
}

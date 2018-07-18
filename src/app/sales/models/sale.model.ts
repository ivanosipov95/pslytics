export interface Sale {
  id: string;
  name: string;
  poster: string;
  price: number;
  released: string;
  rate: Rate;
  discounts: Discount[];
}

export interface Discount {
  is_plus: boolean;
  value: number;
  percentage: number;
  since: string;
  till: string;
}

export interface Rate {
  total: number;
  value: number;
}

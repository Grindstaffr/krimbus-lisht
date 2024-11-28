export interface Product {
  brand?: string;
  model?: string;
  type?: string;
  specifications?: string;
  accessories?: string;
  contents?: string;
  subcomponents?: Record<string, any>;
  [key: string]: any;
}

export interface WishlistItem {
  name: string;
  category: string;
  description: string;
  thoughts: string[];
  link?: string;
  [key: string]: any;
} 
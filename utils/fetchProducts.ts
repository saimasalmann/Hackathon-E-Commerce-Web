import { client } from "@/sanity/lib/client";
import { Product } from "../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const products: Product[] = await client.fetch(
      `*[_type=='product']{
        _id,
        productName,
        status,
        price,
        colors,
        category,
        "image": image.asset->url,
        "slug": slug.current
      }`
    );

    if (!products || products.length === 0) {
      console.warn("Warning: No products found");
      return [];
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

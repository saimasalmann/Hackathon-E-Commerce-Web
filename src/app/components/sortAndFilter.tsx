"use client";
import React, { useState } from "react";
import { Product } from "../../../types/product";
import ProductListing from "./productCard";

export default function SortAndFilter({ products }: { products: Product[] }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType = e.target.value;
    const sortedProducts = [...products];

    if (sortType === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="w-full p-6">
      <div className="flex justify-end gap-4 py-4">
        <label htmlFor="sort" className="mr-2">
          Sort By:
        </label>
        <select id="sort" className="border rounded p-1" onChange={handleSort}>
          <option value="select">Select</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductListing key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

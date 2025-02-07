"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import AddToCart from "@/app/components/addToCart";
import { Product } from "../../../../types/product";

async function fetchProduct(slug: string) {
  return await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,  
      productName,  
      description,  
      status,  
      price,  
      colors, 
      category, 
      quantity, 
      "image": image.asset->url
    }`,
    { slug }
  );
}

function ProductDetails() {
  const params = useParams(); // Get params dynamically
  const slug = params?.slug as string; // Ensure it's a string

  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchProduct(slug)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [slug]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 min-h-screen bg-white rounded-lg mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-white rounded-lg">
          <Image
            width={300}
            height={300}
            src={product.image}
            alt={product.productName}
            className="object-fill object-center overflow-hidden rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900">
            {product.productName}
          </h2>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold">{product.price}</p>
          {/* AddToCart Component */}
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

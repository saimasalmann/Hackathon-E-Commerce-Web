import React from "react";
import { Product } from "../../../types/product";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

function ProductListing({ product }: { product: Product }) {
  return (
    <div>
      <Card className=" bg-white">
        <CardHeader>
          <Link href={`/productDetails/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.productName}
              width={300}
              height={300}
              className="hover:scale-105 duration-300 w-full object-cover rounded-md mb-4"
            />
          </Link>
        </CardHeader>
        <CardContent>
          <p className="text-red-700">{product.status}</p>
          <h3 className="text-lg font-semibold">{product.productName}</h3>
          <p className="text-gray-500 text-sm">{product.category}</p>
          <p className="text-gray-500 text-sm">{product.colors} </p>
          <p className="text-sm text-black font-semibold">${product.price}</p>
        </CardContent>
        <CardFooter className="flex justify-between ">
          {/* heart icon */}
          <Link href="/wishList" className=" hover:text-gray-500">
            <Heart />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductListing;

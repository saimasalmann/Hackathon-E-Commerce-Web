import Image from "next/image";
import React from "react";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  category:string;
  color:string;
};

const ProductCard=({ name, price, image,category,color }: ProductCardProps) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow hover:shadow-lg transition  duration-100">
      <Image
      width={300}
      height={300}
      src={image}
        alt={name}
        className="hover:scale-105 duration-300 w-full object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className=" text-gray-500 text-sm">{category}</p>
      <p className=" text-gray-500  text-sm">{color}</p>
      <p className="text-sm text-black font-semibold">{price}</p>
    </div>
  );
};

export default ProductCard;

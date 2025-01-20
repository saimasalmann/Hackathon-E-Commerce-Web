import React from "react";
import Sidebar from "@/app/components/sideBar"
import ProductCard from "../components/productCard";
import { FiFilter } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category:string;
  color:string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: "$120",
    image: "/s1.png",
    category:"Men's Shoes",
    color:"1 Colour"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: "$150",
    image: "/s2.png",
    category:"Men's Shoes",
    color:"1 Colour"
  
  },
  {
    id: 3,
    name: "Puma Running Shoes",
    price: "$100",
    image: "/s3.png",
    category:"Men's Shoes",
    color:"1 Colour"
  
  },
  {
    id: 4,
    name: "Under Armour Sneakers",
    price: "$140",
    image: "/s4.png",
    category:"Men's Shoes",
    color:"1 Colour"
  },

  {
    id: 5,
    name: "Nike Sportswear T-Shirt",
    price: "$35",
    image: "/s5.png",
     category:"Women's Clothing",
    color:"1 Colour"  
},
  {
    id: 6,
    name: "Adidas Training Shorts",
    price: "$45",
    image: "/s6.png",
    category:"Women's Clothing",
    color:"1 Colour"
  },
  {
    id: 7,
    name: "Nike Dunk Low Retro SE",
    price: "$60",
    image: "/s7.png",
    category:"Men's Shoes",
    color:"1 Colour"
  },
  {
    id: 8,
    name: "Nike Dri-FIT UV Hyverse",
    price: "$75",
    image: "/s8.png",
    category:"Men's Short-Sleeve Graphic Fitness Top",
    color:"1 Colour"
  },
  {
    id: 9,
    name: "Nike Running Shoes",
    price: "$130",
    image: "/s9.png",
    category:"Men's Shoes",
    color:"1 Colour"
  },
  {
    id: 10,
    name: "Adidas Tank Top",
    price: "$30",
    image: "/s10.png",
    category:"Men's Clothing",
    color:"1 Colour"
  },
  {
    id: 11,
    name: "Puma Cap",
    price: "$25",
    image: "/s11.png",
    category:"Women's Clothing",
    color:"1 Colour"
  },
  {
    id: 12,
    name: "Under Armour Socks",
    price: "$20",
    image: "/s12.png",
    category:"Men's Shoes",
    color:"1 Colour"
  },

];

const ProductPage= () => {
  return (
    <>
        <h1 className="text-3xl text-center font-bold mb-6">All Products</h1>
    <div className="w-full container mx-auto flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="w-full p-6  ">
       {/* filter and sort section */}
        <div className="flex flex-col md:flex-row justify-end gap-4 py-4">
      {/* filter  */}
        <div className="flex items-center gap-2">
          <p className="text-sm md:text-lg">Hide Filters</p>
          <span>
            <FiFilter />
          </span>
          </div>
          {/* Sort By Dropdown */}
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-sm md:text-lg">
              Sort By:
            </label>
            <select id="sort" className="border rounded p-1">
            <option value="select">Select</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
          </div>
            <Link href='/productDetail'>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">

          {products.map((product) => (
             
             <ProductCard
            
            key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              color={product.color}
              price={product.price}
              
            />
            
        ))}

        </div>
        </Link>
      </main>
    </div>
    </>
  );
};

export default ProductPage;


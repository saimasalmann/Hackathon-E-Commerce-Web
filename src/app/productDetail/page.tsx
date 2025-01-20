import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="  max-w-5xl mx-auto p-6 bg-white rounded-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 aspect-square bg-gray-100 rounded-lg">
          <Image
          width={300}
          height={300}
            src="/s3.png"
            alt="tilte"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Nike Air Force 1
              </h2>
              <h2 className="text-2xl font-bold text-gray-900">PLT.AF.ORM</h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its `&quot;`inside out`&quot;`-inspired construction, including unique
              layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the
              Swoosh add coveted appeal, while the unexpected shading, rich
              mixture of materials and aged midsole aesthetic give this release
              an artisan finish.
            </p>

            <div className="pt-4">
              <p className="text-2xl font-semibold">
             ₹ 8 695.00
              </p>
            </div>
          </div>

           <Link href="/shoppingCart">
          <button  className="mt-6 w-full bg-black text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
            Add To Cart
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

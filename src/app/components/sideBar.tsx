// components/Sidebar.tsx
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/3 pr-8 bg-white border-r hidden lg:block">
      <h2 className="text-2xl font-bold mb-4">New (500)</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <ul className="space-y-2">
          {[
            "Shoes",
            "Sports Bras",
            "Tops & T-Shirts",
            "Hoodies & Sweatshirts",
            "Jackets",
            "Trousers & Tights",
            "Shorts",
            "Tracksuits",
            "Jumpsuits & Rompers",
            "Skirts & Dresses",
            "Socks",
            "Accessories & Equipment",
          ].map((category, index) => (
            <li key={index}>
              <button className="text-gray-700 hover:text-blue-500 w-full text-left">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Gender</h3>
        <ul className="space-y-2">
          {["Men", "Women", "Unisex"].map((gender, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-700">{gender}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Kids</h3>
        <ul className="space-y-2">
          {["Boys", "Girls"].map((kidsCategory, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-700">{kidsCategory}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Shop By Price</h3>
        <ul className="space-y-2">
          {["Under ₹2,500", "₹2,501 - ₹5,000"].map((priceRange, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-700">{priceRange}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

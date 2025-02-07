import { fetchProducts } from "../../../utils/fetchProducts";
import Sidebar from "../components/sideBar";
import SortAndFilter from "../components/sortAndFilter";

export default async function ProductPage() {
  const products = await fetchProducts();

  if (products.length === 0) {
    return (
      <p className="text-center text-xl text-red-500">No products found.</p>
    );
  }

  // Extract unique categories
  // const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <h1 className="text-3xl text-center font-bold mb-6">All Products</h1>
      <div className="w-full container mx-auto flex min-h-screen bg-gray-50">
        <Sidebar />
        <SortAndFilter products={products} />
      </div>
    </>
  );
}
